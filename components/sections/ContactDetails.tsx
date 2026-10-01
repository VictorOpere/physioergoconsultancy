import { BrandIcon } from "@/components/ui/BrandIcon";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { engagementOffers, site } from "@/lib/content";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <ul className="flex flex-col gap-5">
          <ContactRow icon="phone" label="Phone">
            <div className="flex flex-col gap-1">
              {site.phones.map((phone) => (
                <a
                  key={phone.display}
                  href={phone.tel}
                  className="text-[1.05rem] font-medium text-ink transition-colors duration-200 hover:text-leaf-700"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </ContactRow>

          <ContactRow icon="mail" label="Email">
            <a
              href={site.emailHref}
              className="break-all text-[1.05rem] font-medium text-ink transition-colors duration-200 hover:text-leaf-700"
            >
              {site.email}
            </a>
          </ContactRow>

          <ContactRow icon="pin" label="Postal Address">
            <address className="not-italic leading-relaxed text-ink">
              {site.name}
              <br />
              {site.postalAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </ContactRow>
        </ul>
      </Reveal>

      <Reveal delay={60}>
        <div className="rounded-panel border border-leaf-200 bg-leaf-50/70 p-7">
          <h2 className="eyebrow text-leaf-700">Message Us on WhatsApp</h2>
          <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-muted">
            Both lines are on WhatsApp. Pick whichever is easier.
          </p>
          {/* Each button names its own number so the two links stay
              distinguishable to a screen reader reading them back to back. */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {site.phones.map((phone) => (
              <a
                key={phone.display}
                href={phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-leaf-700 px-6 py-3.5 font-semibold text-canvas shadow-soft transition-[background-color,box-shadow] duration-200 hover:bg-leaf-800 hover:shadow-lift"
              >
                <BrandIcon name="whatsapp" size={19} />
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="rounded-panel border border-leaf-200 bg-leaf-50/70 p-7">
          <h2 className="eyebrow text-leaf-700">We Would Welcome the Chance To</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {engagementOffers.map((offer) => (
              <li
                key={offer}
                className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-ink-muted"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-700 text-canvas">
                  <Icon name="check" size={12} strokeWidth={2.4} />
                </span>
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: "phone" | "mail" | "pin";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 border-b border-line pb-5 last:border-0 last:pb-0">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist text-leaf-700">
        <Icon name={icon} size={20} />
      </span>
      <div>
        <p className="eyebrow text-ink-soft">{label}</p>
        <div className="mt-1.5">{children}</div>
      </div>
    </li>
  );
}
