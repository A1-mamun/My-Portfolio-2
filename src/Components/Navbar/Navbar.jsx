import { useEffect, useState } from "react";
import Social from "../Social/Social";
import { FaFileDownload } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Set up IntersectionObserver to highlight active section link
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = (
    <>
      <li className="group">
        <a
          onClick={() => scrollToSection("about")}
          className="px-2 py-1 flex items-center gap-3"
        >
          <div
            className={`border group-hover:border-white h-[1px] group-hover:w-14 duration-200 ${
              activeSection === "about"
                ? "w-14 duration-200 "
                : "w-7 border-slate-500"
            }`}
          ></div>
          <p
            className={`font-medium group-hover:text-white  ${
              activeSection === "about" ? "text-white" : "text-slate-500"
            }`}
          >
            About
          </p>
        </a>
      </li>
      <li className="group">
        <a
          onClick={() => scrollToSection("skills")}
          className="px-2 py-1 flex items-center gap-3"
        >
          <div
            className={`border group-hover:border-white h-[1px] group-hover:w-14 duration-200 ${
              activeSection === "skills"
                ? "w-14 duration-200 "
                : "border-slate-500  w-7 "
            }`}
          ></div>
          <p
            className={`font-medium group-hover:text-white  ${
              activeSection === "skills" ? "text-white" : "text-slate-500"
            }`}
          >
            Skills
          </p>
        </a>
      </li>
      <li className="group">
        <a
          onClick={() => scrollToSection("projects")}
          className="px-2 py-1 flex items-center gap-3"
        >
          <div
            className={`border group-hover:border-white h-[1px] group-hover:w-14 duration-200 ${
              activeSection === "projects"
                ? "w-14 duration-200 "
                : "border-slate-500  w-7"
            }`}
          ></div>
          <p
            className={`font-medium group-hover:text-white  ${
              activeSection === "projects" ? "text-white" : "text-slate-500"
            }`}
          >
            Projects
          </p>
        </a>
      </li>
      <li className="group">
        <a
          onClick={() => scrollToSection("message")}
          className="px-2 py-1 flex items-center gap-3"
        >
          <div
            className={`border group-hover:border-white h-[1px] group-hover:w-14 duration-200 ${
              activeSection === "message"
                ? "w-14 duration-200 "
                : "border-slate-500  w-7"
            }`}
          ></div>
          <p
            className={`font-medium group-hover:text-white  ${
              activeSection === "message" ? "text-white" : "text-slate-500"
            }`}
          >
            Message
          </p>
        </a>
      </li>
    </>
  );

  return (
    <div className="h-screen sticky top-0 border border-white ">
      <div className="h-full text-xl text-white flex flex-col justify-around ">
        <div className="lg:space-y-2 xl:space-y-3 2xl:space-y-5">
          <p className="lg:text-base xl:tex-lg 2xl:text-xl  font-semibold">
            Hello, I&apos;m
          </p>
          <h1 className="lg:text-3xl xl:text-4xl 2xl:text-[44px] font-bold">
            Md. Abdullah Al Mamun
          </h1>
          <h4 className="lg:text-lg xl:text-xl 2xl:text-2xl font-semibold ">
            Full Stack Developer
          </h4>
          <p className="text-base font-medium w-80 text-slate-400">
            I am a full stack <strong className="uppercase">mern </strong> stack
            developer. I build pixel-perfect, engaging, and accessible digital
            experiences.
          </p>
          <div className="flex gap-5 pt-3">
            <a
              href="https://drive.google.com/file/d/1BhjLK8QU6QAAYdkPP0XAkrxyO5j0q2v3/view?usp=sharing"
              target="_"
            >
              <button className="px-3 py-2 lg:px-5 lg:py-2 rounded-lg border-none font-bold flex items-center gap-3 uppercase bg-white hover:bg-slate-300 duration-200 text-[#000] lg:text-base 2xl:text-lg">
                Resume <FaFileDownload className="text-xl animate-bounce" />
              </button>
            </a>
            <button
              onClick={() => scrollToSection("message")}
              className="px-3 py-2 lg:px-5 lg:py-2 rounded-lg    border-none font-bold flex items-center gap-3 uppercase  bg-white hover:bg-slate-300 duration-200 text-[#000] lg:text-base 2xl:text-lg"
            >
              Hire me <FaArrowTurnDown className="text-xl animate-bounce" />
            </button>
          </div>
        </div>

        {/* navigaors */}
        <div className="">
          <div className="w-full ">
            <ul className="lg:text-base xl:text-lg ">{navLinks}</ul>
          </div>
        </div>
        {/* Social links */}
        <Social />
      </div>
    </div>
  );
};

export default Navbar;
