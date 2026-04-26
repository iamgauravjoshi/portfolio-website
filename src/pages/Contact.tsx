import React, { useState } from "react";
import { MailPlus, Phone, Send } from "lucide-react";
import EmailIcon from "../assets/icons/mail.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";
import XTwitterIcon from "../assets/icons/x-twitter.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import { PrimaryButton } from "../components/common/Buttons";
import PageTitle from "../components/common/PageTitle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

interface ISocialMediaIconsProps {
  name: string;
  imgUrl: string | undefined;
  navigateTo: string;
  classname: string;
}

const SocialMediaIcons: ISocialMediaIconsProps[] = [
  {
    name: "mail-icon",
    imgUrl: EmailIcon,
    navigateTo: "mailto:joshigaurav1122@gmail.com",
    classname: "h-5 w-4",
  },
  {
    name: "linkedin-icon",
    imgUrl: LinkedinIcon,
    navigateTo: "http://www.linkedin.com/in/iamgauravjoshi",
    classname: "h-5 w-4",
  },
  {
    name: "github-icon",
    imgUrl: GithubIcon,
    navigateTo: "https://github.com/iamgauravjoshi",
    classname: "h-5 w-4",
  },
  {
    name: "x-twitter-icon",
    imgUrl: XTwitterIcon,
    navigateTo: "https://x.com/iamgauravjoshi",
    classname: "h-5 w-4",
  },
  {
    name: "instagram-icon",
    imgUrl: InstagramIcon,
    navigateTo: "#",
    classname: "h-5 w-4",
  },
  {
    name: "facebook-icon",
    imgUrl: FacebookIcon,
    navigateTo: "#",
    classname: "h-4 w-4",
  },
];

interface IContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useDocumentTitle("Contact - Gaurav Joshi");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("response: ", response);

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="min-h-screen px-4 pb-28 sm:px-6 md:px-10 lg:pb-16">
      <PageTitle
        mainTitle="Get in"
        heighlitedTitle="Touch"
        backgroundTitle="Contact"
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="w-full max-w-xl lg:max-w-sm">
            <h3 className="mb-4 text-2xl font-semibold uppercase">Contact to hire!</h3>
            <p className="mb-5 text-sm leading-7 text-gray-300 sm:text-base">
              Feel free to get in touch. I'm always open for discussing new opportunities to be part of your visions.
            </p>
            <div
              id="mail-me"
              className="mb-4 flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
            >
              <MailPlus size={36} strokeWidth={1} color="#ffb400" className="mt-1 shrink-0" />
              <p className="min-w-0 break-all">
                <span className="block font-medium uppercase text-gray-300 opacity-80">
                  mail me
                </span>
                joshigaurav1122@example.com
              </p>
            </div>
            <div
              id="call-me"
              className="mb-8 flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
            >
              <Phone size={36} strokeWidth={1} color="#ffb400" className="mt-1 shrink-0" />
              <p>
                <span className="block font-medium uppercase text-gray-300 opacity-80">
                  call me
                </span>
                +91 6396973328
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-2xl text-white">
              {SocialMediaIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.navigateTo}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b2a2a] transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#ffb400]"
                >
                  <img src={icon.imgUrl} alt={icon.name} className={icon.classname} />
                </a>
              ))}
            </div>
          </div>
          <form className="w-full space-y-6" onSubmit={handleContactFormSubmit}>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="min-w-0 rounded-3xl border border-black bg-[#252525] px-5 py-3 text-white outline-none transition-all duration-300 focus:border-[#ffb400] sm:px-6"
                required={true}
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="min-w-0 rounded-3xl border border-black bg-[#252525] px-5 py-3 text-white outline-none transition-all duration-300 focus:border-[#ffb400] sm:px-6"
                required={true}
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                name="subject"
                type="text"
                placeholder="Your Subject"
                className="min-w-0 rounded-3xl border border-black bg-[#252525] px-5 py-3 text-white outline-none transition-all duration-300 focus:border-[#ffb400] sm:col-span-2 sm:px-6 lg:col-span-1"
                required={true}
                value={formData.subject}
                onChange={handleInputChange}
              />
            </section>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="w-full rounded-3xl border border-black bg-[#252525] px-5 py-3 text-white outline-none transition-all duration-300 focus:border-[#ffb400] sm:px-6"
              required={true}
              value={formData.message}
              onChange={handleInputChange}
            />
            <PrimaryButton
              type="submit"
              text={"send message"}
              classname="w-full justify-center sm:w-fit"
              icon={<Send absoluteStrokeWidth />}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
