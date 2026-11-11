"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { navLinks, serviceNavItems, site } from "@/lib/site";

function navLinkClass(active: boolean) {
  return [
    "font-heading relative inline-flex min-h-11 items-center text-base font-medium tracking-[0.01em] text-midnight",
    "transition-colors duration-150",
    "after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-left after:bg-signature after:transition-transform after:duration-150 after:ease-out",
    active
      ? "after:scale-x-100"
      : "after:scale-x-0 hover:text-signature hover:after:scale-x-100",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature",
  ].join(" ");
}

function mobileNavLinkClass(active: boolean) {
  return [
    "font-heading relative flex min-h-12 items-center px-1 text-base font-medium tracking-[0.01em] text-midnight",
    "transition-colors duration-150",
    "after:absolute after:bottom-2 after:left-1 after:right-1 after:h-px after:origin-left after:bg-signature after:transition-transform after:duration-150",
    active ? "after:scale-x-100" : "after:scale-x-0",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature",
  ].join(" ");
}

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`size-3.5 shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6.25 8 10l4-3.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ kind }: { kind: (typeof serviceNavItems)[number]["icon"] }) {
  const className = "size-4 shrink-0 text-signature";
  if (kind === "exterior") {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
        <rect x="2.5" y="2.5" width="11" height="11" rx="1.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 2.5v11M2.5 8h11" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === "interior") {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
        <path
          d="M2.75 13.25V4.5L8 2.75l5.25 1.75v8.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 6.5v6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "gutter") {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
        <path
          d="M2.5 5.5h11M3.5 5.5v2.25c0 .8.45 1.5 1.15 1.85L6 10.25v3.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 5.5v1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path
        d="M2.5 6.25h11v1.5H2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 6.25V4.75c0-.7.55-1.25 1.25-1.25h5.5c.7 0 1.25.55 1.25 1.25v1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="5.25" cy="5.35" r="0.65" fill="currentColor" />
      <circle cx="8" cy="5.35" r="0.65" fill="currentColor" />
      <circle cx="10.75" cy="5.35" r="0.65" fill="currentColor" />
    </svg>
  );
}

function ServicesDropdownPanel({
  id,
  onNavigate,
}: {
  id: string;
  onNavigate?: () => void;
}) {
  return (
    <ul
      id={id}
      role="list"
      className="min-w-[16.5rem] rounded-md border border-border bg-pure py-1.5 shadow-[0_12px_32px_-16px_rgba(6,26,56,0.35)]"
    >
      {serviceNavItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="flex min-h-11 items-center gap-2.5 px-3.5 text-sm font-medium text-midnight transition-colors duration-150 hover:bg-ice focus-visible:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-signature"
            onClick={onNavigate}
          >
            <ServiceIcon kind={item.icon} />
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function DesktopServicesNav({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        chevronRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <div className="inline-flex items-center gap-0.5">
        <Link
          href="/services"
          className={navLinkClass(active)}
          aria-current={active ? "page" : undefined}
        >
          Services
        </Link>
        <button
          ref={chevronRef}
          type="button"
          className="inline-flex size-8 items-center justify-center rounded-md text-midnight transition-colors hover:text-signature focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close Services menu" : "Open Services menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <ChevronIcon open={open} />
        </button>
      </div>

      <div
        className={[
          "absolute left-0 top-full z-[60] pt-2 transition-opacity duration-150",
          open ? "visible opacity-100" : "invisible opacity-0",
        ].join(" ")}
        onMouseEnter={clearCloseTimer}
      >
        <ServicesDropdownPanel
          id={menuId}
          onNavigate={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

function MobileServicesNav({
  active,
  onNavigate,
}: {
  active: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const submenuId = useId();

  return (
    <div>
      <div className="flex items-center gap-1">
        <Link
          href="/services"
          className={`${mobileNavLinkClass(active)} flex-1`}
          aria-current={active ? "page" : undefined}
          onClick={onNavigate}
        >
          Services
        </Link>
        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border text-midnight transition-colors hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
          aria-expanded={expanded}
          aria-controls={submenuId}
          aria-label={expanded ? "Collapse Services menu" : "Expand Services menu"}
          onClick={() => setExpanded((value) => !value)}
        >
          <ChevronIcon open={expanded} />
        </button>
      </div>
      <div id={submenuId} hidden={!expanded} className="pb-1 pl-2">
        <ul className="mt-1 space-y-0.5 border-l border-border pl-3">
          {serviceNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-11 items-center gap-2.5 rounded-md px-2 text-sm font-medium text-midnight transition-colors hover:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
                onClick={onNavigate}
              >
                <ServiceIcon kind={item.icon} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesActive = pathname === "/services";

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const firstLink = menuRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-pure">
      <Container className="grid h-[var(--header-height)] grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="relative flex shrink-0 items-center justify-self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          aria-label={`${site.name} home`}
          onClick={closeMenu}
        >
          <Image
            src="/brand/logos/primary-horizontal-navy-transparent.png"
            alt={site.name}
            width={2172}
            height={724}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-8 lg:flex"
        >
          {navLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <DesktopServicesNav key={link.href} active={servicesActive} />
              );
            }
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass(active)}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <Link
            href="/quote"
            className="font-heading inline-flex min-h-11 items-center justify-center rounded-md bg-signature px-5 text-[0.9375rem] font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-md border border-border text-midnight transition-colors duration-150 hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition duration-150 motion-reduce:transition-none ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition duration-150 motion-reduce:transition-none ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition duration-150 motion-reduce:transition-none ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </Container>

      <div
        ref={menuRef}
        id={menuId}
        hidden={!open}
        className="border-t border-border bg-pure lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-3">
          {navLinks.map((link) => {
            if (link.href === "/services") {
              return (
                <MobileServicesNav
                  key={link.href}
                  active={servicesActive}
                  onNavigate={closeMenu}
                />
              );
            }
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={mobileNavLinkClass(active)}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/quote"
            className="font-heading mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-signature px-5 text-base font-semibold tracking-tight text-pure transition-colors duration-150 hover:bg-[#0656d6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature"
            onClick={closeMenu}
          >
            Get a Free Quote
          </Link>
        </Container>
      </div>
    </header>
  );
}
