"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, CONTACT, SOCIALS, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// =============================================================================
// UNIFIED HEADER - Matches homepage navbar style
// =============================================================================
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
            : "bg-white border-b border-slate-100"
        )}
      >
        <div className="mx-auto flex h-20 w-full items-center justify-between px-8 lg:px-16">
          {/* Logo + Text - Left */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="DRFA Logo"
              width={160}
              height={80}
              className="h-16 w-auto"
            />
            <span className="hidden text-xl font-semibold text-slate-800 sm:block">
              Administratiekantoor
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden items-center gap-10 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors relative",
                  pathname === item.href
                    ? "text-[#0B3772]"
                    : "text-slate-600 hover:text-[#0B3772]"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs - Right */}
          <div className="hidden items-center gap-4 lg:flex shrink-0">
            <Link
              href="#pakketten"
              className="rounded-full border-2 border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-[#0B3772] hover:text-[#0B3772] hover:bg-slate-50"
            >
              Bekijk pakketten
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-sky-300 hover:via-blue-400 hover:to-emerald-300 hover:shadow-lg"
            >
              Offerte aanvragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B3772] lg:hidden">
          <div className="flex h-full flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-white transition-transform hover:rotate-90 duration-300"
                aria-label="Sluit menu"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-1 flex-col justify-center px-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium text-white"
                >
                  {item.label}
                  <ChevronRight className="h-6 w-6 opacity-50 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="space-y-4 p-8">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 py-4 text-center text-lg font-semibold text-white shadow-lg"
              >
                Offerte aanvragen
              </Link>
              <Link
                href="#pakketten"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full border-2 border-white/30 py-4 text-center text-lg font-semibold text-white"
              >
                Bekijk pakketten
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// =============================================================================
// FOOTER
// =============================================================================
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DRFA Logo"
                width={80}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-lg font-semibold leading-none">Administratiekantoor DRFA</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Persoonlijke administratieve ondersteuning voor freelancers, zzp&apos;ers en kleine ondernemers.
              Geen ingewikkelde termen, gewoon eerlijk advies.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIALS.whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-110"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Snelle links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="link-underline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2 group">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 transition-colors group-hover:text-primary" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-foreground transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 group">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 transition-colors group-hover:text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Administratiekantoor DRFA. Alle rechten voorbehouden.</p>
          <p>KVK: {CONTACT.kvk}</p>
        </div>
      </div>
    </footer>
  );
}

// =============================================================================
// WHATSAPP FLOATING BUTTON
// =============================================================================
export function WhatsAppFloatingButton() {
  return (
    <a
      href={SOCIALS.whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce-in animate-pulse-glow"
      style={{ animationDelay: "1s" }}
      aria-label="Chat via WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

// =============================================================================
// MAIN LAYOUT WRAPPER
// =============================================================================
export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hide header on homepage since Hero has its own header */}
      {!isHomePage && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
