"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

function navLinkClass(active: boolean) {
  return [
    "font-heading relative inline-flex min-h-11 items-center px-2.5 text-[0.9375rem] font-semibold tracking-tight text-midnight",
    "transition-colors duration-150",
    "after:absolute after:inset-x-2.5 after:bottom-2 after:h-px after:origin-left after:bg-signature after:transition-transform after:duration-150 after:ease-out",
    active
      ? "after:scale-x-100"
      : "after:scale-x-0 hover:text-signature hover:after:scale-x-100",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature",
  ].join(" ");
}

function mobileNavLinkClass(active: boolean) {
  return [
    "font-heading relative flex min-h-12 items-center px-1 text-base font-semibold tracking-tight text-midnight",
    "transition-colors duration-150",
    "after:absolute after:bottom-2 after:left-1 after:right-1 after:h-px after:origin-left after:bg-signature after:transition-transform after:duration-150",
    active ? "after:scale-x-100" : "after:scale-x-0",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-signature",
  ].join(" ");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
            className="h-12 w-auto sm:h-[3.25rem]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
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
