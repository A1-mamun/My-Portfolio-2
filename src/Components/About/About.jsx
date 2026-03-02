import { FaFileDownload } from "react-icons/fa";
import image from "../../assets/image/photo.jpeg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaArrowTurnDown } from "react-icons/fa6";

const About = () => {
  const [text] = useTypewriter({
    words: ["DEVELOPER"],
    loop: true,
  });
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="about" className="mt-0 pt-12 md:pt-16 lg:pt-12">
      <div className="text-[#fff] space-y-4 md:space-y-7 lg:space-y-10">
        <div className="flex flex-col justify-between gap-0 xl:gap-8 2xl:gap-10 lg:items-center">
          <div className="flex gap-8 flex-col md:flex-row justify-around items-center">
            <div className="space-y-2 md:space-y-3 lg:space-y-5 lg:hidden">
              <p className=" text-sm md:text-lg lg:text-xl  font-semibold">
                Hello, I&apos;m
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-[44px] font-bold ">
                Md. Abdullah Al Mamun
              </h1>
              <h4 className="test-lg md:text-xl lg:text-2xl font-semibold ">
                Full Stack Developer
              </h4>
              <p className="text-xs md:text-sm lg:text-base font-medium w-80 text-slate-400">
                I am a full stack <strong className="uppercase">mern </strong>{" "}
                stack developer. I build pixel-perfect, engaging, and accessible
                digital experiences.
              </p>
              <div className="flex gap-5">
                <a
                  href="https://drive.google.com/file/d/1BhjLK8QU6QAAYdkPP0XAkrxyO5j0q2v3/view?usp=sharing"
                  target="_"
                >
                  <button className="px-3 py-[6px] rounded-md mt-2  border-none font-bold flex items-center gap-3 uppercase  bg-white hover:bg-slate-300 duration-200 text-[#000] text-sm md:text-base lg:text-lg ">
                    Resume{" "}
                    <FaFileDownload className="text-base animate-bounce" />
                  </button>
                </a>
                <button
                  onClick={() => scrollToSection("message")}
                  className="px-3 py-[6px] rounded-md mt-2 border-none font-bold flex items-center gap-3 uppercase  bg-white hover:bg-slate-300 duration-200 text-[#000] text-sm md:text-base lg:text-lg "
                >
                  Hire me{" "}
                  <FaArrowTurnDown className="text-base animate-bounce" />
                </button>
              </div>
            </div>
            <img
              src={image}
              className="w-52 h-52 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl"
            />
          </div>
          <div className="text-slate-400 flex-1">
            <p className="py-6 text-sm md:text-base xl:text-lg text-justify">
              I am a <strong className="uppercase">full stack</strong> web
              developer currently studying at Rajshahi University of Engineering
              and Technology ( RUET ) in Rajshahi, Bangladesh. I am in my{" "}
              <strong>3rd year</strong> in the Department of{" "}
              <strong>Computer Science and Engineering</strong> . I work with
              the <strong>MERN</strong> stack environment and primarily use the{" "}
              <strong>ReactJS</strong> and <strong>NextJS</strong> framework to
              build <strong>Dynamic</strong> and <strong>Responsive</strong> web
              applications. Additionally, I am a <strong>Competitive</strong>{" "}
              programmer with some knowledge of C and C++ programming languages.
              My passion for coding drives me to continuously improve my skills
              and stay updated with the latest technologies in web development.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[44px] text-center font-bold text-white mb-6 md:mb-10 lg:mb-14 ">
            Quick Profile Overview
          </h2>
          <div className="space-y-1 md:space-y-2 font-semibold text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl text-slate-400">
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">Name: </span> Md.
              Abdullah Al Mamun
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">Designaion: </span>
              Full Stack Developer ( <strong>MERN STACK</strong> )
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">
                NATIONALITY:{" "}
              </span>{" "}
              Bangladeshi
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">ADDRESS: </span>{" "}
              Rajshahi, Bangladesh
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">PHONE: </span> +880
              1745093497
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">E-MAIL: </span>{" "}
              1154almamun@gmail.com
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">Languages: </span>{" "}
              English,Bangla,Hindi
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">Education: </span>{" "}
              Computer Science & Engineering ( <strong>3rd year</strong> )
            </h2>
            <h2 className="">
              <span className="uppercase text-white/85 mr-1">University: </span>{" "}
              Rajshahi University of Engineering and Technology (RUET) Rajshahi,
              Bangladesh
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
