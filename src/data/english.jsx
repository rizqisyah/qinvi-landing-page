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
import portfolioData from "./portfolioEnglish";

export const englishContent = {
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
  heroBadge: "Est. 2024 · Created for unforgettable moments",
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
      desc: "Unique QR codes for check-in, gift records, guest greeting screen, and real-time attendance reports.",
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
        { tag: "PER-GUEST", icon: UserCheck, title: "Personal QR Code", desc: "Each invitation has a unique QR Code. The QR Code can only be scanned once and cannot be used by others.", image: "placeholder" },
        { tag: "GREETING", icon: SearchCheck, title: "Greeting Screen", desc: "Display each guest's name automatically on screen after a successful QR scan, creating a warmer welcome moment.", image: "placeholder" },
        { tag: "CHECK-IN", icon: ScanLine, title: "QR App (Registration)", desc: "A smart digital guestbook via QR scan. Attendance, gifts, and reports are recorded real-time in one system.", image: "/img/qr-app.png" },
      ],
      checklist: ["Fast QR scan", "Multi-device", "Greeting screen", "Real-time report"],
    },
  },
  guestTools: [
    { icon: CalendarCheck, title: "RSVP Dashboard", desc: "Monitor attendance confirmation, guest count, and export reports anytime." },
    { icon: ScanLine, title: "QR Check-in", desc: "Speed up guest registration with a personal one-time QR code." },
    { icon: BarChart3, title: "Live Report", desc: "See attendance status, gift logs, and invitation data in real time." },
    { icon: ShieldCheck, title: "Verified Broadcast", desc: "Share invitations through a more reliable communication flow.", comingSoon: true },
  ],
  portfolio: portfolioData,
  testimonials: [
    {
      quote: "The team was responsive, the process was neat, and the invitation felt truly personal.",
      name: "Rina & Adit",
      meta: "Couple · Bandung",
    },
    {
      quote: "RSVP helped a lot because we had hundreds of guests. The wedding-day report was very clear.",
      name: "Siska & Dimas",
      meta: "Couple · Surabaya",
    },
    {
      quote: "The design was elegant, not too template-like, and every request was explained in detail.",
      name: "Nadia & Fajar",
      meta: "Couple · Jakarta",
    },
  ],
};

export default englishContent;

