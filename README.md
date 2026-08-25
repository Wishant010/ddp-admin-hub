# Administratiekantoor DRFA

Website voor Administratiekantoor DRFA - persoonlijke administratieve ondersteuning voor freelancers, zzp'ers en kleine ondernemers.

## Technologieën

- **Next.js 15** - React framework met App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI componenten library
- **Framer Motion** - Animaties
- **React Query** - Server state management

## Lokaal ontwikkelen

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev

# Production build maken
npm run build

# Production server starten
npm start
```

## Project structuur

```
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Home page
│   ├── pakketten/       # Pakketten page
│   ├── over-ons/        # Over ons page
│   ├── contact/         # Contact page
│   ├── reviews/         # Reviews page
│   └── admin/reviews/   # Admin reviews panel
├── components/          # React componenten
│   ├── ui/              # shadcn/ui componenten
│   └── reactbits/       # Custom animatie componenten
├── lib/                 # Utility functies en constants
├── hooks/               # Custom React hooks
└── public/              # Static assets
```

## Deployen

Dit project kan worden gedeployed op platforms zoals:
- Vercel (aanbevolen voor Next.js)
- Netlify
- Elke andere Node.js hosting provider
