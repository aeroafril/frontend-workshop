This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Aplikasi Daftar Provinsi Indonesia

Aplikasi web untuk menampilkan daftar provinsi di Indonesia dengan fitur pagination dan tampilan tabel yang interaktif.

## Fitur

- 📋 Tampilan tabel daftar provinsi Indonesia
- 🔢 Pagination dengan tombol Previous/Next
- 🎨 UI modern dengan Tailwind CSS
- ⚡ Built with Next.js 15 dan React

## Teknologi yang Digunakan

- [Next.js](https://nextjs.org) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Geist Font](https://vercel.com/font) - Typography

## Cara Menjalankan Aplikasi

### Prerequisites

Pastikan Anda sudah menginstall:
- Node.js (versi 18 atau lebih baru)
- npm, yarn, pnpm, atau bun

### Instalasi

1. Clone repository ini
```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. Jalankan development server
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

4. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## Struktur Proyek
```
├── app/
│   ├── page.tsx          # Halaman utama dengan tabel provinsi
│   ├── api/
│   │   └── provinces/    # API endpoint untuk data provinsi
│   └── layout.tsx
├── public/
└── README.md
```

## API Endpoint

### GET /api/provinces

Mengembalikan daftar provinsi Indonesia

**Response:**
```json
{
  "data": [
    {
      "code": "11",
      "name": "ACEH"
    },
    ...
  ]
}
```

## Pengembangan Lebih Lanjut

Untuk mempelajari lebih lanjut tentang Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - fitur dan API Next.js
- [Learn Next.js](https://nextjs.org/learn) - tutorial interaktif Next.js
- [Next.js GitHub](https://github.com/vercel/next.js) - feedback dan kontribusi

## Deploy

Link aplikasi dengan deploy vercel: (https://frontend-workshop-lake.vercel.app)

Lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying) untuk detail lebih lanjut.

## Lisensi

MIT

## Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau issue untuk saran dan perbaikan.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
