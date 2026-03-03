import tailwind from "../../assets/icon/tailwind.png";
import js from "../../assets/icon/JavaScript.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import mongoDb from "../../assets/icon/mongo.png";
import firebase from "../../assets/icon/firebase.png";
import c from "../../assets/icon/c.png";
import cpp from "../../assets/icon/cpp.png";
const Skills = () => {
  return (
    <section id="skills" className="lg:my-14 pt-16">
      <h2 className="text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[44px] font-bold text-white">
        Tools and Technologies I Use
      </h2>
      <div className="flex flex-wrap justify-center  gap-5 md:gap-7 lg:gap-10 my-12 md:my-16 lg:my-20 animate-pulse">
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={c}
          alt="c"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={cpp}
          alt="cpp"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={tailwind}
          alt="TailwindCSS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={js}
          alt="JavaScript"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="TypeScript"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={react}
          alt="ReactJS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={node}
          alt="NodeJS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={express}
          alt="ExpressJS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={mongoDb}
          alt="MongoDb"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={firebase}
          alt="Firebase"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
          alt="Redis"
        />
        <svg
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          viewBox="0 0 128 128"
        >
          <path
            fill="#2d7070"
            d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"
          ></path>
        </svg>
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
          alt="PostgreSQL"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
          alt="Postman"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          alt="NextJS"
        />
      </div>
      <h2 className="text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[44px] font-bold text-white">
        Soft Skills
      </h2>
      <div className="flex gap-3 my-7 md:my-16 lg:my-20">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-slate-400">
          Campus Ambassador:
        </h3>
        <div className="lg:flex-1 space-y-1 font-medium">
          <p className="text-base md:text-lg lg:text-xl font-medium text-white">
            Works as a Campus Ambassador of <strong>Programming Hero</strong>
          </p>
          <p className="text-sm md:text-base lg:text-lg text-slate-400">
            Work to raise student awareness through the title{" "}
            <strong>'Let's Code Your Career through Programming'</strong>
          </p>
          <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
            <strong> February 2024 - May 2025</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
