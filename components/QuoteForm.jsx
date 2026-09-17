'use client';

import { useState } from 'react';
import { MailIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

// Gives the site's one "reach out" CTA some structure instead of a blank
// compose window: name, company, and what they need. Still no backend —
// submitting composes a mailto: link from the filled fields and hands off to
// the visitor's own mail client, so nothing leaves this page until they
// choose to send it.
export default function QuoteForm({ id, toEmail, t }) {
  const [fields, setFields] = useState({ name: '', company: '', scope: '' });

  const set = (key) => (event) => setFields((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `${t.quoteFormSubject} ${fields.name}`;
    const lines = [
      `${t.quoteFormName}: ${fields.name}`,
      fields.company ? `${t.quoteFormCompany}: ${fields.company}` : null,
      '',
      `${t.quoteFormScope}:`,
      fields.scope,
    ].filter((line) => line !== null);
    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <Card id={id}>
      <CardHeader>
        <CardTitle>{t.quoteFormTitle}</CardTitle>
        <CardDescription>{t.quoteFormDescription}</CardDescription>
      </CardHeader>
      <CardContent>
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
          <div className="sm:col-span-2">
            <Button type="submit">
              {t.quoteFormSubmit}
              <MailIcon />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
