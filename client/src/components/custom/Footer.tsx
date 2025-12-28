import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-white/30 flex items-center justify-center">
                <span className="font-display font-bold text-lg">B</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight uppercase">
                Bayt Greece
              </span>
            </div>
            <p className="text-white/60 leading-relaxed font-light">
              Expert advisory for the Greece Golden Visa program. We guide you through every step of securing your European residency through strategic investment.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Program</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#overview" className="hover:text-accent transition-colors">Overview</Link></li>
              <li><Link href="#benefits" className="hover:text-accent transition-colors">Benefits</Link></li>
              <li><Link href="#process" className="hover:text-accent transition-colors">Process Timeline</Link></li>
              <li><Link href="#investments" className="hover:text-accent transition-colors">Investment Options</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>Athens, Greece</li>
              <li className="pt-2 text-white">
                <a href="tel:+201001400635" className="hover:text-accent transition-colors">
                  +20 100 140 0635
                </a>
              </li>
              <li className="text-white">
                <a href="mailto:advisory@bayt-greece.com" className="hover:text-accent transition-colors">
                  advisory@bayt-greece.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Bayt Greece. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
