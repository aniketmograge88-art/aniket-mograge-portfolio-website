import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GALLERY_INTERVAL, projects, wrapProject, projectOffset } from '@/lib/portfolio';

export function PortfolioGallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef<number | null>(null);
  const wheelTime = useRef(0);
  const move = (direction: number) => setActive(value => wrapProject(value + direction));
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive(value => wrapProject(value + 1)), GALLERY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused]);
  return <div className="work-gallery" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
    <div className="gallery-stage" role="region" aria-roledescription="carousel" aria-label="Selected work" tabIndex={0}
      onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}
      onPointerDown={event => { setPaused(true); drag.current = event.clientX; }}
      onPointerUp={event => { if (drag.current !== null && Math.abs(event.clientX - drag.current) > 40) move(event.clientX < drag.current ? 1 : -1); drag.current = null; }}
      onPointerCancel={() => { drag.current = null; }}
      onWheel={event => { if (Math.abs(event.deltaX) > 20 && Date.now() - wheelTime.current > 500) { move(event.deltaX > 0 ? 1 : -1); wheelTime.current = Date.now(); } }}>
      {projects.map((project, index) => {
        const offset = projectOffset(index, active);
        const visible = Math.abs(offset) <= 2;
        return <div className={`project-frame slot-${offset} tone-${project.tone}`} key={project.name} aria-hidden={!visible} data-visible={visible}>
          <div className="project-titlebar"><span>{project.name}</span>{project.url ? <a href={project.url} target="_blank" rel="noreferrer" tabIndex={visible ? 0 : -1} aria-label={`Watch ${project.name}`} onPointerDown={event => event.stopPropagation()} onPointerUp={event => event.stopPropagation()}>Watch <ArrowUpRight size={13}/></a> : <span>Video link pending</span>}</div>
          {(() => { const inner = project.thumbnail ? <img className="frame-thumb" src={project.thumbnail} alt="" loading="lazy" draggable={false}/> : <span className="frame-title">{project.name}</span>;
            return offset === 0 && project.url ? <Button variant="frame" asChild className="abstract-frame"><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Watch ${project.name}`} draggable={false}>{inner}</a></Button> : <Button variant="frame" className="abstract-frame" tabIndex={visible ? 0 : -1} onClick={() => setActive(index)} aria-label={`Select ${project.name}`}>{inner}</Button>; })()}
        </div>;
      })}
    </div>
    <div className="gallery-controls"><span className="gallery-counter" aria-live="polite">{String(active + 1).padStart(2, '0')} <span>/ {String(projects.length).padStart(2, '0')}</span></span><div><Button variant="archiveIcon" size="icon" aria-label="Previous project" onClick={() => move(-1)}><ArrowLeft/></Button><Button variant="archiveIcon" size="icon" aria-label="Next project" onClick={() => move(1)}><ArrowRight/></Button></div></div>
    <div className="project-tabs">{projects.map((project, index) => <Button variant="archiveLink" key={project.name} aria-pressed={active === index} onClick={() => setActive(index)}>{project.name}</Button>)}</div>
  </div>;
}