import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import PageTitle from "../components/common/PageTitle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const timelineData = [
  {
    type: "experience",
    date: "FEB 2023 - Present",
    title: "SOFTWARE DEVELOPER",
    company: "OKRUTI IT CONSULTING Pvt. Ltd.",
    description:
      "Software Developer building interactive web apps using React, TypeScript, SCSS, and Three.js, with experience in 3D model integration and MS Dynamics 365 customizations.",
  },
  {
    type: "education",
    date: "2018 - 2022",
    title: "BACHELOR OF TECHNOLOGY",
    company: "7.67 CGPA",
    description:
      "University Institute of Engineering and Technology, Kurukshetra",
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
    <section
      id="experience-education"
      className="min-h-screen px-8 pb-28 text-white sm:px-6 md:px-10 lg:pb-16"
    >
      <PageTitle
        mainTitle="Experience &"
        heighlitedTitle="Education"
        backgroundTitle="My Experience"
      />

      <div className="mx-auto grid max-w-6xl gap-8 xl:grid-cols-2 xl:gap-10">
        {timelineData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="relative border-l-2 border-gray-700 pl-8 sm:pl-10"
          >
            <div className="absolute -left-[18px] top-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 text-white sm:h-10 sm:w-10">
                {item.type === "experience" ? (
                  <Briefcase size={18} />
                ) : (
                  <GraduationCap size={18} />
                )}
              </div>
            </div>

            <span className="mb-3 inline-block rounded-full bg-gray-800 px-3 py-1 text-xs sm:text-sm">
              {item.date}
            </span>

            <h3 className="text-base font-semibold sm:text-lg lg:text-xl">
              {item.title}{" "}
              <span className="block pt-1 font-normal text-gray-400 sm:inline sm:pt-0">
                - {item.company}
              </span>
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
