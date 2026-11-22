// What the Contact page's quote form sends, kept apart from the component so it
// can be tested with `npm test` without a browser.

const clean = (value) => (value ?? '').trim();

// JSON body for Formspree. `email` is the field Formspree uses as the reply-to
// address, `_subject` sets the notification's subject line and `_gotcha` is its
// honeypot: a hidden input people never fill, so a value there marks a bot.
export function buildQuotePayload(fields, { lang, subjectPrefix }) {
  const name = clean(fields.name);
  const payload = { name };
  const company = clean(fields.company);
  if (company) payload.company = company;
  payload.email = clean(fields.email);
  const phone = clean(fields.phone);
  if (phone) payload.phone = phone;
  payload.message = clean(fields.scope);
  payload.language = lang;
  payload._subject = `${subjectPrefix} ${name}`;
  payload._gotcha = fields.gotcha ?? '';
  return payload;
}

// Used only while no Formspree form is configured: hands the same details to
// the visitor's own mail app, as the form did before.
export function buildQuoteMailto(toEmail, fields, labels) {
  const lines = [
    `${labels.name}: ${clean(fields.name)}`,
    clean(fields.company) ? `${labels.company}: ${clean(fields.company)}` : null,
    `${labels.email}: ${clean(fields.email)}`,
    clean(fields.phone) ? `${labels.phone}: ${clean(fields.phone)}` : null,
    '',
    `${labels.scope}:`,
    clean(fields.scope),
  ].filter((line) => line !== null);
  const subject = `${labels.subjectPrefix} ${clean(fields.name)}`;
  return `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

// Formspree answers errors as `{ errors: [...] }` or `{ error: '...' }`, and
// can do so with a 200, so the status alone is not enough.
export function isFormspreeSuccess(httpOk, body) {
  if (!httpOk || body === null || typeof body !== 'object') return false;
  return !('errors' in body) && !('error' in body);
}
