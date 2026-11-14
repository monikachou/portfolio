import { ArrowUpRight } from 'lucide-react';
import { resumeUrl } from '../lib/content';
export default function Contact() {
  return <section id="contact" className="contact section-wrap"><div className="reveal"><span className="eyebrow">05 / LET’S CONNECT</span><h2>Good work starts<br />with a <em>conversation.</em></h2><p>Have an opportunity or a financial challenge in mind?<br />I’d be glad to hear from you.</p><a className="contact-email" href="mailto:monikachou13@gmail.com">monikachou13@gmail.com <ArrowUpRight /></a></div><div className="contact-links reveal"><a href="https://www.linkedin.com/in/monika-choudhary08/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={18} /><span className="sr-only"> (opens in a new tab)</span></a><a href={resumeUrl} download>Download resume <ArrowUpRight size={18} /></a><span>Accounting & Finance Professional</span></div></section>;
}
