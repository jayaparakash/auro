import Container from "./Container.jsx";
import FooterJoinBand from "../ui/FooterJoinBand.jsx";
import img from '../../assets/icons/auroIcon.png'
function SocialBtn({ children, label }) {
  return (
    <button
      className="btn btn-ghost btn-sm w-10 h-10 rounded-xl bg-base-200/60 hover:bg-base-200"
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-200">
      <Container className="py-10">
        {/* Top band */}
        <FooterJoinBand />

        {/* Main footer grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10  grid place-items-center">
       
                <img src={img} alt="" style={{height:'46px', width:'60px', position:'relative', left:'15px'}} />

        
              </div>
             <b> AURO</b>
            </div>

            <p className="mt-4 text-base-content/70 leading-relaxed">
              Building excellence through precision craftsmanship and innovative construction
              solutions. Transforming visions into lasting structures since 1995.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <SocialBtn label="Facebook">f</SocialBtn>
              <SocialBtn label="Twitter">𝕏</SocialBtn>
              <SocialBtn label="Instagram">⌁</SocialBtn>
              <SocialBtn label="LinkedIn">in</SocialBtn>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-base-content">Services</p>
            <ul className="mt-4 space-y-2 text-base-content/70">
              <li><a className="hover:text-base-content" href="#">Residential Construction</a></li>
              <li><a className="hover:text-base-content" href="#">Commercial Projects</a></li>
              <li><a className="hover:text-base-content" href="#">Renovations & Remodeling</a></li>
              <li><a className="hover:text-base-content" href="#">Project Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-semibold text-base-content">Company</p>
            <ul className="mt-4 space-y-2 text-base-content/70">
              <li><a className="hover:text-base-content" href="#">About Us</a></li>
              <li><a className="hover:text-base-content" href="#">Our Projects</a></li>
              <li><a className="hover:text-base-content" href="#">Contact</a></li>
              <li><a className="hover:text-base-content" href="#">Trust & Safety</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-semibold text-base-content">Contact Info</p>
            <ul className="mt-4 space-y-3 text-base-content/70">
              <li className="flex gap-3">
                <span>📍</span>
                <span>123 Construction Ave<br />Building City, BC 12345</span>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <span>✉️</span>
                <span>info@auro.com</span>
              </li>
              <li className="flex gap-3">
                <span>🕘</span>
                <span>Mon-Fri: 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-base-200 text-sm text-base-content/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Auro Construction. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-base-content" href="#">Privacy</a>
            <a className="hover:text-base-content" href="#">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
