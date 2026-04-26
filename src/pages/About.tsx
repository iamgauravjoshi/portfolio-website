import { ArrowDownToLine } from "lucide-react";
import { PrimaryButton } from "../components/common/Buttons";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageTitle from "../components/common/PageTitle";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "6", label: "Portfolio Projects" },
  { value: "20+", label: "Tools & Technologies" },
  { value: "3", label: "Core Domains" },
];

function About() {
  useDocumentTitle("About - Gaurav Joshi");

  return (
    <section id="about" className="min-h-screen">
      <PageTitle
        mainTitle="About"
        heighlitedTitle="Me"
        backgroundTitle="Resume"
      />

      <div className="grid grid-cols-2 gap-12 max-w-[1140px] mx-auto pb-20">
        <div>
          <h3 className="text-2xl font-semibold mb-6 uppercase">
            Personal Infos
          </h3>
          <ul className="grid grid-cols-2 gap-y-5 mb-10">
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
            <li>
              <span className="text-gray-300 opacity-80">Email : </span>
              <span>joshigaurav1122@gmail.com</span>
            </li>
          </ul>
          <PrimaryButton
            text={"download cv"}
            icon={<ArrowDownToLine />}
            href="/Gaurav_Joshi_Frontend_Resume.pdf"
            download="Gaurav_Joshi_Frontend_Resume.pdf"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="about-box-stats border border-[#252525] p-10"
            >
              <h3 className="inline-block text-5xl font-bold text-[#ffb400]">
                {stat.value}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
