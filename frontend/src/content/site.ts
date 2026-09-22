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
    src: u("photo-1600880292203-757bb62b4baf", 2000),
    alt: "Two business partners reviewing documents together at a desk",
  },
  homeFull: {
    src: u("photo-1552664730-d307ca884978", 2000),
    alt: "A team collaborating in front of a wall of sticky notes",
  },
  aboutHero: {
    src: u("photo-1497366754035-f200968a6e72", 2000),
    alt: "Open-plan office interior with glass partitions and natural light",
  },
  aboutPartnership: {
    src: u("photo-1521737604893-d14cc237f11d", 1400),
    alt: "Colleagues collaborating around a shared workspace",
  },
  servicesHero: {
    src: u("photo-1454165804606-c3d57bc86b40", 2000),
    alt: "Team reviewing performance charts spread across a table",
  },
  industriesHero: {
    src: u("photo-1504917595217-d4dc5ebe6122", 2000),
    alt: "Metalworker grinding steel, sparks flying across the workshop",
  },
  contactHero: {
    src: u("photo-1486406146926-c627a92ad1ab", 2000),
    alt: "Modern office tower photographed from below against the sky",
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
    },
    {
      name: "Industrial",
      body:
        "Companies that make and sell machinery, equipment, and supplies that are used to produce other goods, namely in manufacturing, resource extraction, and construction.",
    },
    {
      name: "Distribution",
      body:
        "The essential link in the supply chain, connecting manufacturing companies and suppliers with various businesses, contractors, institutions, retailers, and now increasingly consumers directly.",
    },
    {
      name: "Transportation",
      body:
        "Companies that provide services to move people or goods. This includes receiving, storing, and distributing goods to stores and to customers.",
    },
  ],
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
} as const;
