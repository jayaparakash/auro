import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";
import img from '../../assets/icons/auroIcon.png'
 
export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-auro-brand font-semibold"
      : "text-auro-muted hover:text-auro-ink";

   

  return (
    <div className="bg-auro-bg sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="navbar px-0">
          {/* Logo */}
          <div className="navbar-start gap-0">
            <Link to="/homepage" className="flex items-center">
              <div className="h-10 w-10 rounded-2xl  grid place-items-center font-black text-auro-brand" style={{width: '61px'}}>
                {/* <AuroLogo /> */}
                <img src={img} alt="" style={{height:'46px', width:'60px', position:'relative', left:'10px'}} />
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-auro-ink"><h2>Auro</h2></div>
                <div className="text-xs text-auro -mt-0.5"><p>BUILDTECH</p></div>
              </div>
            </Link>
          </div>

          {/* Links */}
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal gap-8 px-1 text-sm">
              <li><NavLink to="/homepage" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
              <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            </ul>
          </div>

          {/* Button */}
          <div className="navbar-end">
            <PrimaryButton className="hidden md:inline-flex">
            Schedule Consultation
            </PrimaryButton>

            {/* Mobile menu */}
            <div className="dropdown dropdown-end md:hidden">
              <button className="btn btn-ghost">☰</button>
              <ul className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 border border-black/10">
                <li><NavLink to="/homepage">Home</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li className="mt-2">
                  <PrimaryButton className="w-full">Schedule Consultation</PrimaryButton>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-black/5" />
      </div>
    </div>
  );
}
