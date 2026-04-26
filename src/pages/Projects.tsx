import { motion } from "framer-motion";
import { useState } from "react";
import PageTitle from "../components/common/PageTitle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import DynamicsProjectImage from "../assets/images/project-image-02.jpg";
import ProductProjectImage from "../assets/images/project-image.png";
import IdentityProjectImage from "../assets/images/zustand-image.png";
import VisualizationProjectImage from "../assets/images/react-three-fiber-blog.png";

type Project = {
   title: string;
   role: string;
   technologies: string[];
   summary: string;
   responsibilities: string[];
   image: string;
};

const projects: Project[] = [
   {
      title: "RCR Mining Technologies",
      role: "Development and Design",
      technologies: [
         "Microsoft Dynamics 365",
         "React",
         "TypeScript",
         "SCSS",
         "Three.js",
      ],
      summary:
         "Built an interactive Dynamics 365 Commerce experience for RCR Mining Technologies with a 3D configurator for complex mining equipment and near real-time data updates.",
      responsibilities: [
         "Developed a 3D image configurator using Three.js with HTML, CSS, React, and Microsoft Dynamics 365 integration.",
         "Customized MS Dynamics 365 commerce flows, including cart functionality and Site Builder enhancements.",
         "Created a reusable product grid with filtering, sorting, and pagination support.",
         "Implemented polling for near real-time updates and optimized render cycles, state management, and async data handling to reduce UI lag.",
         "Worked directly with the client in requirement-gathering calls to keep delivery aligned with project goals.",
      ],
      image: VisualizationProjectImage,
   },
   {
      title: "CPA Australia POC",
      role: "Development and Designing",
      technologies: ["Microsoft Dynamics 365", "React", "SCSS"],
      summary:
         "Delivered a proof of concept for a course and video lecture platform with static content, dynamic catalog sections, and commerce-ready Dynamics 365 modules.",
      responsibilities: [
         "Collaborated with the team to build a POC for selling online courses and video lectures using MS Dynamics 365.",
         "Implemented and customized the header, footer, and navigation through Site Builder with SCSS styling.",
         "Enhanced Dynamics 365 modules to support video integration for a more interactive course platform.",
         "Helped validate the feasibility and scalability of the proposed commerce experience.",
      ],
      image: DynamicsProjectImage,
   },
   {
      title: "Bremworth",
      role: "Development and Designing",
      technologies: ["Microsoft Dynamics 365", "React", "SCSS"],
      summary:
         "Contributed to a product-focused e-commerce experience for premium carpets and rugs, improving discovery and merchandising workflows.",
      responsibilities: [
         "Built front-end features for the Bremworth e-commerce website using MS Dynamics 365.",
         "Customized platform modules for better product search and richer product description experiences.",
         "Developed UI components and an improved grid with filtering, sorting, and pagination support.",
         "Supported e-commerce, CSU, and back-office workflows through tailored front-end enhancements.",
      ],
      image: ProductProjectImage,
   },
   {
      title: "Bakers & COBS",
      role: "Design (Support Role)",
      technologies: ["Microsoft Dynamics 365", "React"],
      summary:
         "Supported design and module customization work for bakery-focused e-commerce experiences built on Dynamics 365.",
      responsibilities: [
         "Customized MS Dynamics 365 modules to match project requirements.",
         "Created project-specific modules and components inside the Dynamics 365 application.",
         "Supported integration scenarios where custom modules worked alongside third-party systems connected to D365 CRM.",
      ],
      image: DynamicsProjectImage,
   },
   {
      title: "People Nest - HRMS Portal",
      role: "Frontend Development",
      technologies: ["React.js", "TypeScript", "Ant Design", "SCSS"],
      summary:
         "Built a scalable HRMS portal focused on employee lifecycle management, workflow handling, and secure role-based user experiences.",
      responsibilities: [
         "Created a scalable, component-driven architecture for employee lifecycle and workflow management.",
         "Implemented RBAC-based authentication and protected UI rendering for sensitive HR data.",
         "Built dynamic forms with validation and conditional logic for complex HR processes.",
         "Improved performance through efficient state handling, API integration, and responsive UI design across devices.",
      ],
      image: ProductProjectImage,
   },
   {
      title: "Identity and Access Management System",
      role: "Frontend Development",
      technologies: ["React", "TypeScript", "Zustand", "Tailwind", "Node.js"],
      summary:
         "Developed a secure identity platform with fine-grained access control, centralized session management, and role-aware user journeys.",
      responsibilities: [
         "Built secure authentication and RBAC-driven access management across the application.",
         "Designed centralized state management with Zustand to handle sessions, roles, and permissions efficiently.",
         "Implemented protected routes and dynamic UI rendering based on user roles and permissions.",
      ],
      image: IdentityProjectImage,
   },
];

