/**
 * TEAM DATA ARCHITECTURE
 * 
 * Future Editing Note:
 * Tennet is currently led by founder & lead developer Jamiu Abdulsalam.
 * As Tennet expands into a full creative digital studio, you can easily add
 * creative directors, frontend engineers, or designers here.
 * 
 * To ADD a team member:
 *   1. Place their photo in /src/assets/images/ (or import it).
 *   2. Copy an object below and paste it into the `team` array.
 *   3. Fill in name, role, bio, and social/portfolio links.
 * 
 * The website will automatically adapt from a founder spotlight into a
 * studio team grid without requiring any JSX changes!
 */

import founderPhoto from '../assets/images/tennet_founder_portrait_1790666182543.jpg';

export const team = [
  {
    id: 'jamiu-abdulsalam',
    name: 'Jamiu Abdulsalam',
    role: 'Founder & Lead Developer',
    specialty: 'Frontend Engineering & UI Systems',
    image: founderPhoto,
    bio: 'Dedicated to crafting modern, resilient websites with a focus on clean component structure, rapid performance, and distinctive visual presence.',
    isFounder: true,
    links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'abdulsalamjamiu10@gmail.com'
    }
  }
  // To add a new team member in the future, simply uncomment and edit:
  /*
  {
    id: 'collaborator-name',
    name: 'Jane Doe',
    role: 'Creative Director',
    specialty: 'Brand Identity & Visual Direction',
    image: '/path-to-photo.jpg',
    bio: 'Bridging the gap between conceptual brand storytelling and digital interfaces.',
    isFounder: false,
    links: {
      portfolio: 'https://example.com',
      linkedin: 'https://linkedin.com'
    }
  }
  */
];
