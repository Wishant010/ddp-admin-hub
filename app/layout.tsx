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
        <title>Administratiekantoor DDP</title>
        <meta name="description" content="Persoonlijke administratieve ondersteuning voor freelancers, zzp'ers en kleine ondernemers." />
        <meta name="author" content="Administratiekantoor DDP" />
        <meta property="og:title" content="Administratiekantoor DDP" />
        <meta property="og:description" content="Persoonlijke administratieve ondersteuning voor freelancers, zzp'ers en kleine ondernemers." />
        <meta property="og:type" content="website" />
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
