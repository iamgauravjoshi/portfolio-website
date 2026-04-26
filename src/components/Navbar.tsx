import { NavLink } from "react-router-dom";
import {
   Home,
   User,
   BookOpen,
   Mail,
   BriefcaseBusiness,
   NotebookPen,
} from "lucide-react";

const navItems = [
   { name: "home", path: "/", icon: <Home />, label: "Home" },
   { name: "about", path: "/about", icon: <User />, label: "About" },
   { name: "projects", path: "/projects", icon: <BookOpen />, label: "Projects" },
   {
      name: "experience",
      path: "/experience",
      icon: <BriefcaseBusiness />,
      label: "Experience",
   },
   { name: "blogs", path: "/blogs", icon: <NotebookPen />, label: "Blogs" },
   { name: "contact", path: "/contact", icon: <Mail />, label: "Contact" },
];

function Navbar() {
   return (
      <nav className='fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:inset-x-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:px-0'>
         <div className='flex items-center gap-3 rounded-full border border-[#2f2f2f] bg-[#111111]/95 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur md:flex-col md:gap-4 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none'>
            {navItems.map((section, index) => (
               <NavLink
                  key={index}
                  to={section.path}
                  end={section.path === "/"}
                  aria-label={section.label}
                  title={section.label}
                  className={({ isActive }) =>
                     `navbar-link flex h-11 w-11 items-center justify-center rounded-full p-3 text-white transition-all md:h-[50px] md:w-[50px] md:p-6 ${
                        isActive
                           ? "bg-[#ffb400]"
                           : "bg-[#2b2a2a] hover:bg-[#ffb400]"
                     }`
                  }>
                  <span className='text-sm'>{section.icon}</span>
                  <h2>{section.label}</h2>
               </NavLink>
            ))}
         </div>
      </nav>
   );
}

export default Navbar;
