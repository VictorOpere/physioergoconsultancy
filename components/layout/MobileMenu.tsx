"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Icon } from "@/components/ui/Icon";
import { navigation, site } from "@/lib/content";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/35 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-canvas shadow-lift transition-transform duration-400 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out-quint)" }}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="eyebrow text-leaf-700">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:bg-leaf-50"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="flex flex-col">
            {navigation.map((item, index) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-line/70 py-4 text-[1.32rem] font-medium tracking-[-0.02em] transition-colors duration-200 ${
                      active ? "text-leaf-700" : "text-ink hover:text-leaf-700"
                    }`}
                  >
                    {item.label}
                    <span className="eyebrow text-leaf-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-line bg-mist px-6 py-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-leaf-700 px-6 py-4 font-semibold text-canvas transition-colors duration-200 hover:bg-leaf-800"
          >
            Book a Consultation
          </Link>
          <div className="mt-5 flex flex-col gap-2 text-[0.9rem] text-ink-muted">
            <a href={site.phones[0].tel} className="flex items-center gap-2.5 hover:text-leaf-700">
              <Icon name="phone" size={17} className="text-leaf-700" />
              {site.phones[0].display}
            </a>
            <a href={site.emailHref} className="flex items-center gap-2.5 break-all hover:text-leaf-700">
              <Icon name="mail" size={17} className="text-leaf-700" />
              {site.email}
            </a>
          </div>

          <ul className="mt-5 flex items-center gap-2">
            {site.social.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.shortName} on ${channel.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-leaf-700 transition-colors duration-200 hover:border-leaf-300 hover:bg-leaf-50"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-leaf-700 transition-colors duration-200 hover:border-leaf-300 hover:bg-leaf-50"
              >
                <BrandIcon name="whatsapp" size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
