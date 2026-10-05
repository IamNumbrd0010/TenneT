/**
 * PROJECTS DATA ARCHITECTURE
 *
 * Future Editing Note:
 * To ADD a new project:
 *   1. Import your image at the top (or place it in /src/assets/images/).
 *   2. Copy one of the project objects below and paste it into the array.
 *   3. Fill in your project's details (title, category, description, features, links).
 *
 * To REMOVE a project:
 *   Delete its object block from the array.
 *
 * To change whether a project appears in the prominent "Selected Work" section,
 * set `featured: true` or `featured: false`.
 */

import istycakesImg from "../assets/images/project_istycakes_1790666122598.jpg";
import anyrealsImg from "../assets/images/project_anyreals_1790666138726.jpg";
import raphaeToursImg from "../assets/images/project_raphae_tours_1790666153213.jpg";
import tedojoImg from "../assets/images/project_tedojo_karate_1790666169896.jpg";

export const projects = [
  {
    id: "Istycakes-and-surprises",
    number: "01",
    title: "IstyCakes & Surprises",
    tagline: "Artisan Bakery & Bespoke Celebration E-Commerce",
    category: "E-Commerce",
    year: "2026",
    image: istycakesImg,
    featured: true,
    description:
      "A custom, warm-toned web storefront for a boutique celebration cake studio, featuring interactive flavor selections, seasonal cake catalogs, and direct WhatsApp order orchestration.",
    role: "UI Design & Frontend Development",
    technologies: [
      "React",
      "JavaScript",
      "Responsive Design",
      "WhatsApp Ordering",
      " CSS",
    ],
    features: [
      "Interactive tiered cake builder and flavor selector",
      "One-click WhatsApp order generation with customized order briefs",
      "Dynamic seasonal catalog with dietary & allergen filter options",
      "High-performance image gallery optimized for mobile ordering",
    ],
    challenge:
      "The client needed a digital storefront that captured their bespoke artisanal craftsmanship without the high friction of a traditional, multi-step credit card checkout that deterred local celebration clients.",
    solution:
      "Engineered an intuitive visual catalog paired with an automated WhatsApp checkout pipeline that packages customer cake specifications, delivery dates, and customization notes directly into a formatted direct message.",
    liveUrl: "https://iamnumbrd0010.github.io/Istycakes/",
    githubUrl: "https://iamnumbrd0010.github.io/Istycakes/",
  },
  {
    id: "Anyreals",
    number: "02",
    title: "Anyreals",
    tagline: "Modern Architectural Property Showcase & Discovery Platform",
    category: "Real Estate",
    year: "2026",
    image: anyrealsImg,
    featured: true,
    description:
      "An editorial-grade digital platform for luxury architectural estates and contemporary residential listings with immersive photo spreads, floor plan walkthroughs, and inspection scheduling.",
    role: "Frontend Engineering & Information Architecture",
    technologies: [
      "Html",
      "JavaScript",
      " CSS",
      "Payment Authenication",
      "Database Integration",
    ],
    features: [
      "Multi-filter search by architectural style, and location",
      "Account creation for both Agent and Buyer",
      "Easy upload and verification of properties",
      "Payment Integration",
    ],
    challenge:
      "Existing real estate platforms overwhelmed buyers with chaotic card grids, clutter, and slow image loading that detracted from multi-million dollar property presentations.",
    solution:
      "Designed an editorial, high-contrast black & warm-charcoal gallery aesthetic with fluid filtering, razor-sharp responsive layouts, and zero visual clutter.",
    liveUrl: "https://iamnumbrd0010.github.io/Anyreals/index.html",
    githubUrl: "https://iamnumbrd0010.github.io/Anyreals/index.html",
  },

  {
    id: "Tedojo-executive-karate",
    number: "03",
    title: "Tedojo Executive Karate",
    tagline: "Executive Martial Arts Academy & Modern Member Portal",
    category: "Business",
    year: "2026",
    image: tedojoImg,
    featured: true,
    description:
      "A distinguished web presence for a premier executive karate and martial discipline academy, highlighting master sensei lineage, class schedules, and private corporate training tracks.",
    role: "Web Design & Frontend Development",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Schedule Grid",
      "Mobile First",
      "Payment Integration",
      "Account Creation",
      "E-Commerce shop",
    ],
    features: [
      "Weekly training timetable with belt progression",
      "Sensei instructor biography and certification showcase",
      "Session booking flow with automatic reminder triggers",
      "Curriculum overview for adult executive fitness and youth discipline",
      "Account creation and login",
      "Shop for e-commerce with payment integration",
    ],
    challenge:
      "The academy needed an authentic, respectful visual identity that resonated with busy executives seeking focus and discipline rather than a typical loud gym website.",
    solution:
      "Crafted a disciplined Japanese cedar-and-charcoal visual language with clear schedules, philosophical tenets, and a straightforward introductory consultation system.",
    liveUrl: "www.tedojo.ng",
    githubUrl: "www.tedojo.ng",
  },
  {
    id: "Raphae-tours",
    number: "04",
    title: "Raphae Tours",
    tagline: "Bespoke Travel Agency & Safari Expedition Planner",
    category: "Creative",
    year: "2025",
    image: raphaeToursImg,
    featured: false,
    description:
      "An evocative travel portal for curated destination tours and luxury safari journeys, offering day-by-day itinerary previews, packing guides, and inquiry consultation bookings.",
    role: "Full Frontend Development",
    technologies: [
      "Html",
      "JavaScript",
      "CSS3",
      "Responsive Layouts",
      "Client Inquiry Flow",
    ],
    features: [
      "Day-by-day interactive itinerary builder with expedition timelines",
      "Curated destination guides with season recommendations",
      "Custom travel inquiry quote generator",
      "Mobile-optimized media gallery highlighting wildlife photography",
    ],
    challenge:
      "Travelers often felt confused by dense PDF itineraries and disconnected booking forms when considering high-value safari expeditions.",
    solution:
      "Built an interactive, visual journey timeline allowing clients to explore accommodation previews, daily travel schedules, and safari activities on any screen size.",
    liveUrl: "https://iamnumbrd0010.github.io/Raphae_Tours_Completed-4/",
    githubUrl: "https://iamnumbrd0010.github.io/Raphae_Tours_Completed-4/",
  },
  {
    id: "BGBF",
    number: "05",
    title: "BGBF",
    tagline: "Nonprofit Organization & Community Impact Platform",
    category: "Web Development",
    year: "2026",
    //image: charityImg,
    featured: false,
    description:
      "A purpose-driven charity website designed to showcase the organization's mission, community initiatives, impact, and opportunities for people to get involved and support its cause.",
    role: "Full Frontend Development",
    technologies: [
      "React",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Interactive UI",
    ],
    features: [
      "Mission-focused homepage with clear calls to action",
      "Dedicated sections highlighting charitable initiatives and community impact",
      "Responsive layout optimized for mobile, tablet, and desktop users",
      "Clear presentation of the organization's purpose, activities, and information",
      "Accessible contact and engagement pathways for visitors and supporters",
    ],
    challenge:
      "The organization needed a professional digital presence that could communicate its mission clearly, build trust with visitors, and make it easier for people to learn about its work and get involved.",
    solution:
      "Designed and developed a responsive charity website with a clear visual hierarchy, purpose-driven content sections, prominent calls to action, and a mobile-friendly interface that makes the organization's work easy to explore.",
    liveUrl: "https://iamnumbrd0010.github.io/Charity/",
    githubUrl: "https://iamnumbrd0010.github.io/Charity/",
  },
  {
    id: "IstyCakes-Surprises",
    number: "06",
    title: "IstyCakes & Surprises",
    tagline: "Custom Cakes, Treats & Surprise Packages",
    category: "E-Commerce",
    year: "2025",
    //image: istyCakesImg,
    featured: false,
    description:
      "A mobile-first bakery ordering platform created for IstyCakes & Surprises, allowing customers to explore cakes, cookies, and surprise packages, customize their orders, and prepare orders for easy WhatsApp checkout.",
    role: "Full Frontend Development",
    technologies: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Local Storage",
      "WhatsApp Integration",
    ],
    features: [
      "Mobile-first product browsing experience for cakes, cookies, and surprise packages",
      "Interactive shopping cart with persistent cart data",
      "Custom cake options including cake writing and drawing requests",
      "Dynamic pricing for personalized cake messages",
      "Order summary generation for WhatsApp checkout",
      "Responsive product and ordering interface optimized for mobile users",
    ],
    challenge:
      "The bakery needed a simple but engaging way for customers to browse its products, customize orders, and communicate their selections without requiring a complicated checkout system.",
    solution:
      "Built a lightweight ordering experience that combines product discovery, customization, cart management, and WhatsApp-based order confirmation into one mobile-friendly flow, making it easy for customers to move from browsing to placing an order.",
    liveUrl: "https://istycakes.netlify.app/",
    githubUrl: "https://istycakes.netlify.app/",
  },
  {
    id: "Thaink",
    number: "07",
    title: "Thaink",
    tagline: "Creative Digital Experience & Brand Showcase",
    category: "Creative",
    year: "2025",
    //image: thainkImg,
    featured: false,
    description:
      "A visually focused creative website designed to present a distinctive brand identity through an engaging digital experience, combining expressive layouts, interactive elements, and responsive presentation.",
    role: "Full Frontend Development",
    technologies: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Interactive UI",
      "Animations",
    ],
    features: [
      "Distinctive visual identity and creative landing page",
      "Responsive layouts optimized across screen sizes",
      "Interactive navigation and page elements",
      "Visual content sections designed to strengthen brand presentation",
      "Smooth user experience with engaging frontend interactions",
    ],
    challenge:
      "The project needed a digital presence that felt distinctive and visually engaging rather than relying on a conventional website layout.",
    solution:
      "Created a responsive frontend experience centered around strong visual presentation, structured content, interactive elements, and a cohesive interface that allows the brand to make a memorable first impression.",
    liveUrl: "https://iamnumbrd0010.github.io/thaink/",
    githubUrl: "https://iamnumbrd0010.github.io/thaink/",
  },
  {
    id: "AeroMile",
    number: "08",
    title: "AeroMile",
    tagline: "Urban Aerial Mobility & Air Logistics Platform",
    category: "Web Development",
    year: "2025",
    //image: aeromileImg,
    featured: false,
    description:
      "A forward-looking corporate website for AeroMile, presenting its vision for urban mobility and aerial logistics in Nigeria through electric vertical takeoff and landing technology, autonomous cargo delivery, passenger mobility, and integrated airspace solutions.",
    role: "Full Frontend Development",
    technologies: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Interactive UI",
      "Modern Web Layouts",
    ],
    features: [
      "Hero section presenting AeroMile's urban mobility vision",
      "Dedicated service sections for cargo delivery and passenger mobility",
      "Presentation of sustainable eVTOL-powered transportation",
      "Airspace and vertiport integration overview",
      "About, Services, Team, Process, and Contact sections",
      "Responsive interface designed for modern digital presentation",
    ],
    challenge:
      "AeroMile needed a digital presence capable of explaining an emerging and technically complex urban mobility concept in a way that felt modern, credible, and easy for visitors to understand.",
    solution:
      "Developed a modern responsive website that translates AeroMile's aerial mobility vision into clear visual sections, highlighting autonomous logistics, passenger transportation, sustainable eVTOL technology, and integrated airspace infrastructure.",
    liveUrl: "https://iamnumbrd0010.github.io/aeromile_2/",
    githubUrl: "https://iamnumbrd0010.github.io/aeromile_2/",
  },
  {
    id: "Dupsy-Fashion-House",
    number: "09",
    title: "Dupsy Fashion House",
    tagline: "Contemporary African Fashion & Bespoke Design",
    category: "Fashion",
    year: "2025",
    // image: dupsyFashionImg,
    featured: false,
    description:
      "A stylish fashion house website created to showcase Dupsy's contemporary fashion identity, bespoke designs, collections, and creative work through a polished and visually driven digital experience.",
    role: "Full Frontend Development",
    technologies: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Interactive UI",
      "Modern Web Layouts",
    ],
    features: [
      "Fashion-focused hero section with strong visual presentation",
      "Collection and design showcase",
      "Responsive gallery for showcasing fashion pieces",
      "Brand-focused About section",
      "Clear navigation across the fashion house website",
      "Mobile-friendly layout for browsing designs on different devices",
    ],
    challenge:
      "The fashion house needed a digital presence that could communicate its creative identity while giving visitors an engaging way to discover its designs and understand the brand.",
    solution:
      "Developed a visually polished, responsive fashion website built around strong imagery, clean content organization, and an elegant user interface that puts the brand and its designs at the center of the experience.",
    liveUrl: "https://iamnumbrd0010.github.io/Dupsy_Fashion_House_4/",
    githubUrl: "https://iamnumbrd0010.github.io/Dupsy_Fashion_House_4/",
  },
];

// Available categories for interactive filtering
export const projectCategories = [
  "All",
  "Web Development",
  "Business",
  "E-Commerce",
  "Real Estate",
  "Creative",
  "Fashion",
];
