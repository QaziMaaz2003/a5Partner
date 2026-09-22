/**
 * Single source of truth for all site copy.
 * Text carried over verbatim from a5partners.com.
 */

export const site = {
  name: "A5 Partners",
  wordmark: "A5",
  email: "jourdan@a5partners.com",
  copyright: "© 2021 A5 Partners LLC. All Rights Reserved.",
  social: {
    linkedin: "https://www.linkedin.com/company/a5-partners-llc",
    twitter: "http://twitter.com/a5_partners",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About A5", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Statement", href: "/privacy-statement" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
] as const;

const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  homeHero: {
    src: u("photo-1517048676732-d65bc937f952", 2200),
    alt: "Colleagues taking notes side by side around a long meeting table",
  },
  homeBelief: {
    src: u("photo-1460574283810-2aab119d8511", 1400),
    alt: "Repeating white concrete balconies rising up a modern building",
  },
  homeFull: {
    src: u("photo-1521791136064-7986c2920216", 2000),
    alt: "Two people shaking hands across a desk after a meeting",
  },
  aboutHero: {
    src: u("photo-1497366754035-f200968a6e72", 2000),
    alt: "Open-plan office interior with glass partitions and natural light",
  },
  aboutPartnership: {
    src: u("photo-1521737604893-d14cc237f11d", 1400),
    alt: "Colleagues collaborating around a shared workspace",
  },
  aboutBand: {
    src: u("photo-1559136555-9303baea8ebd", 1600),
    alt: "A team working together in a bright loft office",
  },
  servicesHero: {
    src: u("photo-1454165804606-c3d57bc86b40", 2000),
    alt: "Team reviewing performance charts spread across a table",
  },
  servicesIntro: {
    src: u("photo-1553877522-43269d4ea984", 1400),
    alt: "A consultant working through analysis at a quiet desk",
  },
  industriesHero: {
    src: u("photo-1504917595217-d4dc5ebe6122", 2000),
    alt: "Metalworker grinding steel, sparks flying across the workshop",
  },
  industriesPlant: {
    src: u("photo-1516937941344-00b4e0337589", 1600),
    alt: "An industrial processing plant silhouetted under heavy sky",
  },
  contactHero: {
    src: u("photo-1497366811353-6870744d04b2", 2000),
    alt: "A glass-walled meeting room in a contemporary office",
  },
  contactAside: {
    src: u("photo-1431540015161-0bf868a2d407", 1400),
    alt: "An empty boardroom looking out over the city",
  },
  cta: {
    src: u("photo-1486406146926-c627a92ad1ab", 1600),
    alt: "Office towers rising against the sky, seen from street level",
  },
  teamFull: {
    src: u("photo-1531973576160-7125cd663d86", 2000),
    alt: "Colleagues talking in a bright office corridor",
  },
} as const;

/* ------------------------------------------------------------------ Home */

