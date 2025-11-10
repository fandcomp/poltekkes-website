# Poltekkes Yogyakarta Website

Website resmi Poltekkes Yogyakarta yang dibuat dengan Astro dan TailwindCSS, dirancang untuk menampilkan tampilan pixel-perfect sesuai referensi.

## Teknologi

- **Astro** - Framework untuk website statis
- **TailwindCSS** - Utility-first CSS framework
- **SwiperJS** - Library untuk slider/carousel
- **Poppins** - Font family utama

## Struktur Proyek

```
.
├── src/
│   ├── components/
│   │   ├── Header.astro       # Komponen header dengan navigasi
│   │   ├── NavDropdown.astro # Komponen dropdown menu
│   │   ├── HeroSlider.astro   # Komponen hero slider
│   │   ├── MobileMenu.astro   # Menu mobile
│   │   └── Chatbot.astro      # Komponen chatbot
│   ├── pages/
│   │   └── index.astro        # Halaman beranda
│   ├── styles/
│   │   └── global.css         # Styles global
│   └── env.d.ts
├── public/                    # File statis (gambar, dll)
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Build untuk production:
```bash
npm run build
```

4. Preview build:
```bash
npm run preview
```

## Deployment ke GitHub Pages

### Persiapan

1. Pastikan repository sudah dibuat di GitHub
2. Update `astro.config.mjs`:
   - Ganti `YOUR_USERNAME` dengan username GitHub Anda
   - Ganti `/Chatbot` dengan nama repository Anda (jika berbeda)

### Langkah-langkah

1. **Inisialisasi Git (jika belum):**
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Tambahkan remote repository:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

3. **Push ke GitHub:**
```bash
git branch -M main
git push -u origin main
```

4. **Setup GitHub Pages:**
   - Buka repository di GitHub
   - Pergi ke Settings > Pages
   - Di bagian "Source", pilih "GitHub Actions"
   - GitHub Actions akan otomatis build dan deploy saat ada push ke branch `main`

### File yang Diperlukan

- ✅ `.gitignore` - Sudah ada
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow untuk deployment
- ✅ `astro.config.mjs` - Konfigurasi dengan `site` dan `base` URL

## Fitur

- ✅ Header dengan logo dan navigasi
- ✅ Dropdown menu untuk "Tentang" dengan animasi
- ✅ Hero slider dengan split diagonal
- ✅ Chatbot dengan tampilan modern seperti Telegram
- ✅ Desain responsif (mobile, tablet, desktop)
- ✅ Aksesibilitas (keyboard navigation, ARIA labels)
- ✅ Optimasi performa

## Warna

- **Primary**: `#00796B` (Hijau identitas Poltekkes)
- **Accent**: `#A7D129` (Hijau muda aksen)
- **Text Light**: `#FFFFFF` (Teks putih)
- **Text Dark**: `#00796B` (Teks hijau)

## Catatan

- Pastikan gambar hero (`/hero-bg.jpg`) tersedia di folder `public/`
- Pastikan `icon.png` dan `chatbot.png` tersedia di folder `public/`
- Font Poppins dimuat dari Google Fonts
- SwiperJS digunakan untuk slider dengan efek fade

