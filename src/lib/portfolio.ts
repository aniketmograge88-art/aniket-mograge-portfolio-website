import concert from '@/assets/concert-thumb.webp';
import interior from '@/assets/interior-thumb.webp';
import realEstate from '@/assets/real-estate-thumb.webp';
import tracking from '@/assets/tracking-thumb.webp';
import logistics from '@/assets/logistics-thumb.webp';
import automobile from '@/assets/automobile-thumb.webp';
import podcast from '@/assets/podcast-thumb.png';
import creative from '@/assets/creative-thumb.webp';
import promo from '@/assets/promo-thumb.webp';
import employer from '@/assets/employer-thumb.webp';
import shortForm from '@/assets/short-form-thumb.png';
import vlog from '@/assets/vlog-thumb.png';
import event from '@/assets/event-thumb.png';

export const GALLERY_INTERVAL = 4500;
export const MOSAIC_DURATION = 14.6;
export const EXPERIENCE_YEARS = 4;
export const VIDEO_VIEWS_MILLIONS = 900;
export const VIDEOS_CREATED = 1700;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/aniketmograge';
export const CONTACT_PHONE = '+49 172 6656944';
export const CONTACT_PHONE_URL = 'tel:+491726656944';
type Project = { name: string; category: string; url: string | null; thumbnail: string | null; tone: string };
export const projects: Project[] = [
  { name: 'Concert', category: 'Live / Concert', url: 'https://www.youtube.com/watch?v=dYD1_Y6YKo0', thumbnail: concert, tone: 'red' },
  { name: 'Interior Design', category: 'Real Estate / Interior', url: 'https://www.youtube.com/watch?v=sY7csvnJLLI', thumbnail: interior, tone: 'blue' },
  { name: 'Real Estate', category: 'Brand / Real Estate', url: 'https://www.youtube.com/watch?v=LAd0eH2JXHE', thumbnail: realEstate, tone: 'yellow' },
  { name: 'Vlog', category: 'Vlog / Storytelling', url: 'https://www.youtube.com/watch?v=TX5_u8sKaW0&t=36s', thumbnail: vlog, tone: 'red' },
  { name: 'Real Estate 3D Tracking', category: 'Motion / VFX', url: 'https://www.youtube.com/watch?v=3K4nBBTkBE0', thumbnail: tracking, tone: 'yellow' },
  { name: 'Logistics Company Corporate Video', category: 'Brand / Logistics', url: 'https://www.youtube.com/watch?v=ZnVPnenIPbk', thumbnail: logistics, tone: 'blue' },
  { name: 'Automobile Company Corporate Video', category: 'Brand / Automotive', url: 'https://www.youtube.com/watch?v=EiyCgYgQjOo', thumbnail: automobile, tone: 'cream' },
  { name: 'Short-Form Reel Edit', category: 'Social / Reels', url: 'https://vimeo.com/1084204790/f2c8227167', thumbnail: shortForm, tone: 'blue' },
  { name: 'Short-Form Podcast Reel Edit', category: 'Social / Podcast', url: 'https://vimeo.com/1041014343/1529b4c0ef?fl=pl&fe=vl', thumbnail: podcast, tone: 'yellow' },
  { name: 'Creative Reel Edit', category: 'AI-assisted / Short-form', url: 'https://youtube.com/shorts/SsvrPmDo2pQ', thumbnail: creative, tone: 'dark' },
  { name: 'Corporate Event', category: 'Corporate / Event', url: 'https://vimeo.com/1079087036/0350e7ebbb?fl=pl&fe=vl', thumbnail: event, tone: 'red' },
  { name: 'Promotional Video', category: 'Brand / Promo', url: 'https://aniketmograge.godaddysites.com/', thumbnail: promo, tone: 'blue' },
  { name: 'Employer Branding', category: 'Corporate / Employer Branding', url: 'https://youtube.com/shorts/KVi0SxfGcaA', thumbnail: employer, tone: 'yellow' },
];
export function wrapProject(index: number) { return ((index % projects.length) + projects.length) % projects.length; }
export function projectOffset(index: number, active: number) {
  const offset = wrapProject(index - active);
  return offset > Math.floor(projects.length / 2) ? offset - projects.length : offset;
}
