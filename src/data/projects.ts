// Edit this file to change gallery projects.
// To add a project: put the picture in src/assets/ (as .png, .jpg or .webp), import it below,
// then add one line to `projectList`. The gallery reads everything from here.
import concert from '@/assets/concert-thumb.webp';
import interior from '@/assets/interior-thumb.webp';
import realEstate from '@/assets/real-estate-thumb.webp';
import vlog from '@/assets/vlog-thumb.png';
import tracking from '@/assets/tracking-thumb.webp';
import logistics from '@/assets/logistics-thumb.webp';
import automobile from '@/assets/automobile-thumb.webp';
import shortForm from '@/assets/short-form-thumb.png';
import podcast from '@/assets/podcast-thumb.png';
import creative from '@/assets/creative-thumb.webp';
import event from '@/assets/event-thumb.png';
import promo from '@/assets/promo-thumb.webp';
import employer from '@/assets/employer-thumb.webp';
import shortFormNew from '@/assets/short-form-reel-new.png';

export type Tone = 'red' | 'yellow' | 'blue' | 'cream' | 'dark';
export type VideoProject = { name: string; category: string; videoUrl: string | null; thumbnail: string | null; tone: Tone };

const projectList: VideoProject[] = [
  { name: 'Concert', category: 'Live / Concert', videoUrl: 'https://www.youtube.com/watch?v=dYD1_Y6YKo0', thumbnail: concert, tone: 'red' },
  { name: 'Interior Design', category: 'Real Estate / Interior', videoUrl: 'https://www.youtube.com/watch?v=sY7csvnJLLI', thumbnail: interior, tone: 'blue' },
  { name: 'Real Estate', category: 'Brand / Real Estate', videoUrl: 'https://www.youtube.com/watch?v=LAd0eH2JXHE', thumbnail: realEstate, tone: 'yellow' },
  { name: 'Vlog', category: 'Vlog / Storytelling', videoUrl: 'https://www.youtube.com/watch?v=TX5_u8sKaW0&t=36s', thumbnail: vlog, tone: 'red' },
  { name: 'Real Estate 3D Tracking', category: 'Motion / VFX', videoUrl: 'https://www.youtube.com/watch?v=3K4nBBTkBE0', thumbnail: tracking, tone: 'yellow' },
  { name: 'Logistics Company Corporate Video', category: 'Brand / Logistics', videoUrl: 'https://www.youtube.com/watch?v=ZnVPnenIPbk', thumbnail: logistics, tone: 'blue' },
  { name: 'Automobile Company Corporate Video', category: 'Brand / Automotive', videoUrl: 'https://www.youtube.com/watch?v=EiyCgYgQjOo', thumbnail: automobile, tone: 'cream' },
  { name: 'Short-Form Reel Edit', category: 'Social / Reels', videoUrl: 'https://youtube.com/shorts/SsvrPmDo2pQ', thumbnail: shortFormNew, tone: 'blue' },
  { name: 'Short-Form Podcast Reel Edit', category: 'Social / Podcast', videoUrl: 'https://vimeo.com/1041014343/1529b4c0ef?fl=pl&fe=vl', thumbnail: podcast, tone: 'yellow' },
  { name: 'Corporate Event', category: 'Corporate / Event', videoUrl: 'https://vimeo.com/1079087036/0350e7ebbb?fl=pl&fe=vl', thumbnail: event, tone: 'red' },
  { name: 'Promotional Video', category: 'Brand / Promo', videoUrl: 'https://youtu.be/QyB6Bg-RhIw', thumbnail: promo, tone: 'blue' },
  { name: 'Employer Branding', category: 'Corporate / Employer Branding', videoUrl: 'https://youtube.com/shorts/KVi0SxfGcaA', thumbnail: employer, tone: 'yellow' },
];

// Drops accidental duplicates (same name) so the gallery never shows a project twice.
export const videoProjects: VideoProject[] = projectList.filter((p, i, all) => all.findIndex(o => o.name === p.name) === i);

export const AUTO_ADVANCE_MS = 4500;
export const wrapIndex = (i: number) => ((i % videoProjects.length) + videoProjects.length) % videoProjects.length;
export function slotOffset(index: number, active: number) {
  const o = wrapIndex(index - active);
  return o > Math.floor(videoProjects.length / 2) ? o - videoProjects.length : o;
}
