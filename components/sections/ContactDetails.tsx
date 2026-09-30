import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { engagementOffers, site } from "@/lib/content";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <ul className="flex flex-col gap-5">
          <ContactRow icon="phone" label="Phone">
            <a
              href={site.phoneHref}
              className="text-[1.05rem] font-medium text-charcoal transition-colors duration-200 hover:text-sage-700"
            >
              {site.phone}
            </a>
          </ContactRow>

          <ContactRow icon="mail" label="Email">
            <a
              href={site.emailHref}
              className="break-all text-[1.05rem] font-medium text-charcoal transition-colors duration-200 hover:text-sage-700"
            >
              {site.email}
            </a>
          </ContactRow>

          <ContactRow icon="pin" label="Postal Address">
            <address className="not-italic leading-relaxed text-charcoal">
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

      <Reveal delay={120}>
        <div className="rounded-panel border border-sage-200 bg-sage-50/70 p-7">
          <h2 className="eyebrow text-sage-700">We Would Welcome the Chance To</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {engagementOffers.map((offer) => (
              <li
                key={offer}
                className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-charcoal-muted"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-700 text-ivory">
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
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sand-100 text-sage-700">
        <Icon name={icon} size={20} />
      </span>
      <div>
        <p className="eyebrow text-charcoal-soft">{label}</p>
        <div className="mt-1.5">{children}</div>
      </div>
    </li>
  );
}
