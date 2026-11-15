import { useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Works from './sections/Works';
import Experience from './sections/Experience';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';
import { useLenis } from './hooks/useLenis';
import { scrollToSelector } from './lib/scroll';

export default function App() {
  useLenis();
  useEffect(() => {
    // Keep native link semantics while letting Lenis own the scroll animation.
    const navigate = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      const hash = link?.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      event.preventDefault();
      if (window.location.hash !== hash) window.history.pushState(null, '', hash);
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
      scrollToSelector(hash, window.innerWidth <= 760 ? 94 : 104);
    };
    const restore = () => scrollToSelector(window.location.hash || '#home', window.innerWidth <= 760 ? 94 : 104);
    document.addEventListener('click', navigate);
    window.addEventListener('popstate', restore);
    return () => {
      document.removeEventListener('click', navigate);
      window.removeEventListener('popstate', restore);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <ScrollProgress /><Navigation />
    <main id="main"><Hero /><Services /><Experience /><Works /><About /><Contact /></main>
    <Footer />
  </>;
}
