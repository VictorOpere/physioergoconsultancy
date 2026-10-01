"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { gallery } from "@/lib/content";

type Frame = (typeof gallery)[number];

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {gallery.map((frame, index) => (
          <li key={frame.src}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group block w-full text-left"
            >
              <span className="block overflow-hidden rounded-media bg-leaf-100">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={frame.width}
                  height={frame.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
                />
              </span>
              <span className="mt-4 block text-[0.97rem] leading-relaxed text-ink-muted">
                {frame.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null ? (
        <Lightbox
          frames={gallery}
          index={active}
          onIndex={setActive}
          onClose={() => setActive(null)}
        />
      ) : null}
    </>
  );
}

function Lightbox({
  frames,
  index,
  onIndex,
  onClose,
}: {
  frames: readonly Frame[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const frame = frames[index];
  const count = frames.length;

  const step = (delta: number) => {
    onIndex((index + delta + count) % count);
  };

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndex((index + 1) % count);
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndex((index - 1 + count) % count);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled])",
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
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [count, index, onClose, onIndex]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 bg-ink/75"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-caption"
        className="relative flex max-h-full w-full max-w-5xl flex-col"
      >
        <div className="mb-3 flex items-center justify-between text-canvas">
          <p className="text-[0.85rem] font-medium tracking-[0.04em]">
            {index + 1} of {count}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-canvas/10 transition-colors duration-200 hover:bg-canvas/20"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="relative min-h-0 flex-1">
          <Image
            src={frame.src}
            alt={frame.alt}
            width={frame.width}
            height={frame.height}
            priority
            className="mx-auto max-h-[72vh] w-auto max-w-full rounded-media object-contain"
          />

          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photograph"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-canvas text-ink shadow-soft transition-colors duration-200 hover:bg-leaf-50 sm:left-3"
          >
            <Icon name="arrow" size={18} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photograph"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-canvas text-ink shadow-soft transition-colors duration-200 hover:bg-leaf-50 sm:right-3"
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>

        <p id="gallery-caption" className="mt-4 text-center text-[1rem] text-canvas">
          {frame.caption}
        </p>
      </div>
    </div>
  );
}
