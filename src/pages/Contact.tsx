import React, { useState } from "react";
import EmailIcon from "../assets/icons/mail.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";
import XTwitterIcon from "../assets/icons/x-twitter.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import { MailPlus, Phone, Send } from "lucide-react";
import { PrimaryButton } from "../components/common/Buttons";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageTitle from "../components/common/PageTitle";

interface ISocialMediaIconsProps {
   name: string;
   imgUrl: string | undefined;
   navigateTo: string;
   classname: string;
}

{
   /* <a href="mailto:joshigaurav1122@gmail.com" class="icon-button google" rel="noopener noreferrer"
              target="_blank"><img src="images/logo/gmail.svg" alt="Gmail"></a> */
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
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <section id='contact' className='min-h-screen'>
         <PageTitle
            mainTitle='Get in'
            heighlitedTitle='Touch'
            backgroundTitle='Contact'
         />

         <div className='max-w-6xl mx-auto px-6'>
            <div className='flex gap-10'>
               <div className='max-w-sm'>
                  <h3 className='text-2xl font-semibold uppercase mb-4'>
                     Contact to hire!
                  </h3>
                  <p className='mb-5'>
                     Feel free to get in touch. I'm always open for discussing
                     new opportunities to be part of your visions.
                  </p>
                  <div
                     id='mail-me'
                     className='flex items-center gap-4 mb-4 hover:translate-x-2 transition-all duration-300'>
                     <MailPlus size={36} strokeWidth={1} color='#ffb400' />
                     <p>
                        <span className='block uppercase text-gray-300 opacity-80 font-medium'>
                           mail me
                        </span>
                        joshigaurav1122@example.com
                     </p>
                  </div>
                  <div
                     id='call-me'
                     className='flex items-center gap-4 mb-8 hover:translate-x-2 transition-all duration-300'>
                     <Phone size={36} strokeWidth={1} color='#ffb400' />
                     <p>
                        <span className='block uppercase text-gray-300 opacity-80 font-medium'>
                           call me
                        </span>
                        +91 6396973328
                     </p>
                  </div>
                  <div className='flex gap-4 text-2xl text-white'>
                     {SocialMediaIcons.map(
                        (icon: ISocialMediaIconsProps, index: number) => {
                           return (
                              <a
                                 key={index}
                                 href={icon.navigateTo} // hover:bg-blue-500
                                 className='flex justify-center items-center h-10 w-10 rounded-full bg-[#2b2a2a] hover:bg-[#ffb400] hover:-translate-y-1.5 transition-all duration-500'>
                                 <img
                                    src={icon.imgUrl}
                                    alt={icon.name}
                                    className={icon.classname}
                                 />
                              </a>
                           );
                        }
                     )}
                  </div>
               </div>
               <form
                  className='space-y-6 w-full'
                  onSubmit={handleContactFormSubmit}>
                  {/* className='flex gap-8' */}
                  <section className='grid grid-cols-3 gap-6'>
                     <input
                        name='name'
                        type='text'
                        placeholder='Your Name'
                        className='border border-black truncate outline-none bg-[#252525] text-white py-3 px-6 rounded-3xl transition-all duration-300 focus:border-[#ffb400]'
                        required={true}
                        value={formData.name}
                        onChange={handleInputChange}
                     />
                     <input
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        className='border border-black truncate outline-none bg-[#252525] text-white py-3 px-6 rounded-3xl transition-all duration-300 focus:border-[#ffb400]'
                        required={true}
                        value={formData.email}
                        onChange={handleInputChange}
                     />
                     <input
                        name='subject'
                        type='text'
                        placeholder='Your Subject'
                        className='border border-black truncate outline-none bg-[#252525] text-white py-3 px-6 rounded-3xl transition-all duration-300 focus:border-[#ffb400]'
                        required={true}
                        value={formData.subject}
                        onChange={handleInputChange}
                     />
                  </section>
                  <textarea
                     name='message'
                     placeholder='Your Message'
                     rows={6}
                     className='w-full border border-black truncate outline-none bg-[#252525] text-white py-3 px-6 rounded-3xl transition-all duration-300 focus:border-[#ffb400]'
                     required={true}
                     value={formData.message}
                     onChange={handleInputChange}
                  />
                  <PrimaryButton
                     type='submit'
                     text={"send message"}
                     classname='w-fit'
                     icon={<Send absoluteStrokeWidth />}
                  />
               </form>
            </div>
         </div>
      </section>
   );
}

export default Contact;
