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

import istycakesImg from '../assets/images/project_istycakes_1790666122598.jpg';
import anyrealsImg from '../assets/images/project_anyreals_1790666138726.jpg';
import raphaeToursImg from '../assets/images/project_raphae_tours_1790666153213.jpg';
import tedojoImg from '../assets/images/project_tedojo_karate_1790666169896.jpg';

export const projects = [
  {
    id: 'istycakes-and-surprises',
    number: '01',
    title: 'IstyCakes & Surprises',
    tagline: 'Artisan Bakery & Bespoke Celebration E-Commerce',
    category: 'E-Commerce',
    year: '2024',
    image: istycakesImg,
    featured: true,
    description: 'A custom, warm-toned web storefront for a boutique celebration cake studio, featuring interactive flavor selections, seasonal cake catalogs, and direct WhatsApp order orchestration.',
    role: 'UI Design & Frontend Development',
    technologies: ['React', 'JavaScript', 'Responsive Design', 'WhatsApp Ordering', 'Tailwind CSS'],
    features: [
      'Interactive tiered cake builder and flavor selector',
      'One-click WhatsApp order generation with customized order briefs',
      'Dynamic seasonal catalog with dietary & allergen filter options',
      'High-performance image gallery optimized for mobile ordering'
    ],
    challenge: 'The client needed a digital storefront that captured their bespoke artisanal craftsmanship without the high friction of a traditional, multi-step credit card checkout that deterred local celebration clients.',
    solution: 'Engineered an intuitive visual catalog paired with an automated WhatsApp checkout pipeline that packages customer cake specifications, delivery dates, and customization notes directly into a formatted direct message.',
    liveUrl: 'https://istycakes.example.com',
    githubUrl: 'https://github.com/tennet-studio/istycakes-storefront'
  },
  {
    id: 'anyreals',
    number: '02',
    title: 'Anyreals',
    tagline: 'Modern Architectural Property Showcase & Discovery Platform',
    category: 'Real Estate',
    year: '2024',
    image: anyrealsImg,
    featured: true,
    description: 'An editorial-grade digital platform for luxury architectural estates and contemporary residential listings with immersive photo spreads, floor plan walkthroughs, and inspection scheduling.',
    role: 'Frontend Engineering & Information Architecture',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Map Integration', 'Interactive UI'],
    features: [
      'Multi-filter search by architectural style, square footage, and location',
      'Interactive floor plan viewer with hotspot room dimensions',
      'Direct private viewing schedule request with calendar integration',
      'Editorial magazine layout for featured residential showcases'
    ],
    challenge: 'Existing real estate platforms overwhelmed buyers with chaotic card grids, clutter, and slow image loading that detracted from multi-million dollar property presentations.',
    solution: 'Designed an editorial, high-contrast black & warm-charcoal gallery aesthetic with fluid filtering, razor-sharp responsive layouts, and zero visual clutter.',
    liveUrl: 'https://anyreals.example.com',
    githubUrl: 'https://github.com/tennet-studio/anyreals-estate'
  },
  {
    id: 'raphae-tours',
    number: '03',
    title: 'Raphae Tours',
    tagline: 'Bespoke Travel Agency & Safari Expedition Planner',
    category: 'Creative',
    year: '2024',
    image: raphaeToursImg,
    featured: true,
    description: 'An evocative travel portal for curated destination tours and luxury safari journeys, offering day-by-day itinerary previews, packing guides, and inquiry consultation bookings.',
    role: 'Full Frontend Development',
    technologies: ['React', 'JavaScript', 'CSS3', 'Responsive Layouts', 'Client Inquiry Flow'],
    features: [
      'Day-by-day interactive itinerary builder with expedition timelines',
      'Curated destination guides with season recommendations',
      'Custom travel inquiry quote generator',
      'Mobile-optimized media gallery highlighting wildlife photography'
    ],
    challenge: 'Travelers often felt confused by dense PDF itineraries and disconnected booking forms when considering high-value safari expeditions.',
    solution: 'Built an interactive, visual journey timeline allowing clients to explore accommodation previews, daily travel schedules, and safari activities on any screen size.',
    liveUrl: 'https://raphaetours.example.com',
    githubUrl: 'https://github.com/tennet-studio/raphae-tours'
  },
  {
    id: 'tedojo-executive-karate',
    number: '04',
    title: 'Tedojo Executive Karate',
    tagline: 'Executive Martial Arts Academy & Modern Member Portal',
    category: 'Business',
    year: '2024',
    image: tedojoImg,
    featured: true,
    description: 'A distinguished web presence for a premier executive karate and martial discipline academy, highlighting master sensei lineage, class schedules, and private corporate training tracks.',
    role: 'Web Design & Frontend Development',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Schedule Grid', 'Mobile First'],
    features: [
      'Weekly training timetable with belt progression filters',
      'Sensei instructor biography and certification showcase',
      'Trial session booking flow with automatic reminder triggers',
      'Curriculum overview for adult executive fitness and youth discipline'
    ],
    challenge: 'The academy needed an authentic, respectful visual identity that resonated with busy executives seeking focus and discipline rather than a typical loud gym website.',
    solution: 'Crafted a disciplined Japanese cedar-and-charcoal visual language with clear schedules, philosophical tenets, and a straightforward introductory consultation system.',
    liveUrl: 'https://tedojokarate.example.com',
    githubUrl: 'https://github.com/tennet-studio/tedojo-karate'
  }
];

// Available categories for interactive filtering
export const projectCategories = [
  'All',
  'Web Development',
  'Business',
  'E-Commerce',
  'Real Estate',
  'Creative'
];