const Projects = () => {
   const [selected, setSelected] = useState<Project | null>(null);

   useDocumentTitle("Projects - Gaurav Joshi");

   return (
      <section id='projects' className='min-h-screen pb-16'>
         <PageTitle
            mainTitle='My'
            heighlitedTitle='Projects'
            backgroundTitle='Portfolio'
         />

         <div className='mx-auto grid max-w-6xl gap-6 px-4 md:px-6 lg:grid-cols-2'>
            {projects.map((project, index) => (
               <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className='overflow-hidden rounded-lg border border-[#252525] bg-[#111111] shadow-lg'>
                  <button
                     type='button'
                     className='block w-full cursor-zoom-in overflow-hidden'
                     onClick={() => setSelected(project)}>
                     <img
                        src={project.image}
                        alt={project.title}
                        className='h-56 w-full object-cover transition duration-500 hover:scale-105'
                     />
                  </button>

                  <div className='space-y-5 p-6 text-left'>
                     <div className='space-y-2'>
                        <div className='flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-[#ffb400]'>
                           <span>{project.role}</span>
                           <span className='text-gray-500'>/</span>
                           <span>{project.technologies.length} Technologies</span>
                        </div>
                        <h3 className='text-2xl font-semibold text-white'>
                           {project.title}
                        </h3>
                        <p className='text-sm leading-6 text-gray-300'>
                           {project.summary}
                        </p>
                     </div>

                     <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((technology) => (
                           <span
                              key={technology}
                              className='rounded-full border border-[#3a3a3a] px-3 py-1 text-xs text-gray-200'>
                              {technology}
                           </span>
                        ))}
                     </div>

                     <div>
                        <h4 className='mb-3 text-sm font-semibold uppercase tracking-wide text-white'>
                           Key Contributions
                        </h4>
                        <ul className='space-y-2 text-sm leading-6 text-gray-300'>
                           {project.responsibilities.map((responsibility) => (
                              <li
                                 key={responsibility}
                                 className='flex items-start gap-3'>
                                 <span className='mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ffb400]' />
                                 <span>{responsibility}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </motion.article>
            ))}
         </div>

         {selected && (
            <div
               className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4'
               onClick={() => setSelected(null)}>
               <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className='max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg border border-[#2f2f2f] bg-[#101010]'
                  onClick={(event) => event.stopPropagation()}>
                  <img
                     src={selected.image}
                     alt={selected.title}
                     className='max-h-[60vh] w-full object-cover'
                  />
                  <div className='space-y-4 p-6'>
                     <div className='flex items-start justify-between gap-4'>
                        <div>
                           <p className='text-sm uppercase tracking-wide text-[#ffb400]'>
                              {selected.role}
                           </p>
                           <h3 className='text-2xl font-semibold text-white'>
                              {selected.title}
                           </h3>
                        </div>
                        <button
                           type='button'
                           onClick={() => setSelected(null)}
                           className='rounded-full border border-[#3a3a3a] px-3 py-1 text-sm text-gray-200 transition hover:border-[#ffb400] hover:text-[#ffb400]'>
                           Close
                        </button>
                     </div>

                     <p className='text-sm leading-6 text-gray-300'>
                        {selected.summary}
                     </p>

                     <div className='flex flex-wrap gap-2'>
                        {selected.technologies.map((technology) => (
                           <span
                              key={technology}
                              className='rounded-full border border-[#3a3a3a] px-3 py-1 text-xs text-gray-200'>
                              {technology}
                           </span>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>
         )}
      </section>
   );
};

export default Projects;
