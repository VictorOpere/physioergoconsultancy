import type { IconName } from "@/components/ui/Icon";

/**
 * Single source of truth for every piece of PhysioErgo copy, contact detail and
 * image reference. All wording is drawn from the company introduction letter and
 * capability deck — nothing here is invented.
 */

export const site = {
  name: "PhysioErgo Integrative Consultancy Ltd",
  shortName: "PhysioErgo",
  legalSuffix: "Integrative Consultancy Ltd",
  tagline: "Wellness in Motion",
  url: "https://www.physioergoconsultancy.org",
  description:
    "PhysioErgo Integrative Consultancy provides integrated ergonomics, physiotherapy and workplace wellness solutions designed to create healthier, safer and higher-performing workplaces.",
  /**
   * Both lines carry WhatsApp. Displayed in spaced local form because that is
   * how a Kenyan client dials them; the hrefs keep the +254 international form
   * so the links still work from abroad.
   */
  phones: [
    {
      display: "0181 820 503",
      tel: "tel:+254181820503",
      whatsapp: "https://wa.me/254181820503",
    },
    {
      display: "0181 820 504",
      tel: "tel:+254181820504",
      whatsapp: "https://wa.me/254181820504",
    },
  ],
  email: "info@physioergoconsultancy.org",
  emailHref: "mailto:info@physioergoconsultancy.org",
  city: "Nairobi, Kenya",
  postalAddress: ["P.O. Box 73797 – 00200", "City Square, Nairobi, Kenya"],
  developer: "Krazzy Cloud Computing",
  /** Official accounts, with QR and tracking parameters stripped. */
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/physioergoconsultancy",
      icon: "instagram",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/17j88UbFAj/",
      icon: "facebook",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@physioergoconsult",
      icon: "tiktok",
    },
    { label: "X", href: "https://x.com/physioergocon", icon: "x" },
  ],
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Workplace Wellness", href: "/workplace-wellness" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Every frame below was opened and checked before being written in, and the alt
 * text describes what is actually visible rather than the slot name.
 *
 * `standingDesk`, `workstationDetail` and `screenFatigue` are PhysioErgo's own
 * photographs. The rest are free-licence Unsplash stock, several from
 * Lagos-based shoots, downloaded and served locally rather than hotlinked;
 * Unsplash+ premium images were ruled out as they carry a separate Getty licence.
 * Replace these with company photography as it becomes available.
 */
export const images = {
  heroConsultation: {
    src: "/photos/hero-consultation.webp",
    alt: "Two colleagues talking across an office desk with a laptop open between them.",
  },
  calmOffice: {
    src: "/photos/calm-office.webp",
    alt: "A woman working at an uncluttered desk with a laptop, sitting upright beside a bright window.",
  },
  collaborativeTable: {
    src: "/photos/collaborative-table.webp",
    alt: "Three colleagues seated around a boardroom table with laptops, talking beside tall windows.",
  },
  hybridWorker: {
    src: "/photos/hybrid-worker.webp",
    alt: "A professional holding a tablet and smiling in a modern open workspace.",
  },
  teamLaptop: {
    src: "/photos/team-laptop.webp",
    alt: "Two colleagues leaning in over a shared laptop at a desk.",
  },
  openOffice: {
    src: "/photos/open-office.webp",
    alt: "A team meeting around a long conference table with laptops and notebooks in a daylit room.",
  },
  moodyBoardroom: {
    src: "/photos/modern-meeting.webp",
    alt: "A professional standing at a desk with a laptop and notebook, beside a wall screen and plants.",
  },
  workstationDetail: {
    src: "/photos/ergonomic-chair.webp",
    alt: "A mesh office chair with headrest and adjustable arms beside a desk with two monitors and a laptop.",
  },
  keyboardPosture: {
    src: "/photos/keyboard-posture.webp",
    alt: "Close view of hands resting on a laptop keyboard while working at a desk.",
  },
  remoteWellbeing: {
    src: "/photos/remote-wellbeing.webp",
    alt: "A professional working from a laptop on a sofa beside a window and houseplants.",
  },
  standingDesk: {
    src: "/photos/standing-desk.webp",
    alt: "A height-adjustable desk raised to standing height, with a laptop, tablet and separate keyboard.",
  },
  screenFatigue: {
    src: "/photos/screen-glasses.webp",
    alt: "A pair of screen glasses resting on an open laptop keyboard.",
  },
  diverseTeam: {
    src: "/photos/diverse-team.webp",
    alt: "Colleagues working at laptops along shared desks in an open-plan office with plants.",
  },
  partnership: {
    src: "/photos/focused-work.webp",
    alt: "A professional working at a wooden desk with a notebook, surrounded by greenery.",
  },
} as const;

