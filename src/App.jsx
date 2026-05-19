import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  Check,
  ChevronRight,
  ClipboardList,
  Download,
  Gift,
  Heart,
  Image,
  MapPin,
  Menu,
  MessageCircle,
  Music,
  QrCode,
  ScanLine,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UserCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const content = {
  id: {
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
    heroBadge: "Est. 2026 · Dibuat untuk momen paling berkesan",
    heroTitle: "Menemani awal perjalanan cintamu secara digital.",
    heroDesc:
      "qinvi membantu calon pengantin membuat undangan website, mengelola RSVP, dan menyambut tamu dengan pengalaman yang personal, rapi, dan terasa premium sejak link pertama dibuka.",
    primaryCta: "Mulai Diskusi",
    secondaryCta: "Lihat Portofolio",
    stats: ["5K+ Pasangan", "10+ Negara", "24/7 Preview"],
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
        desc: "QR unik untuk check-in, pencatatan hadiah, seating table, dan laporan kehadiran realtime.",
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
          { icon: UserCheck, title: "QR Personal", desc: "Setiap undangan memiliki kode unik untuk mengurangi duplikasi dan memudahkan validasi." },
          { icon: ClipboardList, title: "Gift & Attendance Log", desc: "Catat tamu hadir, jumlah pendamping, serta hadiah atau amplop secara terstruktur." },
          { icon: SearchCheck, title: "Pencarian Cepat", desc: "Cari nama tamu, grup keluarga, atau nomor meja langsung dari dashboard registrasi." },
          { icon: Download, title: "Export Laporan", desc: "Unduh rekap kehadiran dan catatan hadiah untuk kebutuhan arsip setelah acara." },
        ],
        checklist: ["Scan QR cepat", "Multi device", "Seating table", "Laporan realtime"],
      },
    },
    guestTools: [
      { icon: CalendarCheck, title: "Dashboard RSVP", desc: "Pantau konfirmasi hadir, jumlah tamu, dan export laporan kapan saja." },
      { icon: ScanLine, title: "QR Check-in", desc: "Registrasi tamu lebih cepat dengan QR personal sekali pakai." },
      { icon: BarChart3, title: "Live Report", desc: "Data hadir, belum hadir, gift log, dan status undangan tersaji realtime." },
      { icon: ShieldCheck, title: "Verified Broadcast", desc: "Sebarkan undangan dengan alur komunikasi yang lebih terpercaya.", comingSoon: true },
    ],
    portfolio: [
      { tag: "NEW", title: "Alara + Rafi", desc: "Minimalis, hangat, dan modern dengan tone editorial yang lembut.", gradient: "from-stone-200 via-rose-100 to-orange-100" },
      { tag: "HITS", title: "Nara + Elio", desc: "Nuansa mewah dengan aksen floral dan detail klasik yang elegan.", gradient: "from-slate-200 via-zinc-100 to-amber-100" },
      { tag: "BEST", title: "Ayu + Pramana", desc: "Sentuhan tradisional kontemporer untuk acara yang terasa sakral.", gradient: "from-emerald-100 via-stone-100 to-yellow-100" },
    ],
    testimonials: [
      "Timnya responsif, prosesnya rapi, dan hasil undangannya terasa personal.",
      "RSVP sangat membantu karena tamu kami ratusan. Laporan hari H jelas sekali.",
      "Desainnya elegan, tidak template banget, dan semua request dijelaskan dengan detail.",
    ],
  },
  en: {
    nav: [
      { label: "Services", href: "#layanan" },
      { label: "Features", href: "#fitur" },
      { label: "Portfolio", href: "#portofolio" },
      { label: "Testimonials", href: "#testimoni" },
    ],
    brandTagline: "Digital Wedding",
    menuLabel: "Open menu",
    languageButton: "EN / ID",
    consult: "Consultation",
    heroBadge: "Est. 2026 · Created for unforgettable moments",
    heroTitle: "A digital beginning for your love story.",
    heroDesc:
      "qinvi helps couples create wedding invitation websites, manage RSVP, and welcome guests with a personal, seamless, and premium experience from the very first link.",
    primaryCta: "Start a Discussion",
    secondaryCta: "View Portfolio",
    stats: ["5K+ Couples", "10+ Countries", "24/7 Preview"],
    confirmed: "confirmed",
    invitationDate: "Saturday, October 24, 2026 · Jakarta",
    servicesEyebrow: "Services",
    servicesTitle: "Everything handled, from invitation to guest arrival.",
    servicesDesc:
      "Choose the flow that fits your event: website invitation only, RSVP add-on, or complete guest management for the wedding day.",
    learn: "Learn More",
    opened: "Currently Open",
    comingSoon: "Coming Soon",
    featuresEyebrow: "Unlimited Features",
    featuresTitle: "Make every guest feel more special.",
    featuresDesc:
      "From personalized guest names to event reports, every feature is designed to create a warm guest experience and calmer preparation.",
    portfolioEyebrow: "Design & Portfolio",
    portfolioTitle: "Find design inspiration, then make it uniquely yours.",
    seeAll: "See All",
    trustEyebrow: "Trust",
    trustTitle: "Trusted for a day that cannot be repeated.",
    trustDesc:
      "We keep the process personal, from concept consultation and design production to guest data management.",
    clientStory: "Client Story",
    ctaEyebrow: "Free Consultation",
    ctaTitle: "Ready to create an invitation that feels personal?",
    ctaDesc:
      "Tell us your wedding date, design concept, guest count, and RSVP needs. Our team will help recommend the best package for you.",
    ctaList: ["Concept consultation", "Design recommendation", "Timeline estimate", "RSVP feature demo"],
    whatsappCta: "Consult via WhatsApp",
    footerDesc: "Wedding invitation websites, digital guest book, and RSVP assistance.",
    features: [
      {
        icon: Sparkles,
        key: "website",
        title: "Wedding Website",
        desc: "A personal invitation link with photos, stories, gallery, event details, music, and guest wishes.",
      },
      {
        icon: QrCode,
        key: "guestbook",
        title: "Digital Guest Book",
        desc: "Unique QR codes for check-in, gift records, seating tables, and real-time attendance reports.",
      },
      {
        icon: MessageCircle,
        key: "rsvp",
        title: "RSVP Assistance",
        desc: "Guest follow-ups via chat, event reminders, and a cleaner RSVP summary without the hassle.",
      },
    ],
    serviceDetails: {
      website: {
        eyebrow: "Wedding Website Details",
        title: "One elegant link to share every story and event detail.",
        desc:
          "The invitation page is responsive, easy to share, and can be personalized to match your wedding concept, from the opening cover to guest wishes.",
        highlights: [
          { icon: Image, title: "Gallery & Love Story", desc: "Showcase prewedding photos, your journey, and meaningful moments with an editorial layout." },
          { icon: Music, title: "Music & Animation", desc: "Add songs, soft transitions, and an opening cover to make the invitation feel alive." },
          { icon: MapPin, title: "Location Details", desc: "Include rundown, dress code, venue address, and direct navigation buttons to maps." },
          { icon: Gift, title: "Digital Gift", desc: "Optional gift registry or digital envelope feature with a refined and respectful presentation." },
        ],
        checklist: ["Custom guest names", "Event countdown", "Wishes and prayers", "WhatsApp sharing"],
      },
      guestbook: {
        eyebrow: "Digital Guest Book Details",
        title: "Faster check-ins, cleaner data, and clearer wedding-day reports.",
        desc:
          "Each guest receives a unique QR code that can be scanned at registration. The reception team can track attendance, record gifts, and export reports.",
        highlights: [
          { icon: UserCheck, title: "Personal QR", desc: "Each invitation gets a unique code to reduce duplication and simplify validation." },
          { icon: ClipboardList, title: "Gift & Attendance Log", desc: "Record guest attendance, companion count, and gifts or envelopes in a structured way." },
          { icon: SearchCheck, title: "Quick Search", desc: "Search guest names, family groups, or table numbers directly from the registration dashboard." },
          { icon: Download, title: "Export Reports", desc: "Download attendance summaries and gift records for post-event archiving." },
        ],
        checklist: ["Fast QR scan", "Multi-device", "Seating table", "Real-time report"],
      },
    },
    guestTools: [
      { icon: CalendarCheck, title: "RSVP Dashboard", desc: "Monitor attendance confirmation, guest count, and export reports anytime." },
      { icon: ScanLine, title: "QR Check-in", desc: "Speed up guest registration with a personal one-time QR code." },
      { icon: BarChart3, title: "Live Report", desc: "See attendance status, gift logs, and invitation data in real time." },
      { icon: ShieldCheck, title: "Verified Broadcast", desc: "Share invitations through a more reliable communication flow.", comingSoon: true },
    ],
    portfolio: [
      { tag: "NEW", title: "Alara + Rafi", desc: "Minimal, warm, and modern with a soft editorial tone.", gradient: "from-stone-200 via-rose-100 to-orange-100" },
      { tag: "HITS", title: "Nara + Elio", desc: "A luxurious feel with floral accents and elegant classic details.", gradient: "from-slate-200 via-zinc-100 to-amber-100" },
      { tag: "BEST", title: "Ayu + Pramana", desc: "A contemporary traditional touch for a sacred celebration.", gradient: "from-emerald-100 via-stone-100 to-yellow-100" },
    ],
    testimonials: [
      "The team was responsive, the process was neat, and the invitation felt truly personal.",
      "RSVP helped a lot because we had hundreds of guests. The wedding-day report was very clear.",
      "The design was elegant, not too template-like, and every request was explained in detail.",
    ],
  },
};

