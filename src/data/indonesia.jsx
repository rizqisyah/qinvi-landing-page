import {
  BarChart3,
  CalendarCheck,
  ClipboardList,
  Download,
  Gift,
  Image,
  MapPin,
  MessageCircle,
  Music,
  QrCode,
  ScanLine,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import portfolioData from "./portfolio";

export const indonesiaContent = {
  nav: [
    { label: "Layanan", href: "#layanan" },
    { label: "Fitur", href: "#fitur" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Testimoni", href: "#testimoni" },
  ],
  brandTagline: "Digital Wedding",
  menuLabel: "Buka menu",
  languageButton: "ID / EN",
  consult: "Konsultasi",
  heroBadge: "Est. 2024 · Dibuat untuk momen paling berkesan",
  heroTitle: "Menemani awal perjalanan cintamu secara digital.",
  heroDesc:
    "qinvi membantu calon pengantin membuat undangan website, mengelola RSVP, dan menyambut tamu dengan pengalaman yang personal, rapi, dan terasa premium sejak link pertama dibuka.",
  primaryCta: "Mulai Diskusi",
  secondaryCta: "Lihat Portofolio",
  stats: ["1K+ Pasangan", "3+ Negara", "24/7 Preview"],
  confirmed: "confirmed",
  invitationDate: "Sabtu, 24 Oktober 2026 · Jakarta",
  servicesEyebrow: "Layanan",
  servicesTitle: "Terima beres, dari undangan sampai tamu datang.",
  servicesDesc:
    "Pilih alur yang sesuai kebutuhan: cukup undangan website, tambah RSVP, atau lengkap dengan guest management di hari acara.",
  learn: "Pelajari",
  opened: "Sedang Dibuka",
  comingSoon: "Segera Hadir",
  featuresEyebrow: "Fitur Unlimited",
  featuresTitle: "Buat tamu merasa lebih spesial.",
  featuresDesc:
    "Dari nama tamu personal sampai laporan acara, semua dibuat agar pengalaman tamu lebih hangat dan persiapanmu lebih tenang.",
  portfolioEyebrow: "Desain & Portofolio",
  portfolioTitle: "Temukan inspirasi desain, lalu wujudkan versimu sendiri.",
  seeAll: "Lihat Semua",
  trustEyebrow: "Kepercayaan",
  trustTitle: "Dipercaya untuk hari yang tidak bisa diulang.",
  trustDesc:
    "Kami menjaga proses tetap personal, mulai dari konsultasi konsep, produksi desain, sampai pengelolaan data tamu.",
  clientStory: "Cerita Klien",
  ctaEyebrow: "Konsultasi Gratis",
  ctaTitle: "Siap membuat undangan yang terasa personal?",
  ctaDesc:
    "Ceritakan tanggal acara, konsep desain, jumlah tamu, dan kebutuhan RSVP. Tim kami bantu susun rekomendasi paket terbaik.",
  ctaList: ["Konsultasi konsep", "Rekomendasi desain", "Estimasi timeline", "Demo fitur RSVP"],
  whatsappCta: "Konsultasi via WhatsApp",
  footerDesc: "Undangan website, buku tamu digital, dan RSVP assistance.",
  features: [
    {
      icon: Sparkles,
      key: "website",
      title: "Undangan Website",
      desc: "Link undangan personal dengan foto, cerita, galeri, detail acara, musik, dan ucapan tamu.",
    },
    {
      icon: QrCode,
      key: "guestbook",
      title: "Buku Tamu Digital",
      desc: "QR unik untuk check-in, pencatatan hadiah, layar sapa tamu, dan laporan kehadiran realtime.",
    },
    {
      icon: MessageCircle,
      key: "rsvp",
      title: "RSVP Assistance",
      desc: "Follow-up tamu via chat, reminder acara, dan rekap RSVP yang lebih rapi tanpa ribet.",
    },
  ],
  serviceDetails: {
    website: {
      eyebrow: "Detail Undangan Website",
      title: "Satu link elegan untuk membagikan semua cerita dan informasi acara.",
      desc:
        "Halaman undangan dibuat responsif, mudah dibagikan, dan bisa dipersonalisasi sesuai konsep pernikahanmu, mulai dari opening cover sampai ucapan tamu.",
      highlights: [
        { icon: Image, title: "Galeri & Love Story", desc: "Tampilkan foto prewedding, cerita perjalanan, dan momen penting dengan layout editorial." },
        { icon: Music, title: "Musik & Animasi", desc: "Tambahkan lagu, transisi lembut, dan opening cover agar undangan terasa hidup." },
        { icon: MapPin, title: "Detail Lokasi", desc: "Sisipkan rundown, dress code, alamat venue, dan tombol navigasi langsung ke maps." },
        { icon: Gift, title: "Amplop Digital", desc: "Fitur gift registry atau amplop digital opsional dengan tampilan yang tetap sopan." },
      ],
      checklist: ["Custom nama tamu", "Countdown acara", "Ucapan dan doa", "Share ke WhatsApp"],
    },
    guestbook: {
      eyebrow: "Detail Buku Tamu Digital",
      title: "Check-in tamu lebih cepat, data lebih rapi, dan laporan hari H lebih jelas.",
      desc:
        "Setiap tamu memiliki QR unik yang bisa dipindai di meja registrasi. Tim penerima tamu dapat melihat status kehadiran, mencatat hadiah, dan mengekspor laporan.",
      highlights: [
        { tag: "PER-GUEST", icon: UserCheck, title: "Personal QR Code", desc: "Setiap undangan memiliki QR Code masing-masing. QR Code hanya dapat scan satu kali, tidak bisa digunakan orang lain.", image: "placeholder" },
        { tag: "GREETING", icon: SearchCheck, title: "Layar Sapa", desc: "Tampilkan nama tamu secara otomatis di layar saat QR berhasil dipindai, sehingga momen penyambutan terasa lebih personal.", image: "placeholder" },
        { tag: "CHECK-IN", icon: ScanLine, title: "QR App (Aplikasi Registrasi)", desc: "Buku tamu digital yang lebih canggih melalui sistem scan QR Code. Kehadiran, hadiah, hingga foto selfie tamu tercatat real-time dalam satu sistem.", image: "/img/qr-app.png" },
      ],
      checklist: ["Scan QR cepat", "Multi device", "Layar sapa", "Laporan realtime"],
    },
  },
  guestTools: [
    { icon: CalendarCheck, title: "Dashboard RSVP", desc: "Pantau konfirmasi hadir, jumlah tamu, dan export laporan kapan saja." },
    { icon: ScanLine, title: "QR Check-in", desc: "Registrasi tamu lebih cepat dengan QR personal sekali pakai." },
    { icon: BarChart3, title: "Live Report", desc: "Data hadir, belum hadir, gift log, dan status undangan tersaji realtime." },
    { icon: ShieldCheck, title: "Verified Broadcast", desc: "Sebarkan undangan dengan alur komunikasi yang lebih terpercaya.", comingSoon: true },
  ],
  portfolio: portfolioData,
  testimonials: [
    {
      quote: "Timnya responsif, prosesnya rapi, dan hasil undangannya terasa personal.",
      name: "Rina & Adit",
      meta: "Pengantin · Bandung",
    },
    {
      quote: "RSVP sangat membantu karena tamu kami ratusan. Laporan hari H jelas sekali.",
      name: "Siska & Dimas",
      meta: "Pengantin · Surabaya",
    },
    {
      quote: "Desainnya elegan, tidak template banget, dan semua request dijelaskan dengan detail.",
      name: "Nadia & Fajar",
      meta: "Pengantin · Jakarta",
    },
  ],
};

export default indonesiaContent;

