import { motion } from "framer-motion";
import { PrimaryButton } from "./common/Buttons";
import { ArrowRight } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import profilePicture from "../assets/images/my-profile_picture.png";

function Hero() {
  useDocumentTitle("Gaurav Joshi - Portfolio Website");
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between p-4 md:p-16 flex-col-reverse sm:flex-row "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <p className="text-[#ffb400] text-xl font-semibold mb-2">
          — I'M GAURAV JOSHI.
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-4">
          SOFTWARE DEVELOPER
        </h1>
        <p className="text-gray-300 mb-6">
          I'm a software developer with 3+ years of experience, passionate about
          building smooth UI/UX experiences and modern web interfaces.
        </p>
        <PrimaryButton
          text={"more about me"}
          icon={<ArrowRight />}
          onclick={() => navigate("/about")}
        />
      </motion.div>
      <img
        src={profilePicture}
        alt="Gaurav Joshi"
        className="rounded-3xl max-w-sm shadow-lg"
      />
    </section>
  );
}

export default Hero;
