'use client';

import { useState } from 'react';
import { CircleAlertIcon, CircleCheckIcon, MailIcon, SendIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { buildQuoteMailto, buildQuotePayload, isFormspreeSuccess } from '../lib/quote-request.mjs';

const EMPTY = { name: '', company: '', email: '', phone: '', scope: '', gotcha: '' };

// The site's one "reach out" CTA. With a Formspree form ID set (QUOTE_FORM_ID in
// lib/site-data.js) the request is posted straight to the company inbox, so it
// works on machines with no mail app set up. Without one it falls back to
// opening the visitor's mail app with the details filled in.
export default function QuoteForm({ id, toEmail, formId, lang, t }) {
  const [fields, setFields] = useState(EMPTY);
  // idle | sending | sent | failed
  const [status, setStatus] = useState('idle');

  const set = (key) => (event) => setFields((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formId) {
      window.location.href = buildQuoteMailto(toEmail, fields, {
        subjectPrefix: t.quoteFormSubject,
        name: t.quoteFormName,
        company: t.quoteFormCompany,
        email: t.quoteFormEmail,
        phone: t.quoteFormPhone,
        scope: t.quoteFormScope,
      });
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(buildQuotePayload(fields, { lang, subjectPrefix: t.quoteFormSubject })),
        signal: AbortSignal.timeout(20000),
      });
      const body = await response.json().catch(() => null);
      if (isFormspreeSuccess(response.ok, body)) {
        setStatus('sent');
        setFields(EMPTY);
      } else {
        setStatus('failed');
      }
    } catch {
      setStatus('failed');
    }
  };

  return (
    <Card id={id}>
      <CardHeader>
        <CardTitle>{t.quoteFormTitle}</CardTitle>
        <CardDescription>{t.quoteFormDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {status === 'sent' ? (
          <div role="status" className="flex items-start gap-3">
            <CircleCheckIcon className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.8} />
            <div>
              <p className="font-bold">{t.quoteFormSentTitle}</p>
              <p className="mt-1 text-muted-foreground">{t.quoteFormSentBody}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="quote-name">{t.quoteFormName}</Label>
              <Input id="quote-name" required autoComplete="name" value={fields.name} onChange={set('name')} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="quote-company">
                {t.quoteFormCompany} <span className="font-normal text-muted-foreground">({t.quoteFormOptional})</span>
              </Label>
              <Input id="quote-company" autoComplete="organization" value={fields.company} onChange={set('company')} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="quote-email">{t.quoteFormEmail}</Label>
              <Input
                id="quote-email"
                type="email"
                dir="ltr"
                required
                autoComplete="email"
                value={fields.email}
                onChange={set('email')}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="quote-phone">
                {t.quoteFormPhone} <span className="font-normal text-muted-foreground">({t.quoteFormOptional})</span>
              </Label>
              <Input
                id="quote-phone"
                type="tel"
                dir="ltr"
                autoComplete="tel"
                value={fields.phone}
                onChange={set('phone')}
              />
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="quote-scope">{t.quoteFormScope}</Label>
              <Textarea
                id="quote-scope"
                required
                rows={3}
                placeholder={t.quoteFormScopePlaceholder}
                value={fields.scope}
                onChange={set('scope')}
              />
            </div>
            {/* Honeypot: hidden from people and screen readers; bots fill it. */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={fields.gotcha}
              onChange={set('gotcha')}
            />
            {status === 'failed' && (
              <p role="alert" className="flex items-start gap-2 text-destructive sm:col-span-2">
                <CircleAlertIcon className="mt-0.5 size-4 shrink-0" strokeWidth={1.8} />
                <span>
                  {t.quoteFormFailed}{' '}
                  <a href={`mailto:${toEmail}`} className="ltr-fixed font-bold underline">
                    {toEmail}
                  </a>
                </span>
              </p>
            )}
            <div className="sm:col-span-2">
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t.quoteFormSending : formId ? t.quoteFormSubmit : t.quoteFormSubmitEmail}
                {formId ? <SendIcon /> : <MailIcon />}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
