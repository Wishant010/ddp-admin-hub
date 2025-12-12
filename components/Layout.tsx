"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, CONTACT, SOCIALS, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Header Component
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo with hover animation */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-lg font-bold text-primary-foreground">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-none transition-colors group-hover:text-primary">DDP</span>
              <span className="text-xs text-muted-foreground">Administratie</span>
            </div>
          </Link>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                  pathname === item.href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
                {/* Active indicator line */}
                <span className={cn(
                  "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                  pathname === item.href ? "w-4" : "w-0"
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Socials */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button asChild size="sm" className="group">
              <Link href="/contact">
                Contact
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-lg p-2 text-foreground transition-all duration-200 hover:bg-muted md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay with animations */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-foreground md:hidden animate-fade-in">
          <div className="flex h-full flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-primary-foreground transition-transform hover:rotate-90 duration-300"
                aria-label="Sluit menu"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Navigation Links with stagger animation */}
            <nav className="flex flex-1 flex-col justify-center px-8">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between border-b border-primary-foreground/10 py-5 text-2xl font-medium text-primary-foreground opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {item.label}
                  <ArrowRight className="h-6 w-6 opacity-50 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>

            {/* Contact Info + WhatsApp */}
            <div className="space-y-4 p-8 opacity-0 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="h-5 w-5" />
                <span>{CONTACT.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="h-5 w-5" />
                <span>{CONTACT.email}</span>
              </div>
              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="mt-6 w-full"
              >
                <a
                  href={SOCIALS.whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp ons
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Footer Component
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-transform duration-300 group-hover:scale-110">
                <span className="text-lg font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-lg font-semibold leading-none">Administratiekantoor DDP</span>
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

          {/* Quick Links with hover effects */}
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
          <p>© {currentYear} Administratiekantoor DDP. Alle rechten voorbehouden.</p>
          <p>KVK: {CONTACT.kvk}</p>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Floating Button with enhanced animation
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

// Main Layout Wrapper
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
