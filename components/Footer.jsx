import Link from 'next/link';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { LinkedinIcon } from './icons';
import {
  EMAIL,
  LINKEDIN,
  PHONE_DISPLAY,
  PHONE_HREF,
  PROFILE_PDF,
  SITE,
  pagePath,
} from '../lib/site-data';

const FOOTER_NAV = ['about', 'services', 'products', 'projects', 'contact'];

function SocialLink({ href, label, external = false, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className="flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-lavender transition-colors hover:border-gold hover:bg-gold hover:text-navy"
    >
      {children}
    </a>
  );
}

export default function Footer({ lang }) {
  const t = SITE[lang];

  return (
    <footer className="bg-navy pt-18 text-lavender">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img src="/assets/img/logo/logo-white.png" alt={t.footerLogoAlt} className="mb-4 h-9" />
            <p className="text-[.92rem]">{t.tagline}</p>
            <div className="mt-4.5 flex gap-2.5">
              <SocialLink href={`mailto:${EMAIL}`} label="Email">
                <MailIcon className="size-4" strokeWidth={1.8} />
              </SocialLink>
              <SocialLink href={PHONE_HREF} label="Call">
                <PhoneIcon className="size-4" strokeWidth={1.8} />
              </SocialLink>
              <SocialLink href={LINKEDIN} label="LinkedIn" external>
                <LinkedinIcon className="size-4" strokeWidth={1.8} />
              </SocialLink>
            </div>
          </div>

          <div>
            <h4 className="mb-4.5 text-[.9rem] font-bold tracking-eyebrow text-cream uppercase">
              {t.footerCompanyHeading}
            </h4>
            <ul>
              {FOOTER_NAV.map((p) => (
                <li key={p} className="mb-2.75">
                  <Link href={pagePath(lang, p)} className="text-[.94rem] transition-colors hover:text-gold">
                    {t.footerCompanyNav[p]}
                  </Link>
                </li>
              ))}
              <li className="mb-2.75">
                {/* A plain anchor, not next/link — the client router has nothing
                    to route to for a PDF, and it would drop the download hint. */}
                <a href={PROFILE_PDF} download className="text-[.94rem] transition-colors hover:text-gold">
                  {t.profileLabel}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 text-[.9rem] font-bold tracking-eyebrow text-cream uppercase">
              {t.footerServicesHeading}
            </h4>
            <ul>
              {t.footerServices.map((s) => (
                <li key={s} className="mb-2.75 text-[.94rem]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4.5 text-[.9rem] font-bold tracking-eyebrow text-cream uppercase">
              {t.contactHeading}
            </h4>
            <ul>
              <li className="mb-3.5 flex items-start gap-2.5 text-[.92rem]">
                <MapPinIcon className="mt-0.5 size-4.5 shrink-0 text-gold" strokeWidth={1.8} />
                <span>{t.address}</span>
              </li>
              <li className="mb-3.5 flex items-start gap-2.5 text-[.92rem]">
                <PhoneIcon className="mt-0.5 size-4.5 shrink-0 text-gold" strokeWidth={1.8} />
                {/* .ltr-fixed keeps the Latin digits from being reordered by the
                    bidi algorithm inside the Arabic and Kurdish footers. */}
                <a href={PHONE_HREF} className="ltr-fixed transition-colors hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="mb-3.5 flex items-start gap-2.5 text-[.92rem]">
                <MailIcon className="mt-0.5 size-4.5 shrink-0 text-gold" strokeWidth={1.8} />
                <a href={`mailto:${EMAIL}`} className="ltr-fixed transition-colors hover:text-gold">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-lavender py-5.5 text-[.84rem]">
          <span>© {new Date().getFullYear()} {t.copyright}</span>
          <span>{t.regionLine}</span>
        </div>
      </div>
    </footer>
  );
}
