# Hariom Enterprise

Premium industrial manufacturing website for **Hariom Enterprise**, a precision engineering manufacturer based in Ahmedabad, Gujarat.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll & hover animations
- **GSAP** — manufacturing timeline animations
- **React Hook Form** — inquiry form
- **EmailJS** — email notifications (configure below)
- **React Icons / Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service, template, and get your public key
3. Update `src/components/sections/InquiryForm.tsx` with your:
   - Service ID
   - Template ID
   - Public Key

The form also redirects to WhatsApp after submission regardless of email status.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — all sections |
| `/about` | Company overview |
| `/services` | All 10 services |
| `/products` | All 12 products |
| `/gallery` | Photo gallery & videos |
| `/contact` | Inquiry form, map, FAQ |

## Build

```bash
npm run build
npm start
```

## Color Palette

| Token | Hex |
|-------|-----|
| Primary | `#0B3C5D` |
| Secondary | `#1E88E5` |
| Accent | `#FF8C00` |
| Dark | `#1C1C1C` |
| Light | `#F8FAFC` |

## License

Proprietary — Hariom Enterprise
