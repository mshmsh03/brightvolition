'use client';

import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { EMAIL } from '../lib/site-data';
import { Button } from './ui/button';
import { Field, FieldRow } from './FormField';
import Reveal from './Reveal';

// There is no backend — the site is a static export on GitHub Pages — so the
// form composes a pre-filled message and hands it to the visitor's mail client,
// exactly as the pre-Next site did. The note below the button is what tells
// them that happened, since handing off to a mail client is invisible if their
// default handler is not configured.
export default function ContactForm({ t }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const subject = (data.get('subject') || '').toString().trim() || t.defaultSubject;
    const message = (data.get('message') || '').toString().trim();

    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <Reveal as="div" className="rounded-card border border-lavender bg-cream p-7 sm:p-9">
      <h3 className="mb-1.5 text-card-title">{t.heading}</h3>
      <p className="mb-6">{t.intro}</p>
      <form onSubmit={handleSubmit}>
        <FieldRow>
          <Field id="cf-name" name="name" label={t.name} type="text" required />
          <Field id="cf-email" name="email" label={t.email} type="email" required />
        </FieldRow>
        <Field id="cf-subject" name="subject" label={t.subject} type="text" placeholder={t.subjectPlaceholder} />
        <Field id="cf-message" name="message" label={t.message} textarea rows={6} required />
        <Button type="submit" variant="gold">
          {t.send}
          <ArrowRightIcon />
        </Button>
        {/* aria-live so the confirmation is announced, not just drawn. */}
        <p
          aria-live="polite"
          className={`mt-3.5 rounded-lg border border-gold bg-lavender px-4 py-3 text-[.9rem] ${sent ? '' : 'hidden'}`}
        >
          {t.note}
        </p>
      </form>
    </Reveal>
  );
}
