"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { SOCIALS } from "@/lib/constants";
import { useT } from "@/lib/i18n";

// WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface PackageOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
}

export function PackageOrderModal({ open, onOpenChange, packageName }: PackageOrderModalProps) {
  const t = useT();
  const { toast } = useToast();
  const o = t.packages.order;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetAndClose = () => {
    setName("");
    setPhone("");
    setEmail("");
    setNote("");
    setIsSubmitting(false);
    onOpenChange(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast({ title: o.toastRequired, variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({ title: o.toastInvalidEmail, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    // Aanvraag als WhatsApp-bericht met alle ingevulde gegevens
    const lines = [
      o.waRequestLine.replace("{package}", packageName),
      "",
      `${o.waName}: ${name.trim()}`,
      `${o.waPhone}: ${phone.trim()}`,
      `${o.waEmail}: ${email.trim()}`,
    ];
    if (note.trim()) lines.push(`${o.waNote}: ${note.trim()}`);

    window.open(SOCIALS.whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");

    toast({ title: o.toastSent, description: o.toastSentDesc });
    resetAndClose();
  };

  const directMessage = o.waDirectMessage.replace("{package}", packageName);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] w-[calc(100vw-2rem)] max-w-[460px] overflow-y-auto rounded-[24px] border-0 p-7 shadow-[0_30px_80px_rgba(8,42,91,0.30)] sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-[24px] font-extrabold tracking-[-0.02em] text-[#102A4A]">
            {o.titlePrefix}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #249BF3 0%, #25CBB2 100%)" }}
            >
              {packageName}
            </span>{" "}
            {o.titleSuffix}
          </DialogTitle>
          <DialogDescription className="text-[14.5px] leading-relaxed text-[#65778A]">
            {o.subtitle}
          </DialogDescription>
        </DialogHeader>

        {/* Formulier */}
        <form onSubmit={handleSubmit} className="mt-2 space-y-4">
          <div>
            <label htmlFor="order-name" className="mb-1.5 block text-sm font-semibold text-[#132C49]">
              {o.nameLabel}
            </label>
            <Input
              id="order-name"
              type="text"
              placeholder={o.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="order-phone" className="mb-1.5 block text-sm font-semibold text-[#132C49]">
                {o.phoneLabel}
              </label>
              <Input
                id="order-phone"
                type="tel"
                placeholder={o.phonePlaceholder}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={20}
                required
              />
            </div>
            <div>
              <label htmlFor="order-email" className="mb-1.5 block text-sm font-semibold text-[#132C49]">
                {o.emailLabel}
              </label>
              <Input
                id="order-email"
                type="email"
                placeholder={o.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={100}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="order-note" className="mb-1.5 block text-sm font-semibold text-[#132C49]">
              {o.noteLabel}
            </label>
            <Textarea
              id="order-note"
              placeholder={o.notePlaceholder}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              maxLength={500}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-[16px] text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105 disabled:opacity-60"
            style={{
              background: "linear-gradient(90deg, #208BF4 0%, #20CFAE 100%)",
              boxShadow: "0 10px 26px rgba(31, 158, 203, 0.22)",
            }}
          >
            <Send className="h-[17px] w-[17px]" aria-hidden="true" />
            {isSubmitting ? o.submitting : o.submit}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-[#E4EDF4]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#93A5B8]">
            {o.orDivider}
          </span>
          <span className="h-px flex-1 bg-[#E4EDF4]" />
        </div>

        {/* Direct contact via WhatsApp */}
        <div className="rounded-[18px] border border-[#C9F0E4] bg-[#F2FBF8] p-5 text-center">
          <p className="text-[15px] font-bold text-[#0F7F6B]">{o.directTitle}</p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-[#5A7285]">{o.directText}</p>
          <a
            href={SOCIALS.whatsappUrl(directMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#25D366] text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-[1px] hover:brightness-105"
            style={{ boxShadow: "0 10px 26px rgba(37, 211, 102, 0.28)" }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            {o.directButton}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
