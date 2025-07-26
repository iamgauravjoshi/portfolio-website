import { motion } from "framer-motion";
import { useState } from "react";
import ProjectImage from "../assets/images/project-image.png";
import ProjectImage02 from "../assets/images/project-image-02.jpg";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageTitle from "../components/common/PageTitle";

const projects = [
   {
      title: "Bakers Delight",
      description: "3D model rendering, polling, and performance optimization.",
      tags: ["React", "Three.js", "SCSS"],
      image: ProjectImage,
      github: "https://github.com/youruser/bakers",
      live: "https://bakers.example.com",
   },
   {
      title: "RCR Mining",
      description: "Hotspot config with GLTF in Microsoft Dynamics 365.",
      tags: ["MSDyn365", "React", "Three.js"],
      image: ProjectImage02,
      github: "https://github.com/youruser/rcr-mining",
      live: "https://rcr.example.com",
   },
   {
      title: "Livadi",
      description: "Real Estate platform with CMS integration",
      tags: ["React", "REST API", "SCSS"],
      image: ProjectImage,
      github: "https://github.com/youruser/bakers",
      live: "https://bakers.example.com",
   },
   // Add more projects here...
];

const Projects = () => {
   const [selected, setSelected] = useState<string | null>(null);
   useDocumentTitle("Projects - Gaurav Joshi");

   return (
      <section id='projects' className='min-h-screen'>
         <PageTitle
            mainTitle='My'
            heighlitedTitle='Projects'
            backgroundTitle='Portfolio'
         />

         <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {projects.map((project, index) => (
                  <motion.div
                     key={index}
                     className='group relative rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition'
                     whileHover={{ scale: 1.03 }}
                     transition={{ type: "spring", stiffness: 300 }}>
                     <img
                        src={project.image}
                        alt={project.title}
                        className='h-48 w-full object-cover cursor-pointer group-hover:scale-105 transition'
                        onClick={() => setSelected(project.image)}
                     />

                     <div className='p-4'>
                        <h3 className='text-xl font-semibold text-gray-900'>
                           {project.title}
                        </h3>
                        <p className='text-sm text-gray-600 mt-2'>
                           {project.description}
                        </p>
                        <div className='mt-3 flex flex-wrap gap-2'>
                           {project.tags.map((tag, idx) => (
                              <span
                                 key={idx}
                                 className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100'>
                        <a
                           href={project.github}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded text-sm'>
                           GitHub
                        </a>
                        <a
                           href={project.live}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm'>
                           Live Site
                        </a>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Lightbox modal */}
            {selected && (
               <div
                  className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center'
                  onClick={() => setSelected(null)}>
                  <motion.img
                     src={selected}
                     alt='preview'
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.8, opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className='max-w-3xl max-h-[80vh] rounded shadow-lg cursor-pointer'
                  />
               </div>
            )}
         </div>
      </section>
   );
};

export default Projects;
