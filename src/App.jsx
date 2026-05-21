import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Heart, Menu, QrCode, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import content from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const portfolioCategories = [
  { key: "minimalis", label: "Minimalis" },
  { key: "motion", label: "Motion" },
  { key: "exclusive", label: "Exclusive" },
  { key: "elegant", label: "Elegant" },
  { key: "3d", label: "3D" },
  { key: "vintage", label: "Vintage" },
  { key: "flower", label: "Flower" },
  { key: "fixed", label: "Fixed" },
];

const getPortfolioSections = (items) =>
  portfolioCategories
    .map((category) => ({
      ...category,
      items: items.filter((item) => item.category === category.key),
    }))
    .filter((section) => section.items.length > 0);

export default function LandingPageUndanganDigital() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("id");
  const [activeService, setActiveService] = useState("website");
  const [activeTab, setActiveTab] = useState("minimalis");
  const [showDesignPage, setShowDesignPage] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const t = content[lang];
  const navItems = useMemo(() => t.nav, [t.nav]);

  const filteredPortfolio = useMemo(() => {
    return t.portfolio.filter((item) => item.category === activeTab);
  }, [t.portfolio, activeTab]);

  const portfolioSections = useMemo(() => getPortfolioSections(t.portfolio), [t.portfolio]);

  const toggleLanguage = () => {
    setLang((current) => (current === "id" ? "en" : "id"));
    setActiveService("website");
    setActiveTab("minimalis");
    setShowDesignPage(false);
  };

  return (
    <div className="min-h-screen bg-cream text-primary selection:bg-primary selection:text-white">
      {/* Navbar */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#" className="flex items-center gap-3">
            <img src="/img/only-logo.png" alt="Qinvi" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted">{t.brandTagline}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-10 text-sm font-medium text-secondary lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button onClick={toggleLanguage} variant="ghost" className="text-sm text-secondary hover:text-primary">
              {t.languageButton}
            </Button>
            <Button asChild variant="outline" className="rounded-full border-primary/20 px-6 hover:bg-primary hover:text-white">
              <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer">{t.consult}</a>
            </Button>
          </div>

          <button className="lg:hidden text-primary" onClick={() => setMobileOpen((v) => !v)} aria-label={t.menuLabel}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/50 bg-cream px-6 pb-6 lg:hidden">
            <div className="flex flex-col gap-4 pt-5 text-sm font-medium text-secondary">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="hover:text-primary transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button onClick={toggleLanguage} variant="outline" className="flex-1 rounded-full border-border">
                  {t.languageButton}
                </Button>
                <Button asChild className="flex-1 rounded-full bg-primary text-white hover:bg-primary/90">
                  <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>{t.consult}</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <main>
        {showDesignPage ? (
          <section className="relative overflow-hidden px-6 pt-32 pb-20 lg:px-12 lg:pt-40 lg:pb-32">
            <div className="mx-auto max-w-7xl">
              <button
                type="button"
                onClick={() => setShowDesignPage(false)}
                className="mb-10 inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                {lang === "id" ? "Kembali ke beranda" : "Back to home"}
              </button>

              <div className="mb-16">
                <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">{t.portfolioEyebrow}</p>
                <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-primary max-w-4xl">
                  {lang === "id" ? "Koleksi desain undangan digital." : "Digital invitation design collection."}
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-secondary leading-relaxed">
                  {lang === "id"
                    ? "Semua desain diproduksi in-house oleh qinvi. Pilih style yang paling mencerminkan cerita kalian, lalu sesuaikan warna, tipografi, dan detailnya."
                    : "Every design is produced in-house by qinvi. Choose the style that reflects your story, then customize the colors, typography, and details."}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-12">
                {portfolioCategories.map((category) => (
                  <a
                    key={category.key}
                    href={`#portfolio-${category.key}`}
                    className="rounded-full border border-border px-5 py-2 text-sm font-medium text-secondary transition-all hover:border-primary hover:text-primary"
                  >
                    {category.label}
                  </a>
                ))}
              </div>

              <div className="space-y-20">
                {portfolioSections.map((section) => (
                  <section key={section.key} id={`portfolio-${section.key}`} className="scroll-mt-28">
                    <div className="mb-8 border-b border-border pb-6">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted mb-2">
                        {lang === "id" ? "Kategori desain" : "Design category"}
                      </p>
                      <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-primary">
                        {section.label}
                      </h2>
                      <p className="mt-2 text-sm text-muted">
                        {section.items.length} {lang === "id" ? "desain tersedia" : "designs available"}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {section.items.map((item) => (
                        <article key={item.title} className="group border border-border bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={`Preview desain ${item.title}`}
                                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            {item.tag && (
                              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-wider text-primary">{item.tag}</div>
                            )}
                          </div>
                          <h3 className="font-serif text-xl tracking-tight">{item.title}</h3>
                          {item.desc && <p className="mt-2 text-sm text-secondary leading-relaxed">{item.desc}</p>}
                          <a
                            href={item.link || item.previewUrl || "#"}
                            target={item.link || item.previewUrl ? "_blank" : undefined}
                            rel={item.link || item.previewUrl ? "noreferrer" : undefined}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
                          >
                            Live Preview <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                          </a>
                        </article>
                      ))}
                    </motion.div>
                  </section>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative overflow-hidden px-6 pt-32 lg:px-12 lg:pt-44">
              <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <motion.div variants={stagger} initial="hidden" animate="show">
                  <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 text-sm text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t.heroBadge}
                  </motion.div>

                  <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-primary">
                    {t.heroTitle}
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-secondary leading-relaxed">{t.heroDesc}</motion.p>

                  <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg" className="h-14 rounded-full bg-primary px-8 text-white hover:bg-primary/90">
                      <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer" className="inline-flex items-center">
                        {t.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button onClick={() => setShowDesignPage(true)} size="lg" variant="outline" className="h-14 rounded-full border-border px-8 hover:bg-white">
                      {t.secondaryCta}
                    </Button>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
                    {t.stats.map((stat) => (
                      <span key={stat} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-secondary">
                        {stat}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="relative mx-auto w-full max-w-sm"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary p-6 text-white">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=900&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/95" />

                    <div className="relative z-10 flex items-center justify-between">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">Wedding Invitation</p>
                      <Heart className="h-5 w-5 fill-white text-white" />
                    </div>

                    <div className="absolute left-0 top-[5rem] z-20 rounded-r-2xl bg-white px-5 py-4 text-primary shadow-lg">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Live RSVP</p>
                      <div className="mt-1.5 flex items-end gap-2">
                        <p className="text-3xl font-bold leading-none tracking-tight">324</p>
                        <p className="pb-0.5 text-[10px] font-bold uppercase tracking-wider text-green-600">{t.confirmed}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex h-full flex-col justify-end pb-4 pt-24">
                      <h2 className="font-serif text-[3.5rem] leading-[0.95] tracking-tight text-white drop-shadow-lg">
                        Alya
                        <br />
                        <span className="font-light italic">&amp;</span> Raka
                      </h2>
                      <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white/80">
                        Sabtu, 24 Okt 2026 <span className="mx-2 text-white/40">|</span> Jakarta
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <button className="rounded-full border border-white/40 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-white/10">Save Date</button>
                        <button className="rounded-full border border-white/30 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-white/10">RSVP</button>
                      </div>
                    </div>

                    <div className="absolute -right-4 bottom-8 z-20 rounded-2xl border border-white/10 bg-primary/90 p-4 pr-6 text-white shadow-lg backdrop-blur">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-white/10 p-2">
                          <QrCode className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider">QR Check-in</p>
                          <p className="mt-0.5 text-[9px] text-white/60">One-time scan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Services Section */}
            <section id="layanan" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
              <div className="mb-16 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">{t.servicesEyebrow}</p>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-primary max-w-3xl mx-auto">{t.servicesTitle}</h2>
                <p className="mt-6 max-w-xl mx-auto text-secondary leading-relaxed">{t.servicesDesc}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {t.features.map((feature, index) => {
                  const isClickable = Boolean(t.serviceDetails[feature.key]);
                  const isActive = activeService === feature.key;

                  return (
                    <motion.div key={feature.key} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
                      <Card className={`group h-full border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg ${isActive ? "ring-1 ring-primary" : ""}`}>
                        <CardContent className="p-8">
                          <div className="mb-16 flex items-center justify-between">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${isActive ? "border-accent bg-accent/10 text-accent" : "border-border text-primary"}`}>
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <span className="font-serif text-lg italic text-muted">0{index + 1}</span>
                          </div>
                          <h3 className="font-serif text-2xl tracking-tight">{feature.title}</h3>
                          <p className="mt-4 text-secondary leading-relaxed">{feature.desc}</p>
                          <button
                            type="button"
                            onClick={() => isClickable && setActiveService(feature.key)}
                            disabled={!isClickable}
                            className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${isClickable ? "text-primary hover:text-accent" : "cursor-not-allowed text-muted"}`}
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
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mt-8 border border-border bg-white p-8 lg:p-10"
                >
                  {activeService === "guestbook" ? (
                    <>
                      <div className="text-center mb-10">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">{t.serviceDetails[activeService].eyebrow}</p>
                        <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-primary">{t.serviceDetails[activeService].title}</h3>
                        <p className="mt-5 max-w-2xl mx-auto text-secondary leading-relaxed">{t.serviceDetails[activeService].desc}</p>

                        <div className="mt-8 flex flex-wrap justify-center gap-2">
                          {t.serviceDetails[activeService].checklist.map((item) => (
                            <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-secondary">
                              <Check className="h-4 w-4 text-accent" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {t.serviceDetails[activeService].highlights.map((item, i) => (
                          <div key={item.title} className="flex flex-col border border-border bg-cream/30 p-6 transition hover:bg-cream/50">
                            <div className="mb-5 flex w-full items-center gap-4">
                              <span className="font-serif text-lg italic text-accent">0{i + 1}</span>
                              <div className="h-px flex-1 bg-border"></div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">{item.tag}</span>
                            </div>

                            <h4 className="mb-6 font-serif text-xl text-primary">{item.title}</h4>

                            <div className="relative mb-6 flex w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-cream p-4" style={{ minHeight: '140px' }}>

                              {item.image !== "placeholder" ? (
                                <img src={item.image} alt={item.title} onClick={() => setLightboxImage(item.image)} className="relative z-10 h-auto w-[70%] rounded-lg shadow-md transition hover:scale-[1.02] cursor-zoom-in" />
                              ) : i === 0 ? (
                                <div onClick={() => setLightboxImage("qr-card")} className="relative z-10 w-[65%] overflow-hidden rounded-lg shadow-md bg-white text-left text-primary cursor-zoom-in transition hover:scale-[1.02]">
                                  <div className="relative h-14 bg-gradient-to-br from-stone-400 via-stone-500 to-stone-700 flex flex-col items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-60"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
                                    <div className="relative z-10 text-center text-white">
                                      <p className="text-[5px] uppercase tracking-[0.2em] font-medium opacity-80">THE WEDDING OF</p>
                                      <p className="font-serif text-[10px] leading-tight tracking-wide">Namira &amp; Adit</p>
                                      <p className="text-[5px] tracking-[0.15em] mt-0.5 opacity-70">14 · 09 · 2025</p>
                                    </div>
                                  </div>
                                  <div className="flex items-start justify-between gap-1.5 px-2 py-1.5">
                                    <div className="flex-1 min-w-0">
                                      <p className="text-[6px] text-muted">The Wedding of</p>
                                      <p className="text-[8px] font-bold leading-tight">Namira &amp; Aditya</p>
                                      <p className="text-[6px] text-muted mt-0.5">Minggu, 14 Sep 2025</p>
                                      <div className="mt-1">
                                        <p className="text-[6px] text-muted">Kepada Yth.</p>
                                        <p className="text-[7px] font-bold">Bapak/Ibu Tamu</p>
                                      </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                      <div className="h-10 w-10 rounded bg-white p-0.5 shadow-inner ring-1 ring-black/10">
                                        <QrCode className="h-full w-full text-primary" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between bg-primary px-2 py-1">
                                    <div className="flex items-center gap-0.5 text-white">
                                      <Heart className="h-2 w-2 fill-white" />
                                      <span className="text-[6px] font-bold tracking-widest uppercase">qinvi</span>
                                    </div>
                                    <p className="text-[5px] text-white/70 uppercase tracking-[0.1em] leading-tight text-right max-w-[55%]">Mohon bawa kartu ini</p>
                                  </div>
                                </div>
                              ) : i === 1 ? (
                                <div onClick={() => setLightboxImage("greeting-screen")} className="relative z-10 w-[75%] aspect-video overflow-hidden rounded-lg shadow-md bg-[#1a1a1a] text-left text-white cursor-zoom-in transition hover:scale-[1.02]">
                                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
                                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
                                  <div className="relative z-10 h-full flex p-2.5 gap-2">
                                    <div className="flex-1 flex flex-col justify-center">
                                      <div className="flex items-center gap-0.5 mb-1.5 opacity-90">
                                        <Heart className="h-2 w-2 fill-white" />
                                        <span className="text-[6px] font-bold tracking-widest uppercase">qinvi</span>
                                      </div>
                                      <p className="text-[6px] text-white/80">Selamat datang</p>
                                      <p className="font-serif text-[10px] font-bold mt-0.5">Haruka &amp; Suzuki</p>
                                      <p className="mt-1 text-[5px] text-white/70">03 Oktober 2026</p>
                                    </div>
                                    <div className="w-[42%] flex flex-col justify-center items-center text-center border-l border-white/20 px-1.5">
                                      <p className="text-[4px] text-white/70 uppercase tracking-widest mb-1">Kepada Yth.</p>
                                      <p className="text-[8px] font-bold text-white leading-tight">Ms. Monica Carlina</p>
                                      <span className="bg-rose-500 text-white text-[3px] px-1 py-0.5 rounded-full font-bold mt-1 tracking-widest uppercase">VIP Guest</span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="relative z-10 flex h-full min-h-[120px] w-full flex-col items-center justify-center gap-2 rounded-lg bg-white/40 text-muted">
                                  <item.icon className="h-8 w-8 opacity-30" />
                                  <span className="text-xs tracking-wider opacity-60">Preview</span>
                                </div>
                              )}
                            </div>

                            <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center mb-10">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">{t.serviceDetails[activeService].eyebrow}</p>
                        <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-primary">{t.serviceDetails[activeService].title}</h3>
                        <p className="mt-5 max-w-2xl mx-auto text-secondary leading-relaxed">{t.serviceDetails[activeService].desc}</p>

                        <div className="mt-8 flex flex-wrap justify-center gap-2">
                          {t.serviceDetails[activeService].checklist.map((item) => (
                            <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-secondary">
                              <Check className="h-4 w-4 text-accent" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {t.serviceDetails[activeService].highlights.map((item, i) => (
                          <div key={item.title} className="border border-border bg-cream/50 p-6 transition hover:bg-cream">
                            <div className="mb-5 flex items-center justify-between">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <span className="font-serif text-base italic text-muted">0{i + 1}</span>
                            </div>
                            <h4 className="font-serif text-lg tracking-tight">{item.title}</h4>
                            <p className="mt-3 text-sm text-secondary leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </section>

            {/* Features Section (Dark) */}
            <section id="fitur" className="bg-primary px-6 py-24 text-white lg:px-12 lg:py-32">
              <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">{t.featuresEyebrow}</p>
                  <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight max-w-3xl mx-auto">{t.featuresTitle}</h2>
                  <p className="mt-6 text-white/60 leading-relaxed max-w-xl mx-auto">{t.featuresDesc}</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {t.guestTools.map((tool) => (
                    <div key={tool.title} className="border border-white/10 p-7 transition hover:border-white/20">
                      <div className="flex items-center justify-between mb-6">
                        <tool.icon className="h-6 w-6 text-accent-light" />
                        {tool.comingSoon && (
                          <span className="rounded-full border border-accent-light/30 bg-accent-light/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-accent-light">
                            {t.comingSoon}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl tracking-tight">{tool.title}</h3>
                      <p className="mt-3 text-sm text-white/50 leading-relaxed">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section id="portofolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
              <div className="mb-12 text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">{t.portfolioEyebrow}</p>
                  <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-primary">{t.portfolioTitle}</h2>
                </div>
                <div className="mt-6">
                  <Button onClick={() => setShowDesignPage(true)} variant="outline" className="rounded-full border-border px-6 hover:bg-white">
                    {t.seeAll}
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {portfolioCategories.map((category) => {
                  const isActive = activeTab === category.key;
                  return (
                    <button
                      key={category.key}
                      onClick={() => setActiveTab(category.key)}
                      className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? "text-primary" : "text-secondary hover:text-primary"
                      }`}
                    >
                      {category.label}
                      {isActive && (
                        <motion.span
                          layoutId="activePortfolioTab"
                          className="absolute inset-0 -z-10 rounded-full border-b-2 border-primary"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={filteredPortfolio.length > 0 ? "grid gap-6 md:grid-cols-3" : "flex items-center justify-center py-20"}
              >
                {filteredPortfolio.length > 0 ? (
                  filteredPortfolio.map((item) => (
                    <article key={item.title} className="group border border-border bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={`Preview desain ${item.title}`}
                            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        {item.tag && (
                          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-wider text-primary">{item.tag}</div>
                        )}
                      </div>
                      <h3 className="font-serif text-xl tracking-tight">{item.title}</h3>
                      {item.desc && <p className="mt-2 text-sm text-secondary leading-relaxed">{item.desc}</p>}
                      <a
                        href={item.link || item.previewUrl || "#"}
                        target={item.link || item.previewUrl ? "_blank" : undefined}
                        rel={item.link || item.previewUrl ? "noreferrer" : undefined}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        Live Preview <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </a>
                    </article>
                  ))
                ) : (
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border">
                      <Sparkles className="h-6 w-6 text-muted" />
                    </div>
                    <h3 className="font-serif text-2xl tracking-tight text-primary">Segera Datang</h3>
                    <p className="mt-3 text-secondary">Koleksi desain untuk kategori ini sedang dalam tahap pengembangan.</p>
                  </div>
                )}
              </motion.div>
            </section>

            {/* Testimonials Section */}
            <section id="testimoni" className="px-6 pb-24 lg:px-12 lg:pb-32">
              <div className="mx-auto max-w-7xl">
                <div className="mb-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">{t.trustEyebrow}</p>
                  <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-primary">{t.trustTitle}</h2>
                  <p className="mt-6 max-w-xl text-secondary leading-relaxed">{t.trustDesc}</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  {t.testimonials.map((item) => (
                    <div key={item.name} className="border border-border bg-white p-8">
                      <div className="mb-6 flex items-center gap-1 text-accent">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="h-1.5 w-1.5 rounded-full bg-accent" />
                        ))}
                      </div>
                      <p className="font-serif text-lg italic text-primary leading-relaxed">"{item.quote}"</p>
                      <div className="mt-6">
                        <p className="font-medium text-primary">{item.name}</p>
                        <p className="mt-1 text-sm text-muted">{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 pb-24 lg:px-12 lg:pb-32">
              <div className="mx-auto max-w-7xl bg-primary p-10 lg:p-16 text-white text-center">
                <div className="max-w-2xl mx-auto mb-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">{t.ctaEyebrow}</p>
                  <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight">{t.ctaTitle}</h2>
                  <p className="mt-6 text-white/60 leading-relaxed">{t.ctaDesc}</p>
                </div>
                <ul className="flex flex-wrap justify-center gap-4 mb-10">
                  {t.ctaList.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/70">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="h-14 rounded-full bg-white text-primary hover:bg-cream px-10">
                  <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer">{t.whatsappCta}</a>
                </Button>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-border px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-secondary md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img src="/img/only-logo.png" alt="Qinvi" className="h-8 w-auto" />
            <span className="text-muted">|</span>
            <p>{t.footerDesc}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">TikTok</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-10 cursor-pointer backdrop-blur-sm"
          >
            {lightboxImage === "qr-card" ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md overflow-hidden rounded-xl bg-white shadow-2xl text-primary cursor-default"
              >
                <div className="relative h-56 bg-gradient-to-br from-stone-400 via-stone-500 to-stone-700 flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
                  <div className="relative z-10 text-center text-white">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80">THE WEDDING OF</p>
                    <p className="font-serif text-4xl leading-tight tracking-wide mt-1">Namira &amp; Adit</p>
                    <p className="text-[10px] tracking-[0.2em] mt-2 opacity-70">14 · 09 · 2025</p>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 text-white/80">
                    <Heart className="h-3 w-3 fill-white" />
                    <span className="text-[9px] tracking-[0.25em] uppercase font-semibold">qinvi</span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 px-7 py-5">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted">The Wedding of</p>
                    <p className="text-lg font-bold leading-tight mt-0.5">Namira &amp; Aditya</p>
                    <p className="text-sm text-muted mt-1">Minggu, 14 Sep 2025</p>
                    <div className="mt-4">
                      <p className="text-xs text-muted">Kepada Yth.</p>
                      <p className="text-sm font-bold">Bapak/Ibu Tamu</p>
                      <p className="text-xs text-muted mt-1">Alamat/Keterangan:</p>
                      <p className="text-sm font-bold">Tempat</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 pt-1">
                    <div className="h-32 w-32 rounded-lg bg-white p-2 shadow-inner ring-1 ring-black/10">
                      <QrCode className="h-full w-full text-primary" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-primary px-7 py-3">
                  <div className="flex items-center gap-2 text-white">
                    <Heart className="h-4 w-4 fill-white" />
                    <span className="text-sm font-bold tracking-widest uppercase">qinvi</span>
                  </div>
                  <p className="text-[10px] text-white/70 uppercase tracking-[0.12em] leading-tight text-right max-w-[55%]">Mohon bawa dan tunjukkan kartu ini pada penerima tamu di lokasi acara</p>
                </div>
              </motion.div>
            ) : lightboxImage === "greeting-screen" ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl aspect-video overflow-hidden rounded-xl bg-[#1a1a1a] shadow-2xl text-left text-white cursor-default relative flex"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
                <div className="relative z-10 w-full flex p-10 gap-10">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-8 opacity-90 absolute top-8 left-10">
                      <Heart className="h-5 w-5 fill-white" />
                      <span className="text-sm font-bold tracking-widest uppercase">qinvi</span>
                    </div>
                    <p className="text-xl text-white/90">Selamat datang di acara pernikahan</p>
                    <p className="font-serif text-5xl font-bold mt-3 tracking-wide">Haruka &amp; Suzuki</p>
                    <div className="mt-8 space-y-2 text-lg text-white/80">
                      <p>03 Oktober 2026</p>
                      <p>Main Hall Mac Ballroom, Semarang</p>
                    </div>
                  </div>
                  <div className="w-[45%] flex flex-col justify-center items-center text-center border-l-2 border-white/20 px-10">
                    <p className="text-sm text-white/70 uppercase tracking-[0.3em] mb-4">Kepada Yth. Bapak/Ibu/Sdr/i</p>
                    <p className="text-4xl font-bold text-white leading-tight">Ms. Monica Carlina</p>
                    <span className="bg-rose-500 text-white text-xs px-4 py-1.5 rounded-full font-bold tracking-widest uppercase shadow-sm mt-6">VIP Guest</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={lightboxImage}
                alt="Preview"
                className="max-h-full max-w-full rounded-lg shadow-2xl"
              />
            )}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
