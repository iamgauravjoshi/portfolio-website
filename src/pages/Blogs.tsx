import { motion } from "framer-motion";
import ZustandImage from "../assets/images/zustand-image.png";
import ReactThreeFiberImage from "../assets/images/react-three-fiber-blog.png";
import TailwindCSSImage from "../assets/images/tailwind-css-blog.png";
import PageTitle from "../components/common/PageTitle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

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
];

const Blogs = () => {
  useDocumentTitle("Blogs - Gaurav Joshi");

  return (
    <section id="blogs" className="min-h-screen px-4 pb-28 sm:px-6 md:px-10 lg:pb-16">
      <PageTitle
        mainTitle="My"
        heighlitedTitle="Blogs"
        backgroundTitle="Writings"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-2xl"
            >
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {blog.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                    >
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
