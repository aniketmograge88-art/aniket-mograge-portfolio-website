import { describe, expect, it } from 'vitest';
import { CONTACT_PHONE, CONTACT_PHONE_URL, EXPERIENCE_YEARS, VIDEO_VIEWS_MILLIONS, VIDEOS_CREATED, LINKEDIN_URL, GALLERY_INTERVAL, MOSAIC_DURATION, projects, projectOffset, wrapProject } from '@/lib/portfolio';
describe('Portfolio requirements', () => {
  it('uses four years of experience', () => { expect(EXPERIENCE_YEARS).toBe(4); });
  it('records 900 million video views', () => { expect(VIDEO_VIEWS_MILLIONS).toBe(900); });
  it('records 1700 created videos', () => { expect(VIDEOS_CREATED).toBe(1700); });
  it('links to the supplied LinkedIn profile', () => { expect(LINKEDIN_URL).toBe('https://www.linkedin.com/in/aniketmograge'); });
  it('advances the gallery every 4.5 seconds', () => { expect(GALLERY_INTERVAL).toBe(4500); });
  it('uses a 14.6 second mosaic loop', () => { expect(MOSAIC_DURATION).toBe(14.6); });
  it('retains the existing reel and adds two separate work entries', () => { expect(projects).toHaveLength(13); expect(new Set(projects.map(project => project.name)).size).toBe(13); });
  it('matches the podcast to the supplied podcast video', () => { expect(projects.find(project => project.name === 'Short-Form Podcast Reel Edit')?.url).toBe('https://vimeo.com/1041014343/1529b4c0ef?fl=pl&fe=vl'); });
  it('matches the short-form reel to the reel video', () => { expect(projects[7]?.url).toBe('https://vimeo.com/1084204790/f2c8227167'); });
  const suppliedLinks = [
    ['Concert', 'https://www.youtube.com/watch?v=dYD1_Y6YKo0'],
    ['Interior Design', 'https://www.youtube.com/watch?v=sY7csvnJLLI'],
    ['Real Estate', 'https://www.youtube.com/watch?v=LAd0eH2JXHE'],
    ['Vlog', 'https://www.youtube.com/watch?v=TX5_u8sKaW0&t=36s'],
    ['Real Estate 3D Tracking', 'https://www.youtube.com/watch?v=3K4nBBTkBE0'],
    ['Logistics Company Corporate Video', 'https://www.youtube.com/watch?v=ZnVPnenIPbk'],
    ['Automobile Company Corporate Video', 'https://www.youtube.com/watch?v=EiyCgYgQjOo'],
    ['Creative Reel Edit', 'https://youtube.com/shorts/SsvrPmDo2pQ'],
    ['Corporate Event', 'https://vimeo.com/1079087036/0350e7ebbb?fl=pl&fe=vl'],
    ['Promotional Video', 'https://aniketmograge.godaddysites.com/'],
    ['Employer Branding', 'https://youtube.com/shorts/KVi0SxfGcaA'],
  ];
  it.each(suppliedLinks)('matches %s to its supplied destination', (name, url) => { expect(projects.find(project => project.name === name)?.url).toBe(url); });
  it('replaces the wedding entry with the vlog', () => { expect(projects.some(project => project.name === 'Wedding Film')).toBe(false); expect(projects[3]?.name).toBe('Vlog'); });
  it('uses the supplied contact telephone', () => { expect(CONTACT_PHONE).toBe('+49 172 6656944'); expect(CONTACT_PHONE_URL).toBe('tel:+491726656944'); });
  it('wraps all thirteen entries in both directions', () => { expect(wrapProject(-1)).toBe(12); expect(wrapProject(13)).toBe(0); expect(projectOffset(12,0)).toBe(-1); expect(projectOffset(0,12)).toBe(1); });
});
