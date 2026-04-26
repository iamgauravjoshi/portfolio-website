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
      <nav className='fixed top-1/2 right-8 -translate-y-1/2 flex flex-col gap-4 z-50'>
         {navItems.map((section, index) => (
               <NavLink
                  key={index}
                  to={section.path}
                  end={section.path === "/"}
                  className={({ isActive }) =>
                     `navbar-link w-10 h-10 text-white flex items-center justify-center p-6 transition-all ${
                        isActive
                           ? "bg-[#ffb400]"
                           : "bg-[#2b2a2a] hover:bg-[#ffb400]"
                     }`
                  }>
                  <span className='capitalize text-sm'>{section.icon}</span>
                  <h2>{section.name}</h2>
               </NavLink>
            )
         )}
      </nav>
   );
}

export default Navbar;
