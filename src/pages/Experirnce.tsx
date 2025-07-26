import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageTitle from "../components/common/PageTitle";

const timelineData = [
   {
      type: "experience",
      date: "FEB 2023-Present",
      title: "SOFTWARE DEVELOPER",
      company: "OKRUTI IT CONSULTING Pvt. Ltd.",
      description: "Software Developer building interactive web apps using React, TypeScript, SCSS, and Three.js, with experience in 3D model integration and MS Dynamics 365 customizations.",
   },
   {
      type: "education",
      date: "2018-2022",
      title: "BACHELOR OF TECHNOLOGY",
      company: "7.67 CGPA",
      description: "University Institute of Engineering anf Technology, Kurukshetra",
   },
   {
      type: "education",
      date: "2018",
      title: "HIGHER SECONDARY",
      company: "88.4%",
      description: "Udairaj Hindu Inter College, Uttarakhand",
   },
   {
      type: "education",
      date: "2016",
      title: "SECONDARY",
      company: "84.4%",
      description: "Kavita Modern Public High School, Uttarakhand",
   },
];

function Experience() {
   useDocumentTitle("Experience - Gaurav Joshi");

   return (
      <section id='experience-education' className='min-h-screen text-white'>
         <PageTitle
            mainTitle='Experience &'
            heighlitedTitle='Education'
            backgroundTitle='My Experience'
         />

         <div className='grid md:grid-cols-2 gap-10 px-4 md:px-20'>
            {timelineData.map((item, i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className='relative border-l-2 border-gray-700 pl-10'>
                  <div className='absolute -left-[20px] top-0'>
                     <div className='bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center'>
                        {item.type === "experience" ? (
                           <Briefcase size={20} />
                        ) : (
                           <GraduationCap size={20} />
                        )}
                     </div>
                  </div>

                  <span className='text-sm bg-gray-800 px-3 py-1 rounded-full inline-block mb-2'>
                     {item.date}
                  </span>

                  <h3 className='text-lg md:text-xl font-semibold'>
                     {item.title}{" "}
                     <span className='text-gray-400 font-normal'>
                        — {item.company}
                     </span>
                  </h3>
                  <p className='text-sm text-gray-300 mt-1 leading-relaxed'>
                     {item.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </section>
   );
}

export default Experience;
