import logo from '../assets/logo.jpeg';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0e27] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="EmailQ Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              The AI-powered email orchestration platform for modern teams. Reclaim your focus and let AI handle the noise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70">
                <XIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-white/70" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5 text-white/70" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources & Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/docs" className="hover:text-white transition-colors">Documents</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold mb-6">Get in touch</h4>
            <div className="flex flex-col gap-10">
              <div>
                <h5 className="text-xs font-bold text-[#6366f1] uppercase tracking-[0.2em] mb-4">USA Office</h5>
                <div className="text-sm text-white/50 space-y-1">
                  <p className="font-semibold text-white/80 mb-2">Tekisho Infotech Inc.</p>
                  <p>5005 W Royal Ln, Suite 288,</p>
                  <p>Irving, TX. 75063</p>
                </div>
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#6366f1] uppercase tracking-[0.2em] mb-4">India Office</h5>
                <div className="text-sm text-white/50 space-y-1">
                  <p className="font-semibold text-white/80 mb-2">Tekisho Infotech Pvt. Ltd.</p>
                  <p>505 A, 5th Floor, Techno 1,</p>
                  <p>Gachibowli Road, Raidurg,</p>
                  <p>Hyderabad, Telangana - 500032</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <div className="text-sm text-white/50 space-y-4">
              <div className="space-y-2">
                <p className="text-white/30 text-[10px] uppercase font-bold tracking-wider">Phone</p>
                <p className="text-white/70">+91 90594 43516</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/30 text-[10px] uppercase font-bold tracking-wider">Email</p>
                <a href="mailto:contact@tekisho.ai" className="text-[#6366f1] hover:text-[#7c3aed] transition-colors block">contact@tekisho.ai</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/30">© 2026 EmailQ Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
