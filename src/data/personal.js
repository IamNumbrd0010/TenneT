/**
 * PERSONAL INFORMATION & STUDIO PROFILE
 * 
 * Future Editing Note:
 * To update your personal details, profile picture, contact handles,
 * or bio, edit the values below. Everything updates automatically across the website.
 */

import founderPhoto from '../assets/images/tennet_founder_portrait_1790666182543.jpg';

export const personalInfo = {
  // Brand name
  brandName: 'TENNET',
  brandTagline: 'Websites that make ideas feel real.',
  brandSubtext: 'Tennet is a creative web development practice founded to create modern websites and digital experiences for businesses, brands, and ideas.',

  // Personal details
  name: 'Jamiu Abdulsalam', // Replace with your name if desired
  role: 'Web Developer & Studio Lead',
  location: 'Available Globally',
  availability: 'Available for freelance projects & full-time roles',
  photo: founderPhoto,
  
  // Concise, authentic bio (no exaggerated claims)
  bio: "I am a web developer with a deep appreciation for clean code, intentional design, and digital experiences that leave a lasting impression. I focus on turning complex ideas into responsive, accessible, and fast web applications.",
  extendedBio: "Tennet began as my personal web development practice and is growing into an independent creative web studio. I partner directly with founders, growing businesses, and creative directors to craft digital spaces that are distinctive, functional, and technically refined.",

  // Contact details & Direct channels
  contact: {
    email: 'abdulsalamjamiu10@gmail.com', // Replace with your primary email
    whatsappNumber: '+2348000000000', // Replace with your WhatsApp number (international format)
    whatsappDisplay: '+234 (0) 800 000 0000',
    whatsappMessage: 'Hello Tennet, I would like to discuss a web project.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    instagram: 'https://instagram.com'
  },

  // Core capabilities / Technical skills
  skills: [
    { name: 'React', category: 'Core Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Core Frontend' },
    { name: 'JSX & Component Architecture', category: 'Core Frontend' },
    { name: 'HTML5 Semantic Markup', category: 'Core Frontend' },
    { name: 'CSS3 & Modern Styling', category: 'Core Frontend' },
    { name: 'Tailwind CSS', category: 'Core Frontend' },
    { name: 'Responsive Web Design', category: 'Design & UI' },
    { name: 'UI & Interaction Implementation', category: 'Design & UI' },
    { name: 'Accessibility (WCAG AA)', category: 'Design & UI' },
    { name: 'Performance Optimization', category: 'Design & UI' },
    { name: 'Git & Version Control', category: 'Tools & Workflow' },
    { name: 'GitHub Collaboration', category: 'Tools & Workflow' },
    { name: 'Firebase & Realtime Data', category: 'Tools & Workflow' },
    { name: 'Vite & Build Tooling', category: 'Tools & Workflow' },
    { name: 'Website Deployment & Hosting', category: 'Tools & Workflow' }
  ],

  // Guiding principles for "Why Tennet"
  principles: [
    {
      number: '01',
      title: 'Thoughtful Design',
      description: 'Every layout, typeface, and visual hierarchy decision is made with purpose. No arbitrary trends or cookie-cutter templates.'
    },
    {
      number: '02',
      title: 'Responsive by Default',
      description: 'Built mobile-first with meticulous care for touch interactions, fluid breakpoints, and razor-sharp desktop presentations.'
    },
    {
      number: '03',
      title: 'Built for Real People',
      description: 'Websites must be intuitive, accessible, and fast to load. The experience should feel effortless for the end user.'
    },
    {
      number: '04',
      title: 'From Idea to Launch',
      description: 'Direct collaboration from initial wireframes to production deployment, clean code handoff, and post-launch stability.'
    }
  ]
};
