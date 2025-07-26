import { motion } from "framer-motion";
import ZustandImage from "../assets/images/zustand-image.png";
import ReactThreeFiberImage from "../assets/images/react-three-fiber-blog.png";
import TailwindCSSImage from "../assets/images/tailwind-css-blog.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageTitle from "../components/common/PageTitle";

const blogs = [
   {
      title: "Mastering Zustand for State Management",
      description:
         "A deep dive into Zustand, the lightweight and scalable state manager for React.",
      tags: ["React", "Zustand", "State Management"],
      image: ZustandImage,
      link: "https://medium.com/@youruser/zustand-state-management",
   },
   {
      title: "GLTF Rendering in React Three Fiber",
      description:
         "Learn how to load and animate .gltf models using R3F and Drei with TypeScript.",
      tags: ["Three.js", "React", "GLTF"],
      image: ReactThreeFiberImage,
      link: "https://dev.to/youruser/gltf-react-three-fiber",
   },
   {
      title: "Building Modern UI with Tailwind CSS + Shadcn",
      description:
         "Speed up your UI development with utility-first styling and UI components.",
      tags: ["Tailwind", "Shadcn", "UI Design"],
      image: TailwindCSSImage,
      link: "https://blog.example.com/tailwind-shadcn",
   },
   // Add more blog items here
];

const Blogs = () => {
   useDocumentTitle("Blogs - Gaurav Joshi");

   return (
      <section id='blogs' className='min-h-screen'>
         <PageTitle
            mainTitle='My'
            heighlitedTitle='Blogs'
            backgroundTitle='Writings'
         />

         <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {blogs.map((blog, index) => (
                  <motion.a
                     key={index}
                     href={blog.link}
                     target='_blank'
                     rel='noopener noreferrer'
                     whileHover={{ scale: 1.03 }}
                     className='rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition'>
                     <img
                        src={blog.image}
                        alt={blog.title}
                        className='h-48 w-full object-cover'
                     />

                     <div className='p-4'>
                        <h3 className='text-xl font-semibold text-gray-900'>
                           {blog.title}
                        </h3>
                        <p className='text-sm text-gray-600 mt-2'>
                           {blog.description}
                        </p>
                        <div className='mt-3 flex flex-wrap gap-2'>
                           {blog.tags.map((tag, idx) => (
                              <span
                                 key={idx}
                                 className='bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded'>
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  </motion.a>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Blogs;
