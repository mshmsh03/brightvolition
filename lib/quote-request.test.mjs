import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildQuoteMailto, buildQuotePayload, isFormspreeSuccess } from './quote-request.mjs';

const filled = {
  name: '  Karwan Ali ',
  company: 'Qaiwan Group',
  email: ' karwan@example.com ',
  phone: '+964 750 000 0000',
  scope: 'Two 400A MCC panels',
  gotcha: '',
};

test('payload carries every filled field, trimmed, with reply-to and subject', () => {
  assert.deepEqual(buildQuotePayload(filled, { lang: 'ar', subjectPrefix: 'RFQ from' }), {
    name: 'Karwan Ali',
    company: 'Qaiwan Group',
    email: 'karwan@example.com',
    phone: '+964 750 000 0000',
    message: 'Two 400A MCC panels',
    language: 'ar',
    _subject: 'RFQ from Karwan Ali',
    _gotcha: '',
  });
});

test('payload leaves out optional fields the visitor skipped', () => {
  const payload = buildQuotePayload({ ...filled, company: '  ', phone: '' }, { lang: 'en', subjectPrefix: 'RFQ from' });
  assert.equal('company' in payload, false);
  assert.equal('phone' in payload, false);
});

test('payload passes the honeypot through so Formspree can drop bot submissions', () => {
  const payload = buildQuotePayload({ ...filled, gotcha: 'http://spam.example' }, { lang: 'en', subjectPrefix: 'RFQ from' });
  assert.equal(payload._gotcha, 'http://spam.example');
});

test('mailto fallback includes email and phone so the reply has somewhere to go', () => {
  const href = buildQuoteMailto('info@brightvolition.com', filled, {
    subjectPrefix: 'RFQ from', name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', scope: 'What do you need?',
  });
  assert.equal(
    href,
    'mailto:info@brightvolition.com?subject=RFQ%20from%20Karwan%20Ali&body=' +
      encodeURIComponent('Name: Karwan Ali\nCompany: Qaiwan Group\nEmail: karwan@example.com\nPhone: +964 750 000 0000\n\nWhat do you need?:\nTwo 400A MCC panels'),
  );
});

test('Formspree success is a 2xx with no error fields', () => {
  assert.equal(isFormspreeSuccess(true, { next: 'https://formspree.io/thanks', ok: true }), true);
});

test('Formspree errors are failures even if the body parsed', () => {
  assert.equal(isFormspreeSuccess(false, { errors: [{ code: 'TYPE_EMAIL', message: 'should be an email' }] }), false);
  assert.equal(isFormspreeSuccess(true, { errors: [{ message: 'x' }] }), false);
  assert.equal(isFormspreeSuccess(false, { error: 'Form not found' }), false);
  assert.equal(isFormspreeSuccess(true, null), false);
});
