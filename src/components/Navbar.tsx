import { useLocation } from "react-router-dom";
import { Home, User, BookOpen, Mail, BriefcaseBusiness, NotebookPen } from "lucide-react";

const navItems = [
   { name: "home", icon: <Home />, label: "Home" },
   { name: "about", icon: <User />, label: "About" },
   { name: "projects", icon: <BookOpen />, label: "Projects" },
   { name: "experience", icon: <BriefcaseBusiness />, label: "Experience" },
   { name: "blogs", icon: <NotebookPen />, label: "Blogs" },
   { name: "contact", icon: <Mail />, label: "Contact" },
];

function Navbar() {
  const location = useLocation();

  const selectedPage = location.pathname.replace("/", "");

   return (
      <nav className='fixed top-1/2 right-8 -translate-y-1/2 flex flex-col gap-4 z-50'>
         {navItems.map((section, index) => (
               <a
                  key={index}
                  href={`/${section.name}`}
                  className={`navbar-link w-10 h-10 text-white flex items-center justify-center p-6 transition-all ${
                     selectedPage === section.name
                        ? "bg-[#ffb400]"
                        : "bg-[#2b2a2a] hover:bg-[#ffb400]"
                  }`}>
                  <span className='capitalize text-sm'>{section.icon}</span>
                  <h2>{section.name}</h2>
               </a>
            )
         )}
      </nav>
   );
}

export default Navbar;