export const home = {
  hero: {
    kicker: "A5 Partners",
    titleLines: ["BUILDING", "BETTER BUSINESSES", "TOGETHER"] as const,
    emphasis: "BETTER BUSINESSES",
    lead:
      "A long-term holding company acquiring and growing industry-leading companies with recurring revenue — the right way, for the long term.",
  },
  intro:
    "At A5 Partners, we know your company is your life’s work. We respect the work you've done and know succession is the foundation of cementing your legacy. A5 Partners is a long-term holding company focused on continuing the legacy you can be proud of. We acquire and grow industry leading companies with recurring revenue and focus on growing these great companies the right way, for the long term, by partnering with great people. Our hands-on approach to advising entrepreneurs improves returns, reduces costs, and strengthen’s companies aligned to a mission that can have a positive and sustainable impact their customers, constituents, and communities.",
  mission: {
    heading: "Our Mission",
    body:
      "As owners embark on their new chapters, we help them ensure they leave a meaningful legacy for the people closest to them.",
  },
  values: [
    {
      name: "Community",
      body:
        "As a business owner, you play a unique role in community leadership. You’ve owned that responsibility and worked hard to lift the most vulnerable and underrepresented in your community.",
    },
    {
      name: "Impact",
      body:
        "Your legacy is your masterpiece. You know your life's work is a inspirational story waiting to be continued in the right hands. We’ve got the chops to succeed your leadership.",
    },
    {
      name: "Opportunity",
      body:
        "As a proven leader, shifting industry dynamics and competition does not scare you. Big challenges require even bigger ideas. We’re here to scale your efforts and propel your vision forward.",
    },
  ],
  processLead: "Which is why our name isn’t just a name. It’s a comprehensive plan.",
  process: [
    { name: "Assess", body: "Organizational strengths, weaknesses, and opportunities" },
    {
      name: "Align",
      body: "Key stakeholders around a shared, data-driven, vision for the future",
    },
    {
      name: "Acquire",
      body: "Businesses with a well-established track records and strong growth potential",
    },
    {
      name: "Adapt",
      body:
        "Organizational strategy and transform operations to translate vision into action",
    },
    { name: "Accelerate", body: "Revenue growth and realize new business opportunities" },
  ],
  marquee: [
    "Long-term ownership",
    "Recurring revenue",
    "Operational excellence",
    "Legacy preservation",
    "Community impact",
    "Durable advantage",
  ],

  stats: [
    { value: "10", label: "Businesses in the target portfolio, held for the long term" },
    { value: "$1.25M+", label: "Minimum annual revenue we look for in an acquisition" },
    { value: "60+", label: "Client engagements led across sectors before founding A5" },
    { value: "15+", label: "Years advising C-suite leaders through change" },
  ],

  differentiators: {
    heading: "Not a fund. A permanent home for your company.",
    lead: "Most buyers are working to a clock. We are not — which changes every decision that follows.",
    items: [
      {
        name: "We hold, we don't flip",
        body: "There is no fund life, no forced exit and no clock running down. We buy businesses we intend to own for decades, so the right decision and the profitable decision stay the same one.",
      },
      {
        name: "Operators, not spectators",
        body: "We have sat in the chair. Our team has led restructurings, go-to-market launches and operational turnarounds, and we stay hands-on long after the deal closes.",
      },
      {
        name: "Your people keep their jobs",
        body: "We acquire companies because of the teams inside them. Succession means continuity for your employees, your customers and the community your business supports.",
      },
      {
        name: "Data-driven, not formulaic",
        body: "We pair rigorous analysis with the unmeasurable judgement of the people who already know the business. Neither one is enough on its own.",
      },
      {
        name: "Built for the community",
        body: "When a good local business winds down, a community loses more than a storefront. Revitalising it keeps that value where it was created.",
      },
      {
        name: "A fair, straightforward process",
        body: "Clear criteria, direct answers and a defined timeline. You will know where you stand at every stage, and you will hear it from us directly.",
      },
    ],
  },

  partnership: {
    heading: "Succession, handled with the care it deserves",
    body: [
      "Selling the company you built is rarely only a financial decision. It is a decision about the people who showed up for you, the customers who trusted you and the reputation you spent a career earning.",
      "We structure transitions so that owners can step back on their own terms — with the option of a meaningful equity stake, a defined handover period and the confidence that what they built carries on.",
    ],
  },

  faqHeading: "Questions owners ask us",
  faqs: [
    {
      q: "What kind of businesses do you acquire?",
      a: "B2B, distribution and services-based businesses generating between $350K and $650K in discretionary earnings, with at least $1.25M in annual revenue — ideally $1.5–3M. We look for physical assets or high-turn inventory, and consistent year-over-year sales growth of roughly 2–5% across the preceding three years.",
    },
    {
      q: "Which industries are you focused on?",
      a: "Consumer Services, Industrials, Distribution and Transportation. These are sectors where operational discipline compounds, demand is durable, and thoughtful technology investment still creates real advantage.",
    },
    {
      q: "Where do you invest geographically?",
      a: "Primarily the West Coast — ideally California, though we are open to Oregon and Washington. We also look at metro areas across the US, including Atlanta, Chicago, Los Angeles and Philadelphia.",
    },
    {
      q: "How long will I need to stay involved after the sale?",
      a: "We ask sellers to train the incoming team for no less than 60 days. Many owners choose to stay longer, and some retain a meaningful equity stake and continue to grow the business alongside us. The right arrangement depends on what you want your next chapter to look like.",
    },
    {
      q: "Are you going to break up the business or cut the team?",
      a: "No. We acquire companies precisely because of what is already working inside them — the people, the customer relationships and the operating knowledge. Our aim is to invest behind that, not strip it out.",
    },
    {
      q: "How are you different from private equity?",
      a: "A private equity fund has a defined life and must return capital to its investors, which forces an exit whether or not it is the right moment for the company. We are a long-term holding company with no such clock, so we can let good decisions mature.",
    },
    {
      q: "What does the process look like from here?",
      a: "It starts with a conversation — no materials required. If there is a fit, we move through assessment and alignment before any offer is made, so that both sides understand the business and each other well before terms are discussed.",
    },
  ],
} as const;

