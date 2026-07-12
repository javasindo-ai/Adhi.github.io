# JAVAS KONSULTAN - Website Documentation

## Daftar Isi
1. [Struktur Website](#struktur-website)
2. [Petunjuk Penggunaan](#petunjuk-penggunaan)
3. [Mengubah Konten](#mengubah-konten)
4. [Deployment](#deployment)

## Struktur Website

### Halaman Utama
- **index.html** - Beranda dengan hero section, services, stats, testimonials
- **about.html** - Informasi perusahaan, tim, misi & visi
- **services.html** - Daftar lengkap layanan dengan metodologi dan FAQ
- **portfolio.html** - Portofolio proyek dengan filtering dan detail modal
- **articles.html** - Blog/artikel dengan featured article dan newsletter
- **career.html** - Lowongan kerja dan informasi karir
- **contact.html** - Form kontak, informasi lokasi, dan FAQ

### Data Files (assets/data/)
- **services.json** - Data layanan yang ditampilkan di website
- **portfolio.json** - Data portfolio/case studies
- **team.json** - Informasi tim
- **testimonials.json** - Testimoni klien
- **articles.json** - Data artikel/blog
- **careers.json** - Data lowongan kerja

## Petunjuk Penggunaan

### Mengubah Konten Layanan

Edit file `assets/data/services.json`:

```json
{
  "id": 1,
  "title": "Nama Layanan",
  "description": "Deskripsi singkat",
  "icon": "icon-name",
  "details": "Detail lengkap",
  "benefits": ["Benefit 1", "Benefit 2"]
}
```

### Menambah Portfolio Proyek

Tambahkan objek baru di `assets/data/portfolio.json`:

```json
{
  "id": 5,
  "title": "Nama Proyek",
  "category": "Kategori",
  "image": "/assets/images/portfolio/...",
  "description": "Deskripsi",
  "challenge": "Tantangan",
  "solution": "Solusi",
  "results": {
    "emission_reduction": "XX%",
    "cost_savings": "$XXM/year",
    "timeline": "X months"
  },
  "testimonial": "Testimoni klien"
}
```

### Menambah Artikel

Tambahkan objek baru di `assets/data/articles.json`:

```json
{
  "id": 7,
  "title": "Judul Artikel",
  "category": "Kategori",
  "author": "Nama Penulis",
  "date": "YYYY-MM-DD",
  "readTime": "X min",
  "image": "/assets/images/blog/...",
  "excerpt": "Ringkasan singkat",
  "slug": "judul-artikel"
}
```

### Menambah Tim

Tambahkan objek baru di `assets/data/team.json`:

```json
{
  "id": 5,
  "name": "Nama Orang",
  "position": "Jabatan",
  "department": "Departemen",
  "image": "/assets/images/team/...",
  "bio": "Biografi singkat",
  "specialization": "Spesialisasi"
}
```

## Mengubah Informasi Kontak

Edit informasi kontak di halaman `contact.html` dengan mencari section "Informasi Kontak".

## Deployment

### GitHub Pages

1. Pastikan repository sudah di-push ke GitHub
2. Buka Settings → Pages
3. Pilih branch `main` dan folder `/root`
4. Website akan otomatis di-deploy di `https://javasindo-ai.github.io`

### Custom Domain

1. Di Settings → Pages → Custom domain
2. Masukkan domain Anda
3. Setup DNS records sesuai petunjuk GitHub

## SEO Optimization

### Meta Tags
Setiap halaman sudah memiliki:
- Title tag yang deskriptif
- Meta description
- Open Graph tags
- Canonical URLs

### Sitemap & Robots
- `sitemap.xml` - Daftar semua halaman untuk search engines
- `robots.txt` - Instruksi untuk crawler

### Structured Data
Website menggunakan JSON-LD untuk rich snippets.

## Performance

### Optimasi Gambar
- Gunakan format WebP untuk browser support
- Ukuran maksimal hero image: 1200x800px
- Portfolio images: 600x400px
- Gunakan lazy loading untuk gambar di bawah fold

### Caching
- CSS dan JS sudah minified
- Menggunakan CDN untuk font dan library

### Lighthouse Score
Target: >95 untuk semua metrics

## Support & Maintenance

### Update Regular
- Review dan update testimonial klien
- Update portfolio dengan proyek baru
- Publikasikan artikel baru
- Update lowongan kerja

### Security
- Jangan commit credentials atau API keys
- Gunakan environment variables untuk sensitive data
- Keep dependencies updated

## Contact

Untuk pertanyaan tentang website, hubungi tim development:
- Email: development@javas.co.id
- Contact form: https://javasindo-ai.github.io/contact.html
