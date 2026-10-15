import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AUTO_ADVANCE_MS, slotOffset, videoProjects, wrapIndex, type VideoProject } from '@/data/projects';

function Cover({ project }: { project: VideoProject }) {
  return project.thumbnail
    ? <img className="frame-thumb" src={project.thumbnail} alt="" loading="lazy" draggable={false}/>
    : <span className="frame-title">{project.name}</span>;
}

const stop = (e: React.PointerEvent) => e.stopPropagation();

export function VideoGallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useRef<number | null>(null);
  const lastWheel = useRef(0);
  const move = (d: number) => setActive(v => wrapIndex(v + d));

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setInterval(() => setActive(v => wrapIndex(v + 1)), AUTO_ADVANCE_MS);
    return () => window.clearInterval(t);
  }, [paused]);

  return <div className="work-gallery" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}
    onFocusCapture={() => setPaused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}>
    <div className="gallery-stage" role="region" aria-roledescription="carousel" aria-label="Selected work" tabIndex={0}
      onKeyDown={e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); } }}
      onPointerDown={e => { setPaused(true); dragX.current = e.clientX; }}
      onPointerUp={e => { if (dragX.current !== null && Math.abs(e.clientX - dragX.current) > 40) move(e.clientX < dragX.current ? 1 : -1); dragX.current = null; }}
      onPointerCancel={() => { dragX.current = null; }}
      onWheel={e => { if (Math.abs(e.deltaX) > 20 && Date.now() - lastWheel.current > 500) { move(e.deltaX > 0 ? 1 : -1); lastWheel.current = Date.now(); } }}>
      {videoProjects.map((project, index) => {
        const offset = slotOffset(index, active);
        const visible = Math.abs(offset) <= 2;
        const url = project.videoUrl;
        return <div className={`project-frame slot-${offset} tone-${project.tone}`} key={project.name} aria-hidden={!visible} data-visible={visible}>
          <div className="project-titlebar">
            <span>{project.name}</span>
            {url
              ? <a href={url} target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1} aria-label={`Watch ${project.name}`} onPointerDown={stop} onPointerUp={stop}>Watch <ArrowUpRight size={13}/></a>
              : <span>Video link pending</span>}
          </div>
          {offset === 0 && url
            ? <Button variant="frame" asChild className="abstract-frame"><a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${project.name}`} draggable={false}><Cover project={project}/></a></Button>
            : <Button variant="frame" className="abstract-frame" tabIndex={visible ? 0 : -1} onClick={() => setActive(index)} aria-label={`Select ${project.name}`}><Cover project={project}/></Button>}
        </div>;
      })}
    </div>
    <div className="gallery-controls">
      <span className="gallery-counter" aria-live="polite">{String(active + 1).padStart(2, '0')} <span>/ {String(videoProjects.length).padStart(2, '0')}</span></span>
      <div>
        <Button variant="archiveIcon" size="icon" aria-label="Previous project" onClick={() => move(-1)}><ArrowLeft/></Button>
        <Button variant="archiveIcon" size="icon" aria-label="Next project" onClick={() => move(1)}><ArrowRight/></Button>
      </div>
    </div>
    <div className="project-tabs">{videoProjects.map((p, i) => <Button variant="archiveLink" key={p.name} aria-pressed={active === i} onClick={() => setActive(i)}>{p.name}</Button>)}</div>
  </div>;
}