/* ----------------------------------------------------------------- About */

export const about = {
  hero: {
    kicker: "About",
    title: "ABOUT A5",
    lead:
      "A holding company that seeks to acquire and run high-quality businesses with durable competitive advantages.",
  },
  statement:
    "A5 Partners is a holding company that seeks to acquire and run high-quality businesses with durable competitive advantages. We pursue a single, long-term investment approach that helps companies accelerate their growth and scale, all while diversifying their leadership and community impact. Our unique, data-driven, approach to leadership helps the companies we acquire generate higher returns and meaningful business outperformance. We leverage our deep expertise from the global technology, financial services, industrial, and consumer sectors and apply it locally to small, unique, companies. We are typically attracted to companies with defensible competitive advantages, resulting in durable unit economics and attractive free cash flow. Our efforts will culminate in a concentrated portfolio of 10 businesses that will compound capital over a multi-year investment horizon. We aspire to be a leading force in shaping a future where economic prosperity benefits all.",
  approach:
    "A5 Partners invests in businesses with proven long-term success that can rapidly scale with our guidance and support. Ideally, we aim to acquire B2B, distribution, or services-based businesses generating between $350K to $650K in discretionary earnings on the West Coast (Ideally CA, but open to OR or WA). The sectors of particular interest are those ripe for disruption and technological enhancements, including Consumer Services, Distribution, Industrials, and Transportation. We are particularly interested in sustaining the community by taking over businesses from operators (e.g. Baby Boomers) who are looking to exit. Instead of winding down the business, we provide an opportunity to revitalize and grow the business. Within the aforementioned industries, we are seeking companies that meet the following criteria:",
  criteria: [
    "Minimum of $1.25M in annual revenue, ideally between $1.5-3M",
    "Must hold physical assets (e.g. real estate, equipment, vehicles, etc.) or high-turn inventory, which can be converted to cash",
    "Sellers willing to train buyers for no less than 60 days",
    "Consistent YoY sales growth of ~2-5% for the preceding three years",
  ],
  principles: {
    heading: "What we believe",
    lead: "Three convictions that shape how we buy, hold and operate.",
    items: [
      {
        name: "Patience is an advantage",
        body: "Great companies are not built in quarters. A holding period measured in decades lets good decisions mature instead of being cut short by a fund's timetable.",
      },
      {
        name: "Prosperity should be shared",
        body: "We aspire to be a leading force in shaping a future where economic prosperity benefits all — starting with the employees and communities of the businesses we acquire.",
      },
      {
        name: "Legacy is the real asset",
        body: "The balance sheet records what a business owns. The legacy records what it meant. We take both seriously.",
      },
    ],
  },
  geography:
    "Specifically, we are seeking businesses who meet the above criteria and have owners who are interested in transitioning and growing an existing business with a meaningful equity stake in exchange for our expertise. We are primarily interested in the metro areas throughout the US, including in and around Atlanta, GA, Chicago, IL, Los Angeles, CA, and Philadelphia, PA.",
  team: [
    {
      name: "JOURDAN SUTTON",
      role: "MANAGING PARTNER",
      bio: [
        "Jourdan Sutton is a trusted strategic advisor with 15+ years of experience helping C-suite executives and organizations understand and address their most pressing strategic and operational challenges, translating business insights and stakeholder vision into realized growth. Prior to starting A5 Partners, Jourdan worked as a Vice President in EY-Parthenon’s education and social impact practice, leading over 60 engagements with education, economic development, social impact, private equity, and tech companies.",
        "Throughout his career, Jourdan has championed growth and profit improvement strategies, transformation initiatives, operational restructuring, and strategic planning projects that helped his clients enter new markets, launch new products, and navigate economic and political uncertainty. He completed 60+ client projects in the education/non-profit, consumer, and technology sectors, selling $5-$7M+ in revenue annually and managing $2M+ in project and internal budgets annually.",
        "Jourdan held senior leadership roles for global financial services and strategy consultancy firms such as Citigroup and Deloitte LLP. Jourdan was instrumental in incubating and executing company-sponsored, cross-functional initiatives and new product offerings in order to expand small business lending and develop community investment ecosystems both domestically and abroad. In addition to his corporate experience, Jourdan has leveraged his financial services and strategy experience as an avid Minority Business Enterprise consultant and angel investor, partnering exclusively with minority, women, and veteran entrepreneurs that serve vulnerable and minority communities located throughout the US. Jourdan earned his Bachelor of Arts in Sociology and Anthropology at DePauw University and holds an MBA and M.Ed. from the University of Michigan.",
      ],
    },
    {
      name: "SHERLEY LOPEZ ESTRADA",
      role: "DEAL ASSOCIATE",
      bio: [
        "Sherley is a graduate of Middlebury College class of 2024. Currently Deal Associate of A5 Partners, she has navigated a dynamic upbringing marked by frequent relocations, diverse educational experiences, and the cultivation of enduring connections. Throughout her journey, the unwavering support of family has been a constant source of strength, instilling in her the importance of authenticity and the courage to champion her beliefs.",
        "In tandem with Sherley’s commitment to community building, she has dedicated the past four years to the Middlebury Consulting Group, contributing to five distinct projects that encapsulate her prowess in the business domain. Notable endeavors include collaborations with a local wax bar, Vermont Adaptive Ski & Sports, and two projects with A5. Through these initiatives, she has honed her skills in market research, competitor analysis, and operational sales strategies, affording her a comprehensive understanding of the intricacies of the business landscape.",
        "In summary, her multifaceted background, coupled with a deep-seated dedication to family and community, has laid the foundation for a promising career in the business arena. As Sherley navigates the intersection of her personal values and professional aspirations, she is eager to contribute her skills and insights to a service-oriented business that prioritizes the holistic development and satisfaction of its employees.",
      ],
    },
  ],
} as const;

