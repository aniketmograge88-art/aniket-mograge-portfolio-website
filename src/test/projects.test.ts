import { describe, expect, it } from 'vitest';
import { videoProjects, slotOffset } from '@/data/projects';

describe('video projects', () => {
  it('has 13 unique projects', () => {
    expect(videoProjects).toHaveLength(13);
    expect(new Set(videoProjects.map(p => p.name)).size).toBe(13);
  });
  it('every project has a thumbnail and link', () => {
    for (const p of videoProjects) { expect(p.thumbnail).toMatch(/^\/__l5e\/assets-v1\//); expect(p.videoUrl).toMatch(/^https:\/\//); }
  });
  it('Concert opens its YouTube video', () => {
    expect(videoProjects.find(p => p.name === 'Concert')?.videoUrl).toBe('https://www.youtube.com/watch?v=dYD1_Y6YKo0');
  });
  it('wraps offsets', () => { expect(slotOffset(12, 0)).toBe(-1); });
});
