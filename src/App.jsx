import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Heart, Menu, QrCode, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import content from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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
            <Button asChild className="rounded-full bg-[#241d18] px-5 text-white hover:bg-[#3a3029]">
              <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer">{t.consult}</a>
            </Button>
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
                <Button asChild className="rounded-full bg-[#241d18] text-white hover:bg-[#3a3029]">
                  <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>{t.consult}</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <main>
        {showDesignPage ? (
          <section className="relative overflow-hidden px-5 pt-32 pb-24 lg:px-8 lg:pt-36">
            <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl" />
            <div className="absolute right-0 top-52 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
            <div className="relative mx-auto max-w-7xl">
              <button
                type="button"
                onClick={() => setShowDesignPage(false)}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#241d18]/10 bg-white/60 px-4 py-2 text-sm font-medium text-[#6c5f52] shadow-sm backdrop-blur transition hover:bg-white hover:text-[#241d18]"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                {lang === "id" ? "Kembali ke beranda" : "Back to home"}
              </button>

              <div className="grid gap-10 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-[#9a8067]">{t.portfolioEyebrow}</p>
                  <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#241d18] md:text-7xl">
                    {lang === "id" ? "Koleksi desain undangan digital." : "Digital invitation design collection."}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6c5f52]">
                    {lang === "id"
                      ? "Semua desain diproduksi in-house oleh qinvi. Pilih style yang paling mencerminkan cerita kalian, lalu sesuaikan warna, tipografi, dan detailnya."
                      : "Every design is produced in-house by qinvi. Choose the style that reflects your story, then customize the colors, typography, and details."}
                  </p>
                </div>

                <div className="rounded-[2rem] border border-[#241d18]/10 bg-white/55 p-5 shadow-xl shadow-black/5 backdrop-blur">
                  <p className="text-sm font-semibold text-[#241d18]">{lang === "id" ? "Temukan gaya favorit" : "Find your favorite style"}</p>
                  <p className="mt-2 leading-7 text-[#6c5f52]">
                    {lang === "id" ? "Gunakan filter kategori untuk melihat desain berdasarkan nuansa visual." : "Use category filters to browse designs by visual direction."}
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-2 border-y border-[#241d18]/10 py-5">
                {portfolioCategories.map((category) => (
                  <a
                    key={category.key}
                    href={`#portfolio-${category.key}`}
                    className="rounded-full bg-white/50 px-5 py-2.5 text-sm font-semibold tracking-wide text-[#6c5f52] transition hover:bg-[#241d18] hover:text-white"
                  >
                    {category.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 space-y-16">
                {portfolioSections.map((section) => (
                  <section key={section.key} id={`portfolio-${section.key}`} className="scroll-mt-28">
                    <div className="mb-6 flex flex-col justify-between gap-3 border-b border-[#241d18]/10 pb-5 md:flex-row md:items-end">
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-[#9a8067]">
                          {lang === "id" ? "Kategori desain" : "Design category"}
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#241d18] md:text-5xl">
                          {section.label}
                        </h2>
                      </div>
                      <p className="text-sm font-medium text-[#8b7c6b]">
                        {section.items.length} {lang === "id" ? "desain tersedia" : "designs available"}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {section.items.map((item) => (
                        <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-[#241d18]/10 bg-white/60 p-3 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-black/10">
                          <div className="relative h-[420px] overflow-hidden rounded-[1.55rem]">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient || "from-stone-200 via-rose-100 to-orange-100"}`} />
                            {item.image && (
                              <img
                                src={item.image}
                                alt={`Preview desain ${item.title}`}
                                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                            {item.tag && (
                              <div className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold tracking-wider text-[#241d18] shadow-sm">{item.tag}</div>
                            )}
                            {!item.image && (
                              <div className="absolute inset-x-7 top-24 rounded-[2rem] bg-white/45 p-5 backdrop-blur-md transition duration-500 group-hover:-translate-y-2">
                                <div className="h-44 rounded-[1.5rem] bg-white/65" />
                                <div className="mt-5 h-3 w-2/3 rounded-full bg-[#241d18]/25" />
                                <div className="mt-3 h-3 w-1/2 rounded-full bg-[#241d18]/15" />
                              </div>
                            )}
                            <div className="absolute inset-x-8 bottom-7 rounded-[1.4rem] bg-[#241d18]/85 p-4 text-white shadow-2xl shadow-black/20 backdrop-blur">
                              <p className="text-xs uppercase tracking-[0.24em] text-white/55">Qinvi Preview</p>
                              <p className="mt-1 text-lg font-semibold">{item.title}</p>
                            </div>
                          </div>
                          <div className="p-5">
                            <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                            {item.desc && <p className="mt-3 leading-7 text-[#6c5f52]">{item.desc}</p>}
                            <a
                              href={item.link || item.previewUrl || "#"}
                              target={item.link || item.previewUrl ? "_blank" : undefined}
                              rel={item.link || item.previewUrl ? "noreferrer" : undefined}
                              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#241d18]"
                            >
                              Live Preview <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </a>

                          </div>
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
                    <Button asChild size="lg" className="h-14 rounded-full bg-[#241d18] px-7 text-white hover:bg-[#3a3029]">
                      <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer" className="inline-flex items-center whitespace-nowrap">
                        {t.primaryCta} <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                      </a>
                    </Button>
                    <Button onClick={() => setShowDesignPage(true)} size="lg" variant="outline" className="h-14 rounded-full border-[#241d18]/15 bg-white/40 px-7 hover:bg-white">
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

                <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative mx-auto w-full max-w-[21rem] sm:max-w-sm">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-[#241d18] p-6 text-white shadow-2xl shadow-black/20">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=900&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#241d18]/35 via-[#241d18]/55 to-[#201914]/95" />

                    <div className="relative z-10 flex items-center justify-between">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-white/85">Wedding Invitation</p>
                      <Heart className="h-5 w-5 fill-white text-white drop-shadow" />
                    </div>

                    <div className="absolute left-0 top-[4.9rem] z-20 rounded-r-2xl bg-white px-5 py-3.5 text-[#241d18] shadow-2xl shadow-black/20">
                      <p className="text-[0.38rem] font-bold uppercase tracking-[0.24em] text-[#8b7c6b]">Live RSVP</p>
                      <div className="mt-1.5 flex items-end gap-2">
                        <p className="text-2xl font-bold leading-none tracking-tight">324</p>
                        <p className="pb-0.5 text-[0.42rem] font-bold uppercase tracking-wider text-emerald-600">{t.confirmed}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex h-full flex-col justify-end pb-4 pt-24">
                      <h2 className="font-serif text-[3.35rem] leading-[0.95] tracking-[-0.04em] text-white drop-shadow-2xl">
                        Alya
                        <br />
                        <span className="font-light italic">&amp;</span> Raka
                      </h2>
                      <p className="mt-4 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-white/85">
                        Sabtu, 24 Okt 2026 <span className="mx-2 text-white/45">|</span> Jakarta
                      </p>

                      <div className="mt-5 flex items-center gap-3">
                        <button className="rounded-full border border-white/45 px-7 py-2.5 text-[0.55rem] font-bold uppercase tracking-wider text-white transition hover:bg-white/10">Save Date</button>
                        <button className="rounded-full border border-white/35 px-7 py-2.5 text-[0.55rem] font-bold uppercase tracking-wider text-white transition hover:bg-white/10">RSVP</button>
                      </div>
                    </div>

                    <div className="absolute -right-4 bottom-8 z-20 rounded-2xl border border-white/10 bg-[#201914] p-3 pr-5 text-white shadow-2xl shadow-black/30">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-white/10 p-2">
                          <QrCode className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[0.55rem] font-bold uppercase tracking-wider">QR Check-in</p>
                          <p className="mt-0.5 text-[0.45rem] text-white/60">One-time scan</p>
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
                  <div className={`grid gap-8 ${t.serviceDetails[activeService].highlights[0]?.image ? "" : "lg:grid-cols-[0.85fr_1.15fr]"} lg:items-start`}>
                    <div className={t.serviceDetails[activeService].highlights[0]?.image ? "mx-auto max-w-3xl text-center flex flex-col items-center" : ""}>
                      <p className="text-sm uppercase tracking-[0.32em] text-[#9a8067]">{t.serviceDetails[activeService].eyebrow}</p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{t.serviceDetails[activeService].title}</h3>
                      <p className="mt-5 leading-8 text-[#6c5f52]">{t.serviceDetails[activeService].desc}</p>

                      <div className={`mt-7 flex flex-wrap gap-2 ${t.serviceDetails[activeService].highlights[0]?.image ? "justify-center" : ""}`}>
                        {t.serviceDetails[activeService].checklist.map((item) => (
                          <span key={item} className="inline-flex items-center gap-2 rounded-full bg-[#f7f2ea] px-4 py-2 text-sm text-[#5c4f44]">
                            <Check className="h-4 w-4 text-[#b9895b]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`grid gap-6 ${t.serviceDetails[activeService].highlights[0]?.image ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8" : "sm:grid-cols-2"}`}>
                      {t.serviceDetails[activeService].highlights.map((item, i) => (
                        t.serviceDetails[activeService].highlights[0]?.image ? (
                          <div key={item.title} className="flex flex-col rounded-[2rem] border border-[#241d18]/5 bg-[#fbf8f5] p-6 sm:p-8 transition">
                            {/* Top header row */}
                            <div className="mb-5 flex w-full items-center gap-4">
                              <span className="font-serif text-lg italic text-[#c87a7a]">0{i + 1}</span>
                              <div className="h-px flex-1 bg-[#c87a7a]/20"></div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c7462]">{item.tag}</span>
                            </div>

                            <h4 className="mb-6 font-serif text-2xl text-[#322822] min-h-[4rem] flex items-start">{item.title}</h4>

                            <div className="relative flex-1 mb-6 flex w-full flex-col items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#f7efe8] px-4 py-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]" style={{ minHeight: '200px' }}>
                              <div className="absolute left-4 top-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a88d7a]">{item.leftLabel || item.title}</div>
                              <div className="absolute right-4 top-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a88d7a]">{item.rightLabel || "Realtime"}</div>

                              {item.image !== "placeholder" ? (
                                <img src={item.image} alt={item.title} onClick={() => setLightboxImage(item.image)} className="relative z-10 h-auto w-[90%] rounded-xl object-cover shadow-2xl transition duration-700 hover:scale-[1.02] cursor-zoom-in" />
                              ) : i === 0 ? (
                                /* Personal QR Card Mockup */
                                <div onClick={() => setLightboxImage("qr-card")} className="relative z-10 w-[90%] overflow-hidden rounded-xl shadow-2xl bg-white text-left text-[#241d18] cursor-zoom-in transition duration-300 hover:scale-[1.02] hover:shadow-3xl">
                                  {/* Card Photo Area */}
                                  <div className="relative h-20 bg-gradient-to-br from-stone-400 via-stone-500 to-stone-700 flex flex-col items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-60"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
                                    <div className="relative z-10 text-center text-white">
                                      <p className="text-[6px] uppercase tracking-[0.2em] font-medium opacity-80">THE WEDDING OF</p>
                                      <p className="font-serif text-sm leading-tight tracking-wide">Namira &amp; Adit</p>
                                      <p className="text-[6px] tracking-[0.15em] mt-0.5 opacity-70">14 · 09 · 2025</p>
                                    </div>
                                    <div className="absolute bottom-1.5 left-0 right-0 flex items-center justify-center gap-1 text-white/80">
                                      <Heart className="h-2 w-2 fill-white" />
                                      <span className="text-[6px] tracking-[0.2em] uppercase font-semibold">qinvi</span>
                                    </div>
                                  </div>
                                  {/* Card Info Area */}
                                  <div className="flex items-start justify-between gap-2 px-3 py-2">
                                    <div className="flex-1 min-w-0">
                                      <p className="text-[8px] text-stone-500">The Wedding of</p>
                                      <p className="text-[10px] font-bold leading-tight">Namira &amp; Aditya</p>
                                      <p className="text-[8px] text-stone-500 mt-0.5">Minggu, 14 Sep 2025</p>
                                      <div className="mt-1.5">
                                        <p className="text-[8px] text-stone-500">Kepada Yth.</p>
                                        <p className="text-[9px] font-bold">Bapak/Ibu Tamu</p>
                                        <p className="text-[8px] text-stone-500">Alamat/Keterangan:</p>
                                        <p className="text-[9px] font-bold">Tempat</p>
                                      </div>
                                    </div>
                                    {/* QR Code */}
                                    <div className="flex-shrink-0 pt-1">
                                      <div className="h-16 w-16 rounded bg-white p-1 shadow-inner ring-1 ring-black/10">
                                        <QrCode className="h-full w-full text-[#241d18]" />
                                      </div>
                                    </div>
                                  </div>
                                  {/* Footer Bar */}
                                  <div className="flex items-center justify-between bg-[#241d18] px-3 py-1.5">
                                    <div className="flex items-center gap-1 text-white">
                                      <Heart className="h-2.5 w-2.5 fill-white" />
                                      <span className="text-[8px] font-bold tracking-widest uppercase">qinvi</span>
                                    </div>
                                    <p className="text-[6px] text-white/70 uppercase tracking-[0.1em] leading-tight text-right max-w-[55%]">Mohon bawa dan tunjukkan kartu ini pada penerima tamu</p>
                                  </div>
                                </div>
                              ) : i === 1 ? (
                                /* Greeting Screen Mockup */
                                <div onClick={() => setLightboxImage("greeting-screen")} className="relative z-10 w-[90%] aspect-video overflow-hidden rounded-xl shadow-2xl bg-[#1a1a1a] text-left text-white cursor-zoom-in transition duration-300 hover:scale-[1.02] hover:shadow-3xl">
                                  {/* Background Image */}
                                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
                                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

                                  <div className="relative z-10 h-full flex p-3 gap-3">
                                    {/* Left Side: Greeting */}
                                    <div className="flex-1 flex flex-col justify-center">
                                      <div className="flex items-center gap-1 mb-2 opacity-90">
                                        <Heart className="h-2.5 w-2.5 fill-white" />
                                        <span className="text-[8px] font-bold tracking-widest uppercase">qinvi</span>
                                      </div>
                                      <p className="text-[7px] text-white/80">Selamat datang di acara pernikahan</p>
                                      <p className="font-serif text-[13px] font-bold mt-0.5 tracking-wide">Haruka &amp; Suzuki</p>
                                      <div className="mt-2 space-y-0.5 text-[6px] text-white/70">
                                        <p>03 Oktober 2026</p>
                                        <p>Main Hall Mac Ballroom, Semarang</p>
                                      </div>
                                    </div>

                                    {/* Right Side: Guest Greeting */}
                                    <div className="w-[45%] flex flex-col justify-center items-center text-center border-l border-white/20 px-2">
                                      <p className="text-[5px] text-white/70 uppercase tracking-widest mb-1.5">Kepada Yth. Bapak/Ibu/Sdr/i</p>
                                      <p className="text-[10px] font-bold text-white leading-tight">Ms. Monica Carlina</p>
                                      <span className="bg-rose-500 text-white text-[4px] px-1.5 py-0.5 rounded-full font-bold mt-2 tracking-widest uppercase">VIP Guest</span>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="relative z-10 flex h-full min-h-[150px] w-full flex-col items-center justify-center gap-2 rounded-xl bg-white/40 text-[#a88d7a]">
                                  <item.icon className="h-8 w-8 opacity-30" />
                                  <span className="text-xs tracking-wider opacity-60">Image Placeholder</span>
                                </div>
                              )}
                            </div>

                            <p className="text-base leading-relaxed text-[#5c4f44]">{item.desc}</p>
                          </div>
                        ) : (
                          <div key={item.title} className="flex flex-col rounded-[1.5rem] border border-[#241d18]/10 bg-[#f7f2ea]/70 p-5 transition hover:bg-[#f7f2ea]">
                            <div className="mb-5 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#241d18] text-white">
                                  <item.icon className="h-5 w-5" />
                                </div>
                                {item.tag && <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a8067]">{item.tag}</span>}
                              </div>
                              <span className="text-sm font-semibold text-[#b9895b]">0{i + 1}</span>
                            </div>

                            <h4 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h4>
                            <p className="mt-3 leading-7 text-[#6c5f52]">{item.desc}</p>
                          </div>
                        )
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
                <Button onClick={() => setShowDesignPage(true)} variant="outline" className="w-fit rounded-full border-[#241d18]/15 bg-transparent px-6 hover:bg-white">
                  {t.seeAll}
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-10 border-b border-[#241d18]/10 pb-6">
                {portfolioCategories.map((category) => {
                  const isActive = activeTab === category.key;
                  return (
                    <button
                      key={category.key}
                      onClick={() => setActiveTab(category.key)}
                      className="relative rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200"
                    >
                      <span className={`relative z-10 transition-colors duration-200 ${isActive ? "text-white" : "text-[#6c5f52] hover:text-[#241d18]"}`}>
                        {category.label}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="activePortfolioTab"
                          className="absolute inset-0 rounded-full bg-[#241d18]"
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
                className={filteredPortfolio.length > 0 ? "grid gap-5 md:grid-cols-3" : "flex items-center justify-center py-20"}
              >
                {filteredPortfolio.length > 0 ? (
                  filteredPortfolio.map((item) => (
                    <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-[#241d18]/10 bg-white/50 p-3 transition hover:bg-white hover:shadow-xl hover:shadow-black/5">
                      <div className="relative h-80 overflow-hidden rounded-[1.55rem]">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient || "from-stone-200 via-rose-100 to-orange-100"}`} />
                        {item.image && (
                          <img
                            src={item.image}
                            alt={`Preview desain ${item.title}`}
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                        {item.tag && (
                          <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold tracking-wider text-[#241d18]">{item.tag}</div>
                        )}
                        {!item.image && (
                          <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] bg-white/45 p-5 backdrop-blur-md">
                            <div className="h-28 rounded-2xl bg-white/50" />
                            <div className="mt-4 h-3 w-2/3 rounded-full bg-[#241d18]/25" />
                            <div className="mt-2 h-3 w-1/2 rounded-full bg-[#241d18]/15" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                        {item.desc && <p className="mt-3 leading-7 text-[#6c5f52]">{item.desc}</p>}
                        <a
                          href={item.link || item.previewUrl || "#"}
                          target={item.link || item.previewUrl ? "_blank" : undefined}
                          rel={item.link || item.previewUrl ? "noreferrer" : undefined}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#241d18]"
                        >
                          Live Preview <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </a>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto w-full md:col-span-3">
                    <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/60 shadow-sm text-[#a88d7a] mb-6 border border-[#241d18]/5">
                      <Sparkles className="h-8 w-8 opacity-60" />
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tight text-[#241d18]">Segera Datang</h3>
                    <p className="mt-4 text-lg text-[#6c5f52]">Koleksi desain untuk kategori ini sedang dalam tahap pengembangan. Nantikan update terbaru dari kami!</p>
                  </div>
                )}
              </motion.div>
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
                    <Button asChild size="lg" className="mt-8 h-14 w-full rounded-full bg-white text-[#241d18] hover:bg-[#f7f2ea]">
                      <a href="https://wa.me/62895358390756" target="_blank" rel="noreferrer">{t.whatsappCta}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
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
              /* Large QR Card Modal */
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl text-[#241d18] cursor-default"
              >
                {/* Card Photo Area */}
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
                {/* Card Info Area */}
                <div className="flex items-start justify-between gap-4 px-7 py-5">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-stone-500">The Wedding of</p>
                    <p className="text-lg font-bold leading-tight mt-0.5">Namira &amp; Aditya</p>
                    <p className="text-sm text-stone-500 mt-1">Minggu, 14 Sep 2025</p>
                    <div className="mt-4">
                      <p className="text-xs text-stone-500">Kepada Yth.</p>
                      <p className="text-sm font-bold">Bapak/Ibu Tamu</p>
                      <p className="text-xs text-stone-500 mt-1">Alamat/Keterangan:</p>
                      <p className="text-sm font-bold">Tempat</p>
                    </div>
                  </div>
                  {/* QR Code */}
                  <div className="flex-shrink-0 pt-1">
                    <div className="h-32 w-32 rounded-lg bg-white p-2 shadow-inner ring-1 ring-black/10">
                      <QrCode className="h-full w-full text-[#241d18]" />
                    </div>
                  </div>
                </div>
                {/* Footer Bar */}
                <div className="flex items-center justify-between bg-[#241d18] px-7 py-3">
                  <div className="flex items-center gap-2 text-white">
                    <Heart className="h-4 w-4 fill-white" />
                    <span className="text-sm font-bold tracking-widest uppercase">qinvi</span>
                  </div>
                  <p className="text-[10px] text-white/70 uppercase tracking-[0.12em] leading-tight text-right max-w-[55%]">Mohon bawa dan tunjukkan kartu ini pada penerima tamu di lokasi acara</p>
                </div>
              </motion.div>
            ) : lightboxImage === "greeting-screen" ? (
              /* Large Greeting Screen Modal */
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl aspect-video overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl text-left text-white cursor-default relative flex"
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>

                <div className="relative z-10 w-full flex p-10 gap-10">
                  {/* Left Side: Greeting */}
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

                  {/* Right Side: Guest Greeting */}
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
                className="max-h-full max-w-full rounded-2xl shadow-2xl"
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

