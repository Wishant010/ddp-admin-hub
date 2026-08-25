"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import "@/app/globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Administratiekantoor DRFA</title>
        <meta name="description" content="Persoonlijke administratieve ondersteuning voor freelancers, zzp'ers en kleine ondernemers." />
        <meta name="author" content="Administratiekantoor DRFA" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Administratiekantoor DRFA" />
        <meta property="og:description" content="Persoonlijke administratieve ondersteuning voor freelancers, zzp'ers en kleine ondernemers." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0B3772" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Layout>{children}</Layout>
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