export const hero = {
  eyebrow: "Workplace Wellness",
  headingLines: ["Healthier Workplaces.", "Better Performance."],
  lead: "Integrated ergonomics and physiotherapy solutions designed to create healthier, safer and higher-performing workplaces.",
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
  floatingCard: {
    label: "Preventive-First Approach",
    text: "Designing healthier workplaces around people.",
  },
} as const;

export const about = {
  eyebrow: "About PhysioErgo",
  heading: "Wellness in Motion",
  body: "PhysioErgo Integrative Consultancy Ltd is a Kenyan-based professional firm dedicated to advancing workplace health, safety and performance through integrated ergonomics and physiotherapy solutions.",
  philosophy:
    "Ergonomics is the science of designing work to fit people, rather than forcing people to fit work.",
  supporting:
    "We sit at the intersection of health, work and performance, helping people move better, work smarter and live healthier.",
  blend:
    "Our approach blends evidence-based physiotherapy, applied ergonomics, occupational health principles and wellness programming, tailored to real-world African work environments.",
  badge: "Preventive-First Approach",
} as const;

export const visionMission = [
  {
    label: "Vision",
    text: "To be a trusted leader in physiotherapy and ergonomics, advancing safe, healthy and high-performing workplaces through science-based, human-centered solutions.",
  },
  {
    label: "Mission",
    text: "To prevent work-related musculoskeletal disorders and improve organizational performance by delivering ISO-aligned ergonomic assessments, professional training and integrated physiotherapy-led interventions that promote worker well-being and sustainable work systems.",
  },
] as const;

export interface Pillar {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Physical Ergonomics",
    description:
      "Addressing posture, workstation design and musculoskeletal health.",
    icon: "posture",
  },
  {
    number: "02",
    title: "Cognitive Ergonomics",
    description: "Focusing on mental workload, attention and decision-making.",
    icon: "mind",
  },
  {
    number: "03",
    title: "Organizational Ergonomics",
    description: "Optimizing systems, communication and workplace culture.",
    icon: "network",
  },
];

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Ergonomic Assessments",
    description:
      "ISO-aligned ergonomic assessments designed to identify workplace risks and opportunities for improvement.",
    icon: "clipboard",
  },
  {
    number: "02",
    title: "Workplace Ergonomics",
    description:
      "Practical solutions addressing posture, workstation setup and physical workplace conditions.",
    icon: "desk",
  },
  {
    number: "03",
    title: "Physiotherapy-Led Interventions",
    description:
      "Professional physiotherapy-led interventions supporting workplace health and musculoskeletal wellbeing.",
    icon: "hands",
  },
  {
    number: "04",
    title: "Workplace Health & Wellness Training",
    description:
      "Professional training that helps organizations and employees understand healthier ways of working.",
    icon: "training",
  },
  {
    number: "05",
    title: "Musculoskeletal Risk Prevention",
    description:
      "Preventive strategies designed to reduce work-related musculoskeletal risks.",
    icon: "shield",
  },
  {
    number: "06",
    title: "Workplace Wellness Consulting",
    description:
      "Context-sensitive workplace wellness solutions tailored to organizational needs.",
    icon: "compass",
  },
];

/** Detailed service families as presented in the company capability deck. */
export const serviceFamilies = [
  {
    title: "Organisational Services",
    items: [
      "Workplace ergonomic risk assessments",
      "Job task analysis and work redesign",
      "Office, industrial and remote-work ergonomics",
      "Ergonomics policy and programme development",
      "Return-to-work and injury prevention programmes",
    ],
  },
  {
    title: "Individual & Clinical Services",
    items: [
      "Functional movement and posture assessments",
      "Physiotherapy-informed ergonomics coaching",
      "Pain prevention and management strategies",
      "Home and remote workstation optimisation",
    ],
  },
  {
    title: "Training & Capacity Building",
    items: [
      "Ergonomics awareness workshops",
      "Manual handling and safe movement training",
      "Leadership and safety culture training",
      "Custom ergonomics training modules",
    ],
  },
] as const;

/** Condensed four-step model used on the homepage. */
export const processSteps = [
  {
    number: "01",
    title: "Assess",
    description: "Understand the workplace and identify risks.",
  },
  {
    number: "02",
    title: "Understand",
    description: "Consider physical, cognitive and organizational factors.",
  },
  {
    number: "03",
    title: "Intervene",
    description:
      "Develop practical ergonomics and physiotherapy-led solutions.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Support healthier, safer and higher-performing workplaces.",
  },
] as const;

