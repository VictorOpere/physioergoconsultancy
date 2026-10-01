import Link from "next/link";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Icon } from "@/components/ui/Icon";
import { navigation, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-leaf-900 text-leaf-100">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-leaf-800/50 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[84rem] px-gutter pb-10 pt-block">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <p className="text-[1.65rem] font-semibold tracking-[-0.025em] text-canvas">
              PhysioErgo
            </p>
            <p className="mt-1 text-[0.95rem] text-leaf-200">
              {site.legalSuffix}
            </p>
            <p className="mt-5 text-[1.05rem] font-medium text-leaf-300">
              {site.tagline}
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-leaf-200/80">
              Integrated ergonomics and physiotherapy solutions for healthier,
              safer and higher-performing workplaces.
            </p>

            <h2 className="eyebrow mt-8 text-leaf-300">Follow</h2>
            <ul className="mt-4 flex items-center gap-2">
              {site.social.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.shortName} on ${channel.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-leaf-700/70 text-leaf-100 transition-colors duration-200 hover:border-leaf-300 hover:bg-leaf-800 hover:text-canvas"
                  >
                    <BrandIcon name={channel.icon} size={18} />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.phones[0].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Message ${site.shortName} on WhatsApp`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-leaf-700/70 text-leaf-100 transition-colors duration-200 hover:border-leaf-300 hover:bg-leaf-800 hover:text-canvas"
                >
                  <BrandIcon name="whatsapp" size={18} />
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-leaf-300">Explore</h2>
            <ul className="mt-4 flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block whitespace-nowrap py-2 text-[0.97rem] text-leaf-100/85 transition-colors duration-200 hover:text-canvas"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-leaf-300">Contact</h2>
            <ul className="mt-4 flex flex-col gap-2 text-[0.97rem]">
              {site.phones.map((phone, index) => (
                <li key={phone.display}>
                  <a
                    href={phone.tel}
                    className="flex items-start gap-3 py-2 text-leaf-100/85 transition-colors duration-200 hover:text-canvas"
                  >
                    <Icon
                      name="phone"
                      size={18}
                      className={`mt-0.5 shrink-0 text-leaf-300 ${index > 0 ? "invisible" : ""}`}
                    />
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 break-all py-2 text-leaf-100/85 transition-colors duration-200 hover:text-canvas"
                >
                  <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-leaf-300" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 py-2 text-leaf-100/85">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-leaf-300" />
                <address className="not-italic leading-relaxed">
                  {site.city}
                  <br />
                  {site.postalAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-leaf-700/60 pt-7 text-[0.85rem] text-leaf-200/85 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; Developed by {site.developer}</p>
        </div>
      </div>
    </footer>
  );
}
