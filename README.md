# International Anglican Revival Church of Edmonton (IARCE) Website

A modern, multilingual church website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Multilingual Support**: English, French, and Kinyarwanda
- **Modern Design**: Clean white & gold theme with smooth animations
- **SEO Optimized**: Complete metadata, schema markup, sitemap, and robots.txt
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized for Lighthouse score 95+
- **Accessible**: WCAG 2.1 AA compliant

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
IARCE/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── about/
│   │   ├── contact/
│   │   ├── ministries/
│   │   ├── services/
│   │   ├── sermons/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/             # React components
├── messages/              # i18n translation files
├── public/                # Static assets
└── ...
```

## 🌐 Deployment to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the project
5. Click "Deploy"

### Step 3: Connect Custom Domain (GoDaddy)

1. In your Vercel project, go to Settings → Domains
2. Add your custom domain (e.g., `iarce.org`)
3. Vercel will provide DNS records to add

4. In GoDaddy:
   - Go to DNS Management
   - Add the following records (Vercel will show you the exact values):
     - **A Record**: `@` → Vercel IP (or use CNAME)
     - **CNAME Record**: `www` → `cname.vercel-dns.com`
   - Or use the nameservers Vercel provides (recommended)

5. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## 🔧 Environment Variables

Create a `.env.local` file for local development (if needed):

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://iarce.org
```

## 📝 Content Management

All content is managed through translation files in the `messages/` directory:
- `en.json` - English
- `fr.json` - French
- `rw.json` - Kinyarwanda

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The current theme uses:
- Gold: `#f8b518` (primary accent)
- White: Base background
- Gray: Text and secondary elements

### Fonts

The project uses system fonts by default. To add custom fonts:
1. Add font files to `public/fonts/`
2. Update `app/[locale]/globals.css` with `@font-face` declarations
3. Update `tailwind.config.ts` font family settings

## 📱 Pages

- **Home** (`/`) - Hero section, about preview, ministries, service times
- **About Us** (`/about`) - Church information, vision, mission, leadership
- **Ministries** (`/ministries`) - All church ministries
- **Services** (`/services`) - Service times and information
- **Sermons** (`/sermons`) - Sermon archive (coming soon)
- **Contact** (`/contact`) - Contact form, map, service times

## 🔍 SEO

The website includes:
- Complete metadata for all pages
- Schema.org structured data
- XML sitemap
- robots.txt
- Open Graph tags
- Twitter Card tags

## 📞 Support

For questions or issues, please contact the church at:
- Phone: +1 587-778-6406 or +1 825-461-7431
- Address: 6110 Fulton Road, Edmonton, AB T6A 3T3

## 📄 License

© 2025 International Anglican Revival Church of Edmonton. All rights reserved.