/** Full five-stage engagement model from the capability deck. */
export const approachStages = [
  {
    number: "01",
    title: "Understand",
    description: "Assess organisational context, tasks and people.",
  },
  {
    number: "02",
    title: "Analyse",
    description: "Identify physical, cognitive and psychosocial risks.",
  },
  {
    number: "03",
    title: "Design",
    description: "Develop tailored, feasible interventions.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Support rollout with training and coaching.",
  },
  {
    number: "05",
    title: "Sustain",
    description: "Monitor outcomes and support continuous improvement.",
  },
] as const;

export const differentiators = [
  "True integration of physiotherapy and ergonomics",
  "Preventive-first approach rather than treatment-only models",
  "Context-sensitive solutions for African and hybrid workplaces",
  "Evidence-based, standards-aligned practice following ISO, ILO and WHO principles",
  "Practical recommendations, not theory-heavy reports",
] as const;

export const anthropometrics = {
  eyebrow: "Anthropometrics",
  heading: "No One-Size-Fits-All",
  points: [
    "People differ by gender, body size and proportions — work should reflect this.",
    "We use anthropometric principles to cluster users rather than assume an average worker.",
    "Assessments consider who actually uses the workstation, tools and tasks.",
    "Focus on adjustability, reach, posture and clearance, including often-missed details.",
    "The result is inclusive, tailored solutions rather than blanket recommendations.",
  ],
  quote: "We design work to fit people — not people to fit work.",
} as const;

export const benefits = [
  "Reduced workplace health risks",
  "Improved employee comfort",
  "Improved morale and engagement",
  "Better retention",
  "Increased productivity",
  "Improved quality of work",
  "Support for occupational health practices",
  "Support for ESG commitments",
] as const;

export const challenges = [
  "High rates of work-related musculoskeletal disorders",
  "Rising absenteeism and presenteeism",
  "Reduced productivity due to pain, fatigue and poor work design",
  "Limited access to ergonomics expertise tailored to local contexts",
  "Reactive healthcare approaches instead of preventive solutions",
] as const;

export const alignment = [
  {
    title: "ESG & Sustainability",
    description:
      "Workplace wellbeing evidence that supports sustainability commitments.",
    icon: "leaf",
  },
  {
    title: "Occupational Safety & Health",
    description:
      "Practices that strengthen occupational safety and health compliance.",
    icon: "shield",
  },
  {
    title: "Talent & Retention",
    description:
      "Employee wellbeing strategies that support talent retention.",
    icon: "people",
  },
  {
    title: "Performance & Efficiency",
    description:
      "Performance optimisation and operational efficiency across teams.",
    icon: "chart",
  },
] as const satisfies readonly {
  title: string;
  description: string;
  icon: IconName;
}[];

export const audiences = [
  { title: "Corporate Offices", icon: "building" },
  { title: "Hybrid Teams", icon: "hybrid" },
  { title: "Remote Workers", icon: "home" },
  { title: "Organizations & Institutions", icon: "institution" },
  { title: "High-Demand Workplaces", icon: "pulse" },
] as const satisfies readonly { title: string; icon: IconName }[];

export const values = [
  {
    title: "Integrated",
    description:
      "Physiotherapy and ergonomics working together rather than in isolation.",
  },
  {
    title: "Preventive",
    description:
      "Identifying risks early instead of responding once harm has occurred.",
  },
  {
    title: "Context-Sensitive",
    description:
      "Solutions shaped around African and hybrid work environments.",
  },
  {
    title: "Human-Centered",
    description: "Work designed around the people who actually do it.",
  },
] as const;

export const commitments = [
  "Professional integrity and confidentiality",
  "Evidence-based and ethical practice",
  "Collaborative engagement with clients",
  "Measurable impact and continuous improvement",
] as const;

export const modernWorkplace = {
  heading: "The Workplace Is Changing.",
  lead: "Remote, hybrid and high-demand work environments require a new approach to workplace health.",
  statement:
    "Investing early in ergonomics is not just about safety. It is about future-proofing your workforce and turning wellness into a strategic asset.",
  cta: { label: "Talk to PhysioErgo", href: "/contact" },
} as const;

export const finalCta = {
  heading: "Let's Build a Healthier Workplace.",
  text: "We would welcome the opportunity to understand your organisation's unique needs and explore how PhysioErgo can support your goals.",
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "Contact Us", href: "/contact#consultation-form" },
} as const;

export const engagementOffers = [
  "Understand your organisation's unique needs",
  "Conduct an initial ergonomic or wellness review",
  "Co-create a customised intervention plan",
] as const;

export const areasOfInterest = [
  ...services.map((service) => service.title),
  "General Enquiry",
];
