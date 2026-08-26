"use client";

import { useState, useEffect } from "react";
import { Star, Send, User, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import type { Review } from "@/lib/constants";
import { useLanguage, useT } from "@/lib/i18n";
import { REVIEW_TEXTS_EN } from "@/lib/translations";

// Local storage key
const REVIEWS_STORAGE_KEY = "drfa_reviews";

// Helper to get reviews from localStorage
function getStoredReviews(): Review[] {
  if (typeof window === "undefined") return getDefaultReviews();
  try {
    const stored = localStorage.getItem(REVIEWS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : getDefaultReviews();
  } catch {
    return getDefaultReviews();
  }
}

// Helper to save reviews to localStorage
function saveReviews(reviews: Review[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
}

// Default reviews for demo
function getDefaultReviews(): Review[] {
  return [
    {
      id: "1",
      name: "Peter van den Berg",
      rating: 5,
      text: "Eindelijk een administratiekantoor dat begrijpt wat ik nodig heb als zzp'er. Denny neemt de tijd om alles uit te leggen en denkt echt mee. Top service!",
      date: "2024-11-15",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      name: "Sandra Jansen",
      rating: 5,
      text: "Na jaren van stress over mijn boekhouding heb ik nu rust. Alles wordt perfect afgehandeld en ik krijg altijd snel antwoord op mijn vragen.",
      date: "2024-10-28",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "3",
      name: "Mike de Vries",
      rating: 4,
      text: "Professioneel en betrouwbaar. De kwartaalrapportages zijn helder en geven mij goed inzicht in mijn financiële situatie. Aanrader!",
      date: "2024-10-10",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: "4",
      name: "Lisa Bakker",
      rating: 5,
      text: "De overstap naar DRFA was de beste keuze voor mijn webshop. Moneybird is samen ingericht en ik zie nu precies hoe mijn zaak ervoor staat.",
      date: "2025-02-18",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: "5",
      name: "Johan Vermeer",
      rating: 5,
      text: "Mijn BTW-aangifte is altijd op tijd en klopt gewoon. Geen verrassingen achteraf, en de vaste maandprijs maakt het lekker overzichtelijk.",
      date: "2025-04-02",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: "6",
      name: "Fatima El Amrani",
      rating: 5,
      text: "Heldere communicatie en altijd dezelfde adviseur. Ik kan met elke vraag terecht en krijg antwoord in normale taal, zonder ingewikkelde termen.",
      date: "2025-06-11",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: "7",
      name: "Tom Hendriks",
      rating: 4,
      text: "Snel bereikbaar via WhatsApp en mijn jaarcijfers waren ruim op tijd klaar. Fijn dat er echt met je wordt meegedacht als ondernemer.",
      date: "2025-09-27",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: "8",
      name: "Esra Yilmaz",
      rating: 5,
      text: "Als startende zzp'er zag ik op tegen de administratie. DRFA heeft alles ingericht en legt stap voor stap uit hoe het werkt. Een enorme opluchting!",
      date: "2026-01-14",
      status: "approved",
      photo: "https://randomuser.me/api/portraits/women/24.jpg",
    },
  ];
}

// Star Rating Component
interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function StarRating({
  rating,
  onRatingChange,
  interactive = false,
  size = "md",
  variant = "light",
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const sizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!interactive}
          onClick={() => onRatingChange?.(star)}
          onMouseEnter={() => interactive && setHoverRating(star)}
          onMouseLeave={() => interactive && setHoverRating(0)}
          className={cn(
            "transition-colors",
            interactive && "cursor-pointer hover:scale-110"
          )}
          aria-label={`${star} ster${star !== 1 ? "ren" : ""}`}
        >
          <Star
            className={cn(
              sizes[size],
              (hoverRating || rating) >= star
                ? "fill-accent text-accent"
                : variant === "dark"
                  ? "fill-white/15 text-white/15"
                  : "fill-muted text-muted"
            )}
          />
        </button>
      ))}
    </div>
  );
}

