import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../components/Logo';
const links = [['#services', 'Expertise'], ['#works', 'Projects'], ['#experience', 'Experience'], ['#about', 'About']];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <header className="site-header">
    <a className="brand-link" href="#home" aria-label="Monika Choudhary, home" onClick={() => setOpen(false)}><Logo /></a>
    <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-nav" aria-label="Main navigation" className={open ? 'nav-links open' : 'nav-links'}>
      {links.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s connect <ArrowUpRight size={15} /></a>
    </nav>
  </header>;
}
