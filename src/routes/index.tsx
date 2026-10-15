import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { ArrowUpRight, ArrowRight, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VideoGallery as PortfolioGallery } from '@/components/video-gallery';
import { videoProjects } from '@/data/projects';
import { CONTACT_PHONE, CONTACT_PHONE_URL, EXPERIENCE_YEARS, VIDEO_VIEWS_MILLIONS, VIDEOS_CREATED, LINKEDIN_URL } from '@/lib/portfolio';
const projects = videoProjects.map(p => ({ ...p, url: p.videoUrl }));
import portrait from '@/assets/aniket-cutout.png';

const title = 'Aniket Mograge | Senior Video Editor & Content Strategist';
const description = 'Senior video editor and content strategist based in Munich. Creative direction, planning, social media and video production. Story. Strategy. Scale.';
export const Route = createFileRoute('/')({ component: Index, head: () => ({ meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }) });
const navigation = [['Work', 'work'], ['Worked With', 'worked-with'], ['Services', 'services'], ['About', 'about'], ['Contact', 'contact']];
const skills = ['Creative Direction', 'Video Production', 'Photography Editing', 'Content Strategy', 'Social Media', 'Pre-Production', 'Video Editing', 'Motion Graphics', 'Cinematography', 'Brand Storytelling', 'Campaign Planning', 'AI-Assisted Content', 'Story.', 'Strategy.', 'Scale.'];
const clients = ['Nanded City', 'Megapolis Township', 'Amar Business Zone', 'Aditya Birla Group', 'FEV Group', 'ARL Logistics', 'Poonawalla Fincorp', 'Nora Fatehi', 'Sunidhi Chauhan'];
const collaborations = [
  ['Integrated Townships', 'Nanded City Development & Construction Company Limited, Pune; Megapolis Integrated Township, Hinjewadi, Pune'],
  ['Commercial Real Estate', 'Amar Business Zone, Baner, Pune'],
  ['Automotive & Engineering', 'FEV Group, Germany'],
  ['Logistics', 'ARL Logistics, Mumbai'],
  ['Finance', 'Poonawalla Fincorp'],
  ['Corporate & Employer Branding', 'Aditya Birla Group: employer branding and social media content'],
  ['Artists & Entertainment', 'Nora Fatehi, Sunidhi Chauhan and more'],
];
const services = [
  ['Creative Direction', "Concept, visual style and tone of voice for a brand's video content, so every piece looks and feels like the same brand."],
  ['Pre-Production & Planning', 'Briefs, scripts, shot lists, storyboards and shoot schedules, so production days run smoothly and nothing is missed in the edit.'],
  ['Social Media Management', 'Content calendars, platform-native formats, publishing and performance review across Instagram, TikTok, YouTube and LinkedIn.'],
  ['Video Production & Post', 'Shooting, editing, motion graphics, sound and delivery, from short-form social to brand films.'],
];
const process = [['Brief', 'Goals, audience, message.'], ['Plan', 'Concept, script, shot list, calendar.'], ['Produce', 'Shoot, edit, design, sound.'], ['Publish', 'Right format, right platform, right time.'], ['Review', 'Learn from the numbers, improve the next one.']];
function CircleArrow() { return <span className="circle-arrow"><ArrowUpRight size={15}/></span>; }
function ContactButton() { return <Button variant="archive" asChild><a href="#contact">Contact <CircleArrow/></a></Button>; }
function SectionHeading({ label, children }: { label: string; children: React.ReactNode }) { return <div className="section-heading"><span className="eyebrow">{label}</span><h2>{children}</h2></div>; }
function Header() {
  return <header className="site-header">
    <div className="header-strip"><a href="mailto:aniketmograge88@gmail.com"><Mail size={13}/> aniketmograge88@gmail.com</a><span>Munich, Germany</span><nav>{navigation.slice(0, 4).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><a href="mailto:aniketmograge88@gmail.com" aria-label="Email Aniket"><Mail size={15}/></a></div>
    <div className="header-main"><a className="wordmark" href="#top">ANIKET MOGRAGE<span>SENIOR VIDEO EDITOR & CONTENT STRATEGIST</span></a><nav className="main-nav"><a href="#work">Work <CircleArrow/></a><a href="#services">Services</a><a href="#about">About</a></nav><Dropdown.Root><Dropdown.Trigger asChild><Button variant="archiveLink" className="menu-trigger">Menu <Menu size={18}/></Button></Dropdown.Trigger><Dropdown.Portal><Dropdown.Content className="menu-panel" align="end" sideOffset={20}>{navigation.map(([label, id]) => <Dropdown.Item key={id} asChild><a className="menu-item" href={`#${id}`}>{label}<ArrowUpRight/></a></Dropdown.Item>)}<Dropdown.Item asChild><a className="menu-email" href="mailto:aniketmograge88@gmail.com">aniketmograge88@gmail.com</a></Dropdown.Item></Dropdown.Content></Dropdown.Portal></Dropdown.Root><div className="header-contact"><ContactButton/></div></div>
  </header>;
}
function Mosaic() {
  const tones = ['red', 'yellow', 'blue', 'cream', 'dark'];
  return <div className="mosaic" aria-hidden="true">{Array.from({ length: 5 }, (_, column) => <div className={`mosaic-column column-${column}`} key={column}><div className="mosaic-track">{[0, 1].map(copy => <div className="mosaic-group" key={copy}>{Array.from({ length: 4 }, (_, row) => { const index = (column * 3 + row) % skills.length; return <div className={`mosaic-tile tone-${tones[(column + row * 2) % 5]}`} key={row}><div className="tile-meta"><span>{index >= 12 ? 'Tagline' : 'Skill'}</span><span>{String(index + 1).padStart(2, '0')}</span></div><span className="tile-title">{skills[index]}</span><ArrowUpRight className="tile-arrow"/></div>; })}</div>)}</div></div>)}</div>;
}
function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><Header/><section className="hero" id="top"><Mosaic/><img className="hero-portrait" src={portrait} alt="Aniket Mograge wearing glasses and a suit, with arms crossed" fetchPriority="high"/><div className="hero-shade"/><div className="hero-content"><h1><span>SENIOR VIDEO EDITOR</span><span>& CONTENT STRATEGIST</span></h1><p>Senior video editor and content strategist based in Munich, with {EXPERIENCE_YEARS} years across agencies, studios and freelance clients. Currently enrolled in an <strong>M.Sc. in Strategic Marketing</strong>.</p><div className="hero-actions"><ContactButton/><Button variant="archiveLink" asChild><a href="#work">Selected work <CircleArrow/></a></Button></div></div></section>
    <section className="content-section work-section reveal" id="work"><SectionHeading label="Selected Work">Short-form, brand<br/>and promo video.</SectionHeading><PortfolioGallery/><div className="work-results"><p><strong>{VIDEO_VIEWS_MILLIONS}+ million</strong><span>Video views generated</span></p><p><strong>{VIDEOS_CREATED}+</strong><span>Videos created</span></p></div><div className="project-list">{projects.map((project, index) => <div className="project-row" key={project.name}><span className="row-number">{String(index + 1).padStart(2, '0')}</span><h3>{project.name}</h3><span className="project-category">{project.category}</span>{project.url ? <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Watch ${project.name}`}>Watch ↗</a> : <span className="project-pending">Video link pending</span>}</div>)}</div></section>
    <section className="content-section reveal" id="worked-with"><SectionHeading label="Worked With">Brands and artists<br/>I've created for.</SectionHeading><div className="client-strip">{clients.map(client => <span key={client}>{client}</span>)}</div><div className="collaboration-list">{collaborations.map(([category, names], index) => <div className="detail-row" key={category}><span className="row-number">{String(index + 1).padStart(2, '0')}</span><h3>{category}</h3><p>{names}</p></div>)}</div></section>
    <section className="content-section services-section reveal" id="services"><SectionHeading label="Services">From first idea<br/>to published post.</SectionHeading><div>{services.map(([name, text], index) => <div className="detail-row service-row" key={name}><span className="row-number">{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{text}</p></div>)}</div><div className="process-row">{process.map(([name, text], index) => <div key={name}><span className="eyebrow">{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{text}</p></div>)}</div></section>
    <section className="content-section about-section reveal" id="about"><SectionHeading label="About">Creative eye.<br/>Strategic mind.</SectionHeading><div className="about-copy"><p>I'm Aniket, a senior video editor and content strategist with {EXPERIENCE_YEARS} years of experience across agencies, studios and freelance clients. My background is in media graphics, animation and cinematography.</p><p>I'm currently enrolled in an M.Sc. in Strategic Marketing at Macromedia University Munich, combining craft with strategy.</p><p className="languages">Languages: English (fluent), German (A2, learning).</p></div></section>
    <section className="content-section contact-section reveal" id="contact"><SectionHeading label="Contact">Let's make something.</SectionHeading><a className="contact-email" href="mailto:aniketmograge88@gmail.com">aniketmograge88@gmail.com <ArrowUpRight/></a><a className="contact-phone" href={CONTACT_PHONE_URL}>{CONTACT_PHONE} <ArrowUpRight size={24}/></a><div className="social-links"><Button variant="archiveLink" asChild><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a></Button></div></section>
    <footer className="site-footer"><span>©2026 Aniket Mograge.</span><nav>{navigation.filter(([label]) => label !== 'Worked With').map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><span>Munich, Germany.</span></footer>
  </>;
}
