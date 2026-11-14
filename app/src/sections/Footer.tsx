import { ArrowUp } from 'lucide-react';
import Logo from '../components/Logo';
export default function Footer() {
  return <footer className="footer"><a href="#home" className="footer-brand" aria-label="Monika Choudhary, back to home"><Logo /><span>Monika Choudhary<small>ACCOUNTING &amp; FINANCE</small></span></a><span>© {new Date().getFullYear()} Monika Choudhary</span><a href="#home">Back to top <ArrowUp size={16} /></a></footer>;
}