/* -------------------------------------------------------------- Services */

export const services = {
  hero: {
    kicker: "Services",
    title: "OUR SERVICES",
    lead:
      "Deep industry and functional expertise applied to the challenges that decide whether a business compounds or stalls.",
  },
  intro: {
    heading: "Expertise applied where it changes the outcome",
    body: [
      "We work closely with clients to embrace a transformational approach aimed at benefiting all stakeholders — empowering organizations to grow, build sustainable competitive advantage, and drive positive societal impact.",
      "Our experts bring deep industry and functional expertise and a range of perspectives that question the status quo and spark change. We customize our support to your individual needs and concerns, rather than arriving with a template.",
    ],
  },

  approach: {
    heading: "How an engagement runs",
    lead: "Four stages, deliberately sequenced. We do not skip to recommendations before we understand the business.",
    steps: [
      {
        name: "Listen",
        body: "We start with the owner's ambitions, the company's history and what must never be lost.",
      },
      {
        name: "Diagnose",
        body: "Data and stakeholder perspective together, until the real constraint is clear rather than the obvious one.",
      },
      {
        name: "Design",
        body: "A practical plan with sequencing, owners and measures — built to be executed, not presented.",
      },
      {
        name: "Deliver",
        body: "We work alongside management through implementation, and stay until the change holds.",
      },
    ],
  },

  items: [
    {
      name: "Strategy",
      body:
        "The historical approach to identifying and assessing growth opportunities in new products, services, or markets is to boil the ocean into quantifiable segments in order to decide where to invest your human, financial, or physical capital. Our experience suggests that a better approach is to combine data-driven insights and the unmeasurable perspectives from stakeholders in order to drive innovation and growth strategies that unlock new opportunities.",
      offerings: ["Growth Strategy", "Go-to-Market Strategy", "Strategic Planning"],
      image: {
        src: u("photo-1542744173-8e7e53415bb0", 1400),
        alt: "Colleagues meeting around a boardroom table lined with laptops",
      },
    },
    {
      name: "Organizational Transformation",
      body:
        "While change is constant, organizations of all sizes and types struggle to maintain a clear connection between the organization-wide vision and a consistent operating model. We help leaders define a long-term direction for their organizations and align their operations to ensure they execute against that vision.",
      offerings: ["Organizational Design", "Business Restructuring", "Change Management"],
      image: {
        src: u("photo-1519389950473-47ba0277781c", 1400),
        alt: "Team working together across laptops in a shared office",
      },
    },
    {
      name: "Customer & Market Insights",
      body:
        "Companies can no longer just rely on having a great product or service. Customers expect brands to deliver great customer experiences in order to become and remain successful. Delivering value-creating customer experiences, in these increasingly complex competitive environments, requires a clear understanding of customers’ needs and how they engage your business and its products. We help organizations think creatively to envision their unique right to win—and the investments required to realize that vision.",
      offerings: ["Business Intelligence", "Customer Demand", "Marketing and Sales"],
      image: {
        src: u("photo-1600880292089-90a7e086ee0c", 1400),
        alt: "A team joining hands together over a desk",
      },
    },
    {
      name: "Operations",
      body:
        "Increasingly complex competitive and market dynamics require organizations to focus on operational excellence to gain and sustain a competitive advantage. Streamlining or creating new processes to optimize costs, improve efficiency, and deliver higher productivity are key to reducing costs and complexity in a business. We partner with clients to drive transformational operational change—and impact—in key areas ranging from procurement, service operations, and supply chain to manufacturing, and end-to-end operational excellence.",
      offerings: [
        "Business Process Design/Redesign",
        "Supply Chain Management",
        "Procurement",
      ],
      image: {
        src: u("photo-1553413077-190dd305871c", 1400),
        alt: "Distribution warehouse stacked with palletised inventory",
      },
    },
  ],
} as const;

