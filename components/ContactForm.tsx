"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, SOCIALS } from "@/lib/constants";
import { useT } from "@/lib/i18n";

// WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Contact Info Cards
export function ContactCards() {
  const t = useT();

  const cards = [
    {
      icon: Phone,
      title: t.contact.cards.call,
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phone}`,
      description: t.contact.cards.callDesc,
      external: false,
    },
    {
      icon: Mail,
      title: t.contact.cards.email,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      description: t.contact.cards.emailDesc,
      external: false,
    },
    {
      icon: MapPin,
      title: t.contact.cards.address,
      value: CONTACT.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(`${CONTACT.address}, ${CONTACT.postalCity}`)}`,
      description: CONTACT.postalCity,
      external: true,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card, index) => (
        <a
          key={card.title}
          href={card.href}
          target={card.external ? "_blank" : undefined}
          rel={card.external ? "noopener noreferrer" : undefined}
          className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <card.icon className="h-6 w-6" />
          </div>
          <h3 className="mb-1 font-semibold">{card.title}</h3>
          <p className="text-primary">{card.value}</p>
          <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
        </a>
      ))}
    </div>
  );
}

// Contact Form
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const t = useT();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: t.contact.form.toastRequired,
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t.contact.form.toastInvalidEmail,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.contact.form.toastSent,
        description: t.contact.form.toastSentDesc,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            {t.contact.form.nameLabel}
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t.contact.form.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            {t.contact.form.emailLabel}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.contact.form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            {t.contact.form.phoneLabel}
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t.contact.form.phonePlaceholder}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium">
            {t.contact.form.subjectLabel}
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder={t.contact.form.subjectPlaceholder}
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {t.contact.form.messageLabel}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={t.contact.form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button type="submit" size="lg" disabled={isSubmitting} className="flex-1">
          {isSubmitting ? (
            t.contact.form.sending
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t.contact.form.send}
            </>
          )}
        </Button>
        <Button asChild variant="whatsapp" size="lg" className="flex-1">
          <a
            href={SOCIALS.whatsappUrl(t.contact.form.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.contact.form.whatsapp}
          </a>
        </Button>
      </div>
    </form>
  );
}