// Profielfoto met fallback-icoon als de foto niet laadt
function ReviewAvatar({ review, className }: { review: Review; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (!review.photo || failed) {
    return (
      <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary", className)}>
        <User className="h-5 w-5 text-primary" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={review.photo}
      alt={`Profielfoto van ${review.name}`}
      width={44}
      height={44}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm", className)}
    />
  );
}

// Single Review Card
interface ReviewCardProps {
  review: Review;
  delay?: number;
}

function ReviewCard({ review, delay = 0 }: ReviewCardProps) {
  const formattedDate = new Date(review.date).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <ReviewAvatar review={review} />
          <div>
            <p className="font-medium">{review.name || "Anoniem"}</p>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" />
      </div>
      <p className="text-muted-foreground">{review.text}</p>
    </div>
  );
}

// =============================================================================
// REVIEWS MARQUEE - twee doorlopende rijen met donkere glas-kaarten
// =============================================================================
function MarqueeCard({ review }: { review: Review }) {
  const { lang } = useLanguage();
  const t = useT();

  const formattedDate = new Date(review.date).toLocaleDateString(t.reviews.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Toon de Engelse versie van de standaardreviews als de taal Engels is
  const reviewText =
    lang === "en" && REVIEW_TEXTS_EN[review.id] ? REVIEW_TEXTS_EN[review.id] : review.text;

  return (
    <div className="relative flex w-[290px] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-colors duration-300 hover:border-sky-300/40 hover:bg-white/[0.1] sm:w-[340px]">
      <Quote className="absolute right-5 top-5 h-7 w-7 text-sky-300/20" aria-hidden="true" />
      <StarRating rating={review.rating} size="sm" variant="dark" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-200">
        {reviewText}
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 p-[2px]">
          <ReviewAvatar review={review} className="h-10 w-10 ring-0 shadow-none" />
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight text-white">
            {review.name || t.reviews.anonymous}
          </p>
          <p className="mt-0.5 text-xs text-slate-400">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  reviews,
  direction,
}: {
  reviews: Review[];
  direction: "left" | "right";
}) {
  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className={cn(
          "flex w-max gap-6 group-hover:[animation-play-state:paused]",
          direction === "right" ? "animate-marquee-right" : "animate-marquee-left"
        )}
      >
        {/* Lijst twee keer achter elkaar voor een naadloze loop */}
        {[...reviews, ...reviews].map((review, index) => (
          <MarqueeCard key={`${review.id}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsMarquee() {
  const [reviews, setReviews] = useState<Review[]>(getDefaultReviews());

  useEffect(() => {
    // Standaardreviews aangevuld met goedgekeurde ingezonden reviews
    const defaults = getDefaultReviews();
    const submitted = getStoredReviews().filter(
      (r) => r.status === "approved" && !defaults.some((d) => d.id === r.id)
    );
    setReviews([...defaults, ...submitted]);
  }, []);

  return <MarqueeRow reviews={reviews} direction="right" />;
}

// Reviews List Component
interface ReviewsListProps {
  limit?: number;
  showAll?: boolean;
}

export function ReviewsList({ limit, showAll = false }: ReviewsListProps) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const allReviews = getStoredReviews();
    const approvedReviews = showAll
      ? allReviews
      : allReviews.filter((r) => r.status === "approved");
    setReviews(limit ? approvedReviews.slice(0, limit) : approvedReviews);
  }, [limit, showAll]);

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p>Nog geen reviews. Wees de eerste!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <ReviewCard key={review.id} review={review} delay={index * 100} />
      ))}
    </div>
  );
}

// Review Form Component
export function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast({
        title: "Selecteer een beoordeling",
        description: "Kies hoeveel sterren je wilt geven.",
        variant: "destructive",
      });
      return;
    }

    if (text.trim().length < 10) {
      toast({
        title: "Tekst te kort",
        description: "Schrijf minimaal 10 karakters voor je review.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newReview: Review = {
        id: Date.now().toString(),
        name: name.trim() || "Anoniem",
        rating,
        text: text.trim(),
        date: new Date().toISOString().split("T")[0],
        status: "pending",
      };

      const existingReviews = getStoredReviews();
      saveReviews([newReview, ...existingReviews]);

      toast({
        title: "Bedankt voor je review!",
        description: "Je review wordt beoordeeld en verschijnt binnenkort.",
      });

      setName("");
      setRating(0);
      setText("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-semibold">Laat een review achter</h3>

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Naam (optioneel)
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Je naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Beoordeling *</label>
        <StarRating rating={rating} onRatingChange={setRating} interactive size="lg" />
      </div>

      <div>
        <label htmlFor="review-text" className="mb-2 block text-sm font-medium">
          Je ervaring *
        </label>
        <Textarea
          id="review-text"
          placeholder="Deel je ervaring met Administratiekantoor DRFA..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          maxLength={500}
        />
        <p className="mt-1 text-xs text-muted-foreground">{text.length}/500</p>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          "Verzenden..."
        ) : (
          <>
            <Send className="h-4 w-4" />
            Review plaatsen
          </>
        )}
      </Button>
    </form>
  );
}

// Admin Reviews Component
export function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  // Simple password check (in real app, use proper auth)
  const ADMIN_PASSWORD = "drfa2024";

  useEffect(() => {
    if (isAuthenticated) {
      setReviews(getStoredReviews());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({ title: "Ingelogd", description: "Welkom in het admin panel." });
    } else {
      toast({
        title: "Onjuist wachtwoord",
        description: "Probeer het opnieuw.",
        variant: "destructive",
      });
    }
  };

  const handleApprove = (id: string) => {
    const updated = reviews.map((r) =>
      r.id === id ? { ...r, status: "approved" as const } : r
    );
    setReviews(updated);
    saveReviews(updated);
    toast({ title: "Review goedgekeurd" });
  };

  const handleDelete = (id: string) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    saveReviews(updated);
    toast({ title: "Review verwijderd" });
  };

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md py-16">
        <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
          <h1 className="mb-6 text-2xl font-bold">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Inloggen
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const pendingReviews = reviews.filter((r) => r.status === "pending");
  const approvedReviews = reviews.filter((r) => r.status === "approved");

  return (
    <div className="py-16">
      <h1 className="mb-8 text-3xl font-bold">Reviews beheren</h1>

      {/* Pending Reviews */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-accent">
          Wachtend op goedkeuring ({pendingReviews.length})
        </h2>
        {pendingReviews.length === 0 ? (
          <p className="text-muted-foreground">Geen reviews in de wachtrij.</p>
        ) : (
          <div className="space-y-4">
            {pendingReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg border border-accent/30 bg-accent/5 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="font-medium">{review.name}</span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <p className="mb-4 text-muted-foreground">{review.text}</p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleApprove(review.id)}>
                    Goedkeuren
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(review.id)}
                  >
                    Verwijderen
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Approved Reviews */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">
          Goedgekeurde reviews ({approvedReviews.length})
        </h2>
        {approvedReviews.length === 0 ? (
          <p className="text-muted-foreground">Nog geen goedgekeurde reviews.</p>
        ) : (
          <div className="space-y-4">
            {approvedReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <span className="font-medium">{review.name}</span>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <StarRating rating={review.rating} size="sm" />
                </div>
                <p className="mb-4 text-muted-foreground">{review.text}</p>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(review.id)}
                >
                  Verwijderen
                </Button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
