"use client";

import { useState, useEffect } from "react";
import { Star, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import type { Review } from "@/lib/constants";

// Local storage key
const REVIEWS_STORAGE_KEY = "ddp_reviews";

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
    },
    {
      id: "2",
      name: "Sandra Jansen",
      rating: 5,
      text: "Na jaren van stress over mijn boekhouding heb ik nu rust. Alles wordt perfect afgehandeld en ik krijg altijd snel antwoord op mijn vragen.",
      date: "2024-10-28",
      status: "approved",
    },
    {
      id: "3",
      name: "Mike de Vries",
      rating: 4,
      text: "Professioneel en betrouwbaar. De kwartaalrapportages zijn helder en geven mij goed inzicht in mijn financiële situatie. Aanrader!",
      date: "2024-10-10",
      status: "approved",
    },
  ];
}

// Star Rating Component
interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: "sm" | "md" | "lg";
}

export function StarRating({
  rating,
  onRatingChange,
  interactive = false,
  size = "md",
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
                : "fill-muted text-muted"
            )}
          />
        </button>
      ))}
    </div>
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
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
            <User className="h-5 w-5 text-primary" />
          </div>
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
          placeholder="Deel je ervaring met Administratiekantoor DDP..."
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
  const ADMIN_PASSWORD = "ddp2024";

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
