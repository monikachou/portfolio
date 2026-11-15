import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { resumeUrl } from '../lib/content';

const achievements = [
  ['40–50%', 'Less manual close preparation', 'Excel reconciliation templates'],
  ['300+', 'Aging AR items resolved', 'Transaction-level investigation'],
  ['4', 'US & Canadian entities', 'Month-end close support'],
  ['20+', 'Accounts supported', 'Journal entries & reconciliations'],
];

export default function Hero() {
  return <>
    <section id="home" className="hero">
      <div className="hero-top"><span className="eyebrow">MONIKA CHOUDHARY / ACCOUNTING & FINANCE</span><span className="hero-edition">A CLEARER VIEW OF THE NUMBERS.</span></div>
      <div className="hero-composition">
        <h1>Monika<br /><em>Choudhary<span>.</span></em></h1>
        <div className="hero-positioning">
          <span className="editorial-rule" />
          <h2>Accounting with precision.<br /><em>Finance with perspective.</em></h2>
          <p>I’m Monika, a finance and accounting professional who brings structure to complex financial information and turns detailed analysis into clearer business decisions.</p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button secondary" href={resumeUrl} download>Download resume <Download size={16} /></a>
          </div>
          <a className="inline-link hero-contact" href="#contact">Let’s start a conversation <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="hero-bottom"><span>ACCOUNTING OWNERSHIP / ANALYTICAL THINKING / BETTER PROCESSES</span><a href="#impact">THE WORK, IN CONTEXT <ArrowDown size={16} /></a></div>
    </section>
    <section id="impact" className="impact section-wrap reveal" aria-labelledby="impact-title">
      <div className="impact-heading"><h2 id="impact-title">A difference in the details.</h2><p>Selected achievements · Markem-Imaje · June 2025 – May 2026</p></div>
      <div className="impact-numbers">{achievements.map(([value, title, context]) => <div className="metric" key={value}><strong>{value}</strong><h3>{title}</h3><p>{context}</p></div>)}</div>
    </section>
  </>;
}