export default function LandingPageUndanganDigital() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("id");
  const [activeService, setActiveService] = useState("website");

  const t = content[lang];
  const navItems = useMemo(() => t.nav, [t.nav]);

  const toggleLanguage = () => {
    setLang((current) => (current === "id" ? "en" : "id"));
    setActiveService("website");
  };

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#241d18] selection:bg-[#241d18] selection:text-white">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f7f2ea]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#241d18] text-white shadow-sm">
              <Heart className="h-4 w-4 fill-white" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">qinvi</p>
              <p className="-mt-1 text-[11px] uppercase tracking-[0.28em] text-[#7b6c5d]">{t.brandTagline}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#6c5f52] md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#241d18]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button onClick={toggleLanguage} variant="ghost" className="rounded-full text-[#6c5f52] hover:bg-white/60 hover:text-[#241d18]">
              {t.languageButton}
            </Button>
            <Button className="rounded-full bg-[#241d18] px-5 text-white hover:bg-[#3a3029]">{t.consult}</Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label={t.menuLabel}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-black/5 bg-[#f7f2ea] px-5 pb-5 md:hidden">
            <div className="flex flex-col gap-3 pt-4 text-sm text-[#6c5f52]">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 hover:bg-white/60">
                  {item.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={toggleLanguage} variant="outline" className="rounded-full border-[#241d18]/15 bg-white/40">
                  {t.languageButton}
                </Button>
                <Button className="rounded-full bg-[#241d18] text-white hover:bg-[#3a3029]">{t.consult}</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <main>
        <section className="relative overflow-hidden px-5 pt-32 lg:px-8 lg:pt-40">
          <div className="absolute left-1/2 top-28 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
              <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#241d18]/10 bg-white/60 px-4 py-2 text-sm text-[#6c5f52] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {t.heroBadge}
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#241d18] sm:text-6xl lg:text-8xl">
                {t.heroTitle}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-[#6c5f52]">{t.heroDesc}</motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="h-14 rounded-full bg-[#241d18] px-7 text-white hover:bg-[#3a3029]">
                  {t.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 rounded-full border-[#241d18]/15 bg-white/40 px-7 hover:bg-white">
                  {t.secondaryCta}
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-[#241d18]/10 pt-6">
                {t.stats.map((stat) => {
                  const [num, ...label] = stat.split(" ");
                  return (
                    <div key={stat}>
                      <p className="text-2xl font-semibold tracking-tight">{num}</p>
                      <p className="mt-1 text-sm text-[#7b6c5d]">{label.join(" ")}</p>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative mx-auto w-full max-w-lg">
              <div className="absolute -left-8 top-14 z-10 hidden rounded-3xl bg-white/80 p-4 shadow-2xl shadow-black/10 backdrop-blur sm:block">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8b7c6b]">Live RSVP</p>
                <div className="mt-3 flex items-end gap-2">
                  <p className="text-3xl font-semibold">324</p>
                  <p className="pb-1 text-sm text-emerald-600">{t.confirmed}</p>
                </div>
              </div>

              <div className="absolute -right-5 bottom-12 z-10 rounded-3xl bg-[#241d18] p-4 text-white shadow-2xl shadow-black/20">
                <div className="flex items-center gap-3">
                  <QrCode className="h-9 w-9" />
                  <div>
                    <p className="text-sm font-medium">QR Check-in</p>
                    <p className="text-xs text-white/60">Unique one-time scan</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/70 bg-white/50 p-4 shadow-2xl shadow-black/10 backdrop-blur">
                <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2b211c] via-[#584238] to-[#d6b89a] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <p className="text-sm tracking-[0.28em] text-white/70">WEDDING INVITATION</p>
                    <Heart className="h-5 w-5 fill-white" />
                  </div>

                  <div className="mt-32 rounded-[1.6rem] bg-white/12 p-5 backdrop-blur-md">
                    <p className="font-serif text-5xl leading-none">
                      Alya
                      <br />& Raka
                    </p>
                    <p className="mt-4 text-sm text-white/70">{t.invitationDate}</p>
                    <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
                      {["Save", "RSVP", "Map"].map((item) => (
                        <div key={item} className="rounded-full bg-white/15 py-2">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="layanan" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#9a8067]">{t.servicesEyebrow}</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.servicesTitle}</h2>
            </div>
            <p className="max-w-md leading-7 text-[#6c5f52]">{t.servicesDesc}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {t.features.map((feature, index) => {
              const isClickable = Boolean(t.serviceDetails[feature.key]);
              const isActive = activeService === feature.key;

              return (
                <motion.div key={feature.key} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                  <Card className={`group h-full overflow-hidden rounded-[2rem] border-[#241d18]/10 shadow-none transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/5 ${isActive ? "bg-white ring-1 ring-[#241d18]/15" : "bg-white/55"}`}>
                    <CardContent className="p-7">
                      <div className="mb-14 flex items-center justify-between">
                        <div className={`grid h-12 w-12 place-items-center rounded-2xl text-white ${isActive ? "bg-[#b9895b]" : "bg-[#241d18]"}`}>
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm text-[#9a8067]">0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                      <p className="mt-4 leading-7 text-[#6c5f52]">{feature.desc}</p>
                      <button
                        type="button"
                        onClick={() => isClickable && setActiveService(feature.key)}
                        disabled={!isClickable}
                        className={`mt-8 inline-flex items-center gap-2 text-sm font-medium transition ${isClickable ? "cursor-pointer hover:text-[#b9895b]" : "cursor-not-allowed text-[#9a8067]/60"}`}
                      >
                        {isClickable ? (isActive ? t.opened : t.learn) : t.comingSoon}
                        <ChevronRight className={`h-4 w-4 transition ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {activeService && t.serviceDetails[activeService] && (
            <motion.div
              key={`${lang}-${activeService}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mt-6 overflow-hidden rounded-[2.25rem] border border-[#241d18]/10 bg-white/70 p-5 shadow-xl shadow-black/5 backdrop-blur md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#9a8067]">{t.serviceDetails[activeService].eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{t.serviceDetails[activeService].title}</h3>
                  <p className="mt-5 leading-8 text-[#6c5f52]">{t.serviceDetails[activeService].desc}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {t.serviceDetails[activeService].checklist.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 rounded-full bg-[#f7f2ea] px-4 py-2 text-sm text-[#5c4f44]">
                        <Check className="h-4 w-4 text-[#b9895b]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {t.serviceDetails[activeService].highlights.map((item) => (
                    <div key={item.title} className="rounded-[1.5rem] border border-[#241d18]/10 bg-[#f7f2ea]/70 p-5 transition hover:bg-[#f7f2ea]">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#241d18] text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mt-5 text-xl font-semibold tracking-[-0.03em]">{item.title}</h4>
                      <p className="mt-3 leading-7 text-[#6c5f52]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </section>

        <section id="fitur" className="bg-[#241d18] px-5 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm uppercase tracking-[0.32em] text-[#d6b89a]">{t.featuresEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.featuresTitle}</h2>
              <p className="mt-6 leading-8 text-white/65">{t.featuresDesc}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.guestTools.map((tool) => (
                <div key={tool.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:bg-white/[0.1]">
                  <div className="flex items-center justify-between">
                    <tool.icon className="h-7 w-7 text-[#d6b89a]" />
                    {tool.comingSoon && (
                      <span className="rounded-full bg-[#d6b89a]/15 border border-[#d6b89a]/30 px-3 py-1 text-xs font-semibold tracking-wide text-[#d6b89a]">
                        {t.comingSoon}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{tool.title}</h3>
                  <p className="mt-4 leading-7 text-white/62">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portofolio" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[#9a8067]">{t.portfolioEyebrow}</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.portfolioTitle}</h2>
            </div>
            <Button variant="outline" className="w-fit rounded-full border-[#241d18]/15 bg-transparent px-6 hover:bg-white">
              {t.seeAll}
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.portfolio.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-[#241d18]/10 bg-white/50 p-3 transition hover:bg-white hover:shadow-xl hover:shadow-black/5">
                <div className={`relative h-80 overflow-hidden rounded-[1.55rem] bg-gradient-to-br ${item.gradient}`}>
                  <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold tracking-wider text-[#241d18]">{item.tag}</div>
                  <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] bg-white/45 p-5 backdrop-blur-md">
                    <div className="h-28 rounded-2xl bg-white/50" />
                    <div className="mt-4 h-3 w-2/3 rounded-full bg-[#241d18]/25" />
                    <div className="mt-2 h-3 w-1/2 rounded-full bg-[#241d18]/15" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#6c5f52]">{item.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                    Live Preview <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimoni" className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white/60 p-6 shadow-xl shadow-black/5 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#9a8067]">{t.trustEyebrow}</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.trustTitle}</h2>
                <p className="mt-6 leading-8 text-[#6c5f52]">{t.trustDesc}</p>
              </div>

              <div className="space-y-4">
                {t.testimonials.map((text, index) => (
                  <div key={text} className="rounded-[1.7rem] border border-[#241d18]/10 bg-[#f7f2ea]/80 p-6">
                    <div className="mb-4 flex items-center gap-1 text-[#b9895b]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Sparkles key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg leading-8 text-[#3d332c]">“{text}”</p>
                    <p className="mt-5 text-sm text-[#8b7c6b]">
                      {t.clientStory} #{index + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#241d18] p-8 text-white md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-[#d6b89a]">{t.ctaEyebrow}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{t.ctaTitle}</h2>
                <p className="mt-6 max-w-2xl leading-8 text-white/65">{t.ctaDesc}</p>
              </div>
              <div className="rounded-[2rem] bg-white/10 p-6">
                <ul className="space-y-4">
                  {t.ctaList.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[#241d18]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-8 h-14 w-full rounded-full bg-white text-[#241d18] hover:bg-[#f7f2ea]">
                  {t.whatsappCta}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#241d18]/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-[#6c5f52] md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-[#241d18]">qinvi</p>
            <p className="mt-1">{t.footerDesc}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-[#241d18]">Instagram</a>
            <a href="#" className="hover:text-[#241d18]">TikTok</a>
            <a href="#" className="hover:text-[#241d18]">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
