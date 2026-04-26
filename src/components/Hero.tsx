import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profilePicture from "../assets/images/my-profile_picture.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PrimaryButton } from "./common/Buttons";

function Hero() {
  useDocumentTitle("Gaurav Joshi - Portfolio Website");
  const navigate = useNavigate();

  return (
    <section
      id="home"
      // className="min-h-screen flex items-center justify-between p-4 md:p-16 flex-col-reverse sm:flex-row "
      className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-10 px-4 pb-28 pt-24 sm:px-6 md:px-10 lg:flex-row lg:justify-between lg:gap-16 lg:pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center lg:text-left"
      >
        <p className="mb-3 text-base font-semibold text-[#ffb400] sm:text-lg md:text-xl">
          - I'M GAURAV JOSHI.
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          SOFTWARE DEVELOPER
        </h1>
        <p className="mb-8 text-sm leading-7 text-gray-300 sm:text-base">
          Software developer with 3+ years of experience delivering intuitive
          UI/UX and robust backend solutions, focused on building secure,
          scalable, and maintainable web applications.
        </p>
        <PrimaryButton
          text={"more about me"}
          icon={<ArrowRight />}
          classname="mx-auto lg:mx-0"
          onclick={() => navigate("/about")}
        />
      </motion.div>
      <img
        src={profilePicture}
        alt="Gaurav Joshi"
        className="w-full max-w-[280px] rounded-full shadow-lg sm:max-w-sm rotate-2"
      />
    </section>
  );
}

export default Hero;
