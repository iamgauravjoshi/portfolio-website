import { ArrowDownToLine } from "lucide-react";
import { PrimaryButton } from "../components/common/Buttons";
import PageTitle from "../components/common/PageTitle";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const stats = [
  { value: "3", label: "Years Experience" },
  { value: "6", label: "Projects" },
  { value: "20", label: "Tools & Technologies" },
  { value: "3", label: "Core Domains" },
];

function About() {
  useDocumentTitle("About - Gaurav Joshi");

  return (
    <section id="about" className="min-h-screen px-4 pb-28 sm:px-6 md:px-10 lg:pb-16">
      <PageTitle
        mainTitle="About"
        heighlitedTitle="Me"
        backgroundTitle="Resume"
      />

      <div className="mx-auto grid max-w-[1140px] gap-10 pb-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div>
          <h3 className="mb-6 text-2xl font-semibold uppercase">Personal Infos</h3>
          <ul className="mb-10 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            <li>
              <span className="text-gray-300 opacity-80">Name : </span>
              <span>Gaurav Joshi</span>
            </li>
            <li>
              <span className="text-gray-300 opacity-80">Address : </span>
              <span>Almora, Uttarakhand</span>
            </li>
            <li>
              <span className="text-gray-300 opacity-80">Phone : </span>
              <span>+91 6396973328</span>
            </li>
            <li>
              <span className="text-gray-300 opacity-80">Open To Work : </span>
              <span>Available</span>
            </li>
            <li>
              <span className="text-gray-300 opacity-80">Nationality : </span>
              <span>Indian</span>
            </li>
            <li>
              <span className="text-gray-300 opacity-80">Languages : </span>
              <span>Hindi, English</span>
            </li>
            <li className="sm:col-span-2">
              <span className="text-gray-300 opacity-80">Email : </span>
              <span className="break-all">joshigaurav1122@gmail.com</span>
            </li>
          </ul>
          <PrimaryButton
            text={"download cv"}
            icon={<ArrowDownToLine />}
            href="/Gaurav_Joshi_Frontend_Resume.pdf"
            download="Gaurav_Joshi_Frontend_Resume.pdf"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="about-box-stats border border-[#252525] p-6 sm:p-8 lg:p-10"
            >
              <h3 className="inline-block text-4xl font-bold text-[#ffb400] sm:text-5xl">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-300 sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
