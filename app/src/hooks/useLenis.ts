import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | undefined;
    let frame = 0;

    const stop = () => {
      window.cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = undefined;
      delete window.__lenis;
    };
    const syncMotion = () => {
      stop();
      if (preference.matches) return;
      lenis = new Lenis({
        duration: 1.15,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.05,
      });
      window.__lenis = lenis;
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = window.requestAnimationFrame(raf);
      };
      frame = window.requestAnimationFrame(raf);
    };

    syncMotion();
    preference.addEventListener('change', syncMotion);
    return () => {
      preference.removeEventListener('change', syncMotion);
      stop();
    };
  }, []);
}
