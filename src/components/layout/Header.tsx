"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-pure/95 backdrop-blur-md">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link
          href="/"
          className="relative flex shrink-0 items-center focus-visible:outline-none"
          aria-label={`${site.name} home`}
          onClick={closeMenu}
        >
          <Image
            src="/brand/logos/primary-horizontal-navy-on-white.png"
            alt={site.name}
            width={2172}
            height={724}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-ice text-signature"
                    : "text-midnight/80 hover:bg-cloud hover:text-midnight",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/quote" size="md">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-midnight lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </Container>

      <div
        id={menuId}
        className={`border-t border-border bg-pure lg:hidden ${open ? "block" : "hidden"}`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "rounded-md px-3 py-3 text-base font-medium",
                  active ? "bg-ice text-signature" : "text-midnight",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href="/quote"
            className="mt-2 w-full"
            size="lg"
            onClick={closeMenu}
          >
            Get a Free Quote
          </Button>
        </Container>
      </div>
    </header>
  );
}
