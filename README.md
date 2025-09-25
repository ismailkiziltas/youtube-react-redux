# YouTube Klonu Projesi

Bu proje, YouTube Data API v3 kullanılarak React ile geliştirilmiş, modern bir YouTube arayüz klonudur. 

![YouTube Klonu Arayüzü](./public/youtube-clone-screenshot.png)
![YouTube Video Sayfası Arayüzü](./public/youtube-video-detail-screenshot.png)

---

## ✨ Özellikler

- **Dinamik Ana Sayfa:** YouTube API'sinden çekilen popüler videoları listeler.
- **Kategoriye Göre Filtreleme:** Kenar çubuğundan seçilen kategoriye göre anasayfadaki videoları anında günceller.
- **Video İzleme Sayfası:** Seçilen videoyu oynatır, video bilgilerini, kanal detaylarını ve yorumları gösterir.
- **Önerilen Videolar:** İzlenen videoyla aynı kategorideki diğer videoları listeler.
- **Duyarlı (Responsive) Tasarım:** Farklı ekran boyutlarına uyum sağlar.
- **Merkezi Durum Yönetimi:** `Redux Toolkit` ile uygulama durumu (seçili kategori, kenar çubuğu durumu) yönetilir.
- **Modern Stil Yönetimi:** `SCSS` ile daha modüler ve yönetilebilir stil dosyaları.

---

## 🛠️ Kullanılan Teknolojiler

- **React.js:**
- **React Router:** 
- **Redux Toolkit:** 
- **SCSS:**
- **YouTube Data API v3:**
- **Moment.js:** Tarih ve saat formatlamaları için (örn: "2 gün önce").

---

## 🚀 Kurulum ve Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/kullanici-adiniz/youtube-clone.git
cd youtube-clone
```

### 2. Gerekli Paketleri Yükleyin

```bash
npm install
```

### 3. Çevre Değişkenlerini Ayarlayın

Projenin ana dizininde `.env` adında bir dosya oluşturun ve içine kendi YouTube API anahtarınızı ekleyin.

```
VITE_API_KEY=AIzaSy...Sizin_API_Anahtarınız
```

### 4. Projeyi Başlatın

```bash
npm run dev
```

Uygulama `http://localhost:5173` (veya terminalde belirtilen başka bir port) adresinde çalışmaya başlayacaktır.