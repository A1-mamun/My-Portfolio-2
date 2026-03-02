import { useEffect, useState } from "react";

const MobileNavbar = () => {
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
      { threshold: 0.4 },
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
          <p
            className={`font-medium group-hover:text-white  ${
              activeSection === "message" ? "text-white" : "text-slate-500"
            }`}
          >
            Contact
          </p>
        </a>
      </li>
      {/* <li className="group">
        <a
          onClick={() => scrollToSection("contact")}
          className="px-2 py-1 flex items-center gap-3"
        >
          <p
            className={`font-medium group-hover:text-white  ${
              activeSection === "contact" ? "text-white" : "text-slate-500"
            }`}
          >
            Contact
          </p>
        </a>
      </li> */}
    </>
  );
  //   const navLinks = (
  //     <>
  //       <li
  //         className={`hover:border border-txt-color rounded-lg  ${
  //           activeSection === "home" ? "scale-125 text-sky-400 " : ""
  //         }`}
  //       >
  //         <a onClick={() => scrollToSection("home")} className="px-2 py-1">
  //           Home
  //         </a>
  //       </li>
  //       <li
  //         className={`hover:border border-txt-color rounded-lg ${
  //           activeSection === "about" ? "scale-125 text-sky-400" : ""
  //         }`}
  //       >
  //         <a onClick={() => scrollToSection("about")} className="px-2 py-1">
  //           About Me
  //         </a>
  //       </li>
  //       <li
  //         className={`hover:border border-txt-color rounded-lg ${
  //           activeSection === "skills" ? "scale-125 text-sky-400" : ""
  //         }`}
  //       >
  //         <a onClick={() => scrollToSection("skills")} className="px-2 py-1">
  //           Skills
  //         </a>
  //       </li>
  //       <li
  //         className={`hover:border border-txt-color rounded-lg ${
  //           activeSection === "projects" ? "scale-125 text-sky-400" : ""
  //         }`}
  //       >
  //         <a onClick={() => scrollToSection("projects")} className="px-2 py-1">
  //           Projects
  //         </a>
  //       </li>
  //       <li
  //         className={`hover:border border-txt-color rounded-lg ${
  //           activeSection === "hire" ? "scale-125 text-sky-400" : ""
  //         }`}
  //       >
  //         <a onClick={() => scrollToSection("hire")} className="px-2 py-1">
  //           Message
  //         </a>
  //       </li>
  //       <li
  //         className={`hover:border border-txt-color rounded-lg ${
  //           activeSection === "contact" ? "scale-125 text-sky-400" : ""
  //         }`}
  //       >
  //         <a onClick={() => scrollToSection("contact")} className="px-2 py-1">
  //           Contact
  //         </a>
  //       </li>
  //     </>
  //   );
  return (
    <div className=" fixed w-full z-10 bottom-0 ">
      <div className=" bg-slate-800 h-10 md:h-14  ">
        <ul className="flex justify-around items-center h-full">{navLinks}</ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
