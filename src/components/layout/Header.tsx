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

function serviceDropdownItemClass(active: boolean) {
  return [
    "flex min-h-11 items-center px-4 text-left text-sm font-medium tracking-tight text-midnight",
    "transition-colors duration-150",
    active ? "bg-ice" : "bg-transparent hover:bg-ice",
    "focus-visible:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-signature",
  ].join(" ");
}

function ServicesDropdownPanel({
  id,
  pathname,
  onNavigate,
}: {
  id: string;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div
      id={id}
      className="min-w-[17rem] overflow-hidden rounded-[10px] border border-border bg-pure py-1.5 shadow-[0_10px_28px_-18px_rgba(6,26,56,0.45)]"
    >
      <ul role="list" className="m-0 list-none p-0">
        {serviceNavItems.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={serviceDropdownItemClass(active)}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mx-4 my-1.5 h-px bg-border" aria-hidden />
      <Link
        href="/services"
        className={[
          "mx-1.5 flex min-h-10 items-center rounded-md px-2.5 text-sm font-semibold tracking-tight text-signature",
          "transition-colors duration-150 hover:bg-ice",
          "focus-visible:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-signature",
        ].join(" ")}
        aria-current={pathname === "/services" ? "page" : undefined}
        onClick={onNavigate}
      >
        View All Services
      </Link>
    </div>
  );
}

function DesktopServicesNav({
  active,
  pathname,
}: {
  active: boolean;
  pathname: string;
}) {
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
          pathname={pathname}
          onNavigate={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

function MobileServicesNav({
  active,
  pathname,
  onNavigate,
}: {
  active: boolean;
  pathname: string;
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
          {serviceNavItems.map((item) => {
            const itemActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={serviceDropdownItemClass(itemActive)}
                  aria-current={itemActive ? "page" : undefined}
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="my-1.5 ml-1 h-px bg-border" aria-hidden />
        <Link
          href="/services"
          className="flex min-h-10 items-center rounded-md px-4 text-sm font-semibold tracking-tight text-signature transition-colors duration-150 hover:bg-ice focus-visible:bg-ice focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signature"
          aria-current={pathname === "/services" ? "page" : undefined}
          onClick={onNavigate}
        >
          View All Services
        </Link>
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
  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

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
                <DesktopServicesNav
                  key={link.href}
                  active={servicesActive}
                  pathname={pathname}
                />
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
                  pathname={pathname}
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