/* ------------------------------------------------------------ Industries */

export const industries = {
  hero: {
    kicker: "Industries",
    title: "INDUSTRIES",
    lead:
      "Sectors ripe for disruption and technological enhancement, where operational discipline compounds into durable advantage.",
  },
  items: [
    {
      name: "Consumer Services",
      body:
        "Businesses that provide goods or services to consumers or businesses. Demand is often driven by consumer spending. Profitability of these companies depends on efficient operations and favorable locations.",
      detail:
        "Location, scheduling and service consistency decide the margin in these businesses. We invest in the systems that make a good operator repeatable — routing, staffing, pricing and retention — so that quality no longer depends on the owner being in the building.",
      signals: ["Repeat customers", "Favourable locations", "Efficient service delivery"],
      image: {
        src: u("photo-1606836576983-8b458e75221d", 1400),
        alt: "A warm, empty café interior set up for the day's service",
      },
    },
    {
      name: "Industrial",
      body:
        "Companies that make and sell machinery, equipment, and supplies that are used to produce other goods, namely in manufacturing, resource extraction, and construction.",
      detail:
        "Specialised products and deep technical knowledge create genuinely defensible positions. Our focus is throughput and reliability: tightening production planning, maintenance and quality so capacity is freed without capital being spent.",
      signals: ["Specialised products", "Physical assets", "Technical know-how"],
      image: {
        src: u("photo-1581091226825-a6a2a5aee158", 1400),
        alt: "An engineer operating automated machinery on a production line",
      },
    },
    {
      name: "Distribution",
      body:
        "The essential link in the supply chain, connecting manufacturing companies and suppliers with various businesses, contractors, institutions, retailers, and now increasingly consumers directly.",
      detail:
        "Distribution rewards the operator who knows their inventory best. We back better demand planning, supplier terms and warehouse economics — the levers that turn working capital into cash without losing service levels.",
      signals: ["High-turn inventory", "Supplier relationships", "Service reliability"],
      image: {
        src: u("photo-1586528116311-ad8dd3c8310d", 1400),
        alt: "Shelved inventory stretching down a distribution warehouse aisle",
      },
    },
    {
      name: "Transportation",
      body:
        "Companies that provide services to move people or goods. This includes receiving, storing, and distributing goods to stores and to customers.",
      detail:
        "Fleet utilisation, route density and maintenance discipline separate a good transport business from a fragile one. These are measurable problems, and measurable problems respond well to patient investment.",
      signals: ["Fleet assets", "Route density", "Recurring contracts"],
      image: {
        src: u("photo-1601584115197-04ecc0da31d7", 1400),
        alt: "A freight truck travelling an open highway at speed",
      },
    },
  ],

  criteria: {
    heading: "What makes a business a fit",
    lead: "Sector matters less than shape. Across all four verticals we are looking for the same underlying characteristics.",
    items: [
      {
        name: "Durable demand",
        body: "Customers who come back because they need to, not because of a promotion. Recurring revenue and contracted work are the clearest signal.",
      },
      {
        name: "Real assets",
        body: "Property, equipment, vehicles or high-turn inventory. Something tangible underpinning the balance sheet, not just goodwill.",
      },
      {
        name: "Room to professionalise",
        body: "A business that has grown on instinct and relationships, where basic systems and reporting would unlock a step change.",
      },
      {
        name: "An owner ready for the next chapter",
        body: "Someone who cares where the business lands, is willing to hand over properly, and wants the team to be looked after.",
      },
    ],
  },

  plant: {
    heading: "Essential businesses, patiently run",
    body: "These are not glamorous industries, and that is exactly the point. They are the companies communities depend on — the ones that keep shelves stocked, sites running and services delivered. Owned well and invested in steadily, they compound.",
  },
  howWeWork: {
    heading: "HOW WE WORK",
    body:
      "We work closely with clients to embrace a transformational approach aimed at benefiting all stakeholders—empowering organizations to grow, build sustainable competitive advantage, and drive positive societal impact. We excel in the business of potential and help shape strategic, organizational, economic, and societal change. Our experts bring deep industry and functional expertise and a range of perspectives that question the status quo and spark change. We partner with clients from the private, public, and not-for-profit sectors in all regions to identify their highest-value opportunities, address their most critical challenges, and transform their enterprises. We bring extensive experience and professionalism to every case and customize our support to your individual needs and concerns.",
  },
  image: {
    src: u("photo-1578575437130-527eed3abbec", 2000),
    alt: "Gantry cranes loading shipping containers at a freight port",
  },
} as const;

/* --------------------------------------------------------------- Contact */

export const contact = {
  hero: {
    kicker: "Contact",
    title: "Let’s build",
    emphasis: "together",
    lead: "Interested in working with us? Getting in touch has never been easier.",
  },
  address: ["A5 Partners LLC", "2108 N Street, Suite N", "Sacramento, CA 95816"],
  expectations: {
    heading: "What happens next",
    steps: [
      {
        name: "We read it ourselves",
        body: "Your message goes straight to the team — not to a queue. No forms to fill in afterwards.",
      },
      {
        name: "A real conversation",
        body: "If there is a possible fit, we will set up a call. No materials or financials needed to start.",
      },
      {
        name: "Clear answers either way",
        body: "If it is not a fit, we will tell you plainly and explain why, so your time is not wasted.",
      },
    ],
  },
} as const;

/* ---------------------------------------------------------- Shared CTA */

export const cta = {
  kicker: "Get in touch",
  title: "Let’s build something",
  emphasis: "enduring",
  body: "Whether you are planning your succession or simply want to understand your options, a conversation costs nothing.",
} as const;
