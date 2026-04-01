import tailwind from "../../assets/icon/tailwind.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import mongoDb from "../../assets/icon/mongo.png";
import firebase from "../../assets/icon/firebase.png";
import project1 from "../../assets/image/echojournal.png";
import project2 from "../../assets/image/foodvilla.png";
import project3 from "../../assets/image/potteryverse.png";
import project4 from "../../assets/image/pentamart.png";
import ProjectsCard from "./ProjectsCard";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className=" pt-16 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white">
        Some of My Projects
      </h2>
      <div className="space-y-5 md:space-y-20 lg:space-y-16 mt-12 md:mt-20 lg:mt-16">
        <div className="flex gap-3 lg:gap-5 flex-col md:flex-row group rounded-lg p-2 md:p-6 bg-slate-800 ">
          <div>
            <img
              className="w-full h-40 md:w-40 md:h-28 lg:w-72 lg:h-40 rounded-md"
              src={project4}
              alt="PentaMart"
            />
          </div>
          <div className="flex-1 space-y-2">
            <a
              href="https://www.pentamart.com.bd/"
              target="_blank"
              className="group"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-b flex items-center gap-4 text-white group-hover:text-green-400 duration-200 md:pb-2">
                PentaMart
                <FaExternalLinkAlt
                  size={15}
                  className="group-hover:scale-125"
                />
              </h3>
            </a>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              A Comprehensive Multivendor E-commerce Platform for Seamless
              Online Shopping
            </h3>
            <p className="text-slate-400 text-xs md:text-sm lg:text-base">
              PentaMart is a comprehensive multivendor e-commerce platform
              designed for seamless online shopping. It provides a user-friendly
              interface for customers to browse and purchase products from
              various sellers. The platform ensures a secure and efficient
              shopping experience for all users.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 py-2 md:py-3">
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="NextJS"
              />

              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              />

              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={express}
                alt="ExpressJS"
              />

              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
                alt="Redis"
              />
              <svg
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#2d7070"
                  d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"
                ></path>
              </svg>
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
              />
            </div>
            <div className="flex justify-start gap-6">
              <p className="btn btn-sm font-bold  bg-white group-hover:text-green-950 group-hover:scale-110 group-hover:bg-green-100 duration-200 text-[#000]">
                Backend Developer
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 lg:gap-5 flex-col md:flex-row group rounded-lg p-2 md:p-6 bg-slate-800 ">
          <div>
            <img
              className="w-full h-40 md:w-40 md:h-28 lg:w-72 lg:h-40 rounded-md"
              src={project1}
              alt=""
            />
          </div>
          <div className="flex-1 space-y-2">
            <a
              href="https://echojournal-53c24.web.app"
              target="_blank"
              className="group"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-b flex items-center gap-4 text-white group-hover:text-green-400 duration-200 md:pb-2">
                EchoJournal
                <FaExternalLinkAlt
                  size={15}
                  className="group-hover:scale-125"
                />
              </h3>
            </a>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              A Dynamic Platform for Reading and Sharing Articles
            </h3>
            <p className="text-slate-400 text-xs md:text-sm lg:text-base">
              EchoJournal is a platform for sharing and reading free and premium
              content. Normal users can post one article and access free
              content, while premium subscribers can post unlimited articles and
              read premium content. The admin panel manages users and articles,
              promoting knowledge sharing and community interaction.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 py-2 md:py-3">
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={tailwind}
                alt="TailwindCSS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={react}
                alt="ReactJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={node}
                alt="NodeJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={express}
                alt="ExpressJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={mongoDb}
                alt="MongoDb"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={firebase}
                alt="Firebase"
              />
            </div>
            <div className="flex justify-start gap-6">
              <a
                className="btn btn-sm font-bold  bg-white group-hover:text-green-950 group-hover:scale-110 group-hover:bg-green-100 duration-200 text-[#000]"
                href="https://github.com/A1-mamun/Echo-Journal-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm  font-bold  bg-white group-hover:text-green-950 group-hover:scale-110 group-hover:bg-green-100 duration-200 text-[#000]"
                href="https://github.com/A1-mamun/Echo-Journal-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-5 flex-col md:flex-row group rounded-lg p-2 md:p-6 bg-slate-800 ">
          <div>
            <img
              className="w-full h-40 md:w-40 md:h-28 lg:w-72 lg:h-40 rounded-md"
              src={project2}
              alt=""
            />
          </div>
          <div className="flex-1 space-y-2">
            <a
              href="https://food-villa-5b01d.web.app"
              target="_blank"
              className="group"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-b flex items-center gap-4 text-white group-hover:text-green-400 duration-200 md:pb-2">
                FoodVilla{" "}
                <FaExternalLinkAlt
                  size={15}
                  className="group-hover:scale-125"
                />
              </h3>
            </a>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              A One-Stop Hub for Purchasing and Sharing Delicious Foods
            </h3>
            <p className="text-slate-400 text-xs md:text-sm lg:text-base">
              FoodVilla is a platform where users can purchase food and add food
              items. Users can view their purchase history and the items they
              have added, making it easy to keep track of their transactions and
              contributions. FoodVilla aims to provide a convenient and
              efficient experience for food enthusiasts, combining purchasing
              and sharing in one seamless interface.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 py-2 md:py-3">
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={tailwind}
                alt="TailwindCSS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={react}
                alt="ReactJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={node}
                alt="NodeJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={express}
                alt="ExpressJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={mongoDb}
                alt="MongoDb"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={firebase}
                alt="Firebase"
              />
            </div>
            <div className="flex justify-start gap-6">
              <a
                className="btn btn-sm font-bold  bg-white group-hover:text-green-950 group-hover:scale-110 group-hover:bg-green-100 duration-200 text-[#000]"
                href="https://github.com/A1-mamun/Food-Villa-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm  font-bold  bg-white group-hover:text-green-950 group-hover:scale-110 group-hover:bg-green-100 duration-200 text-[#000]"
                href="https://github.com/A1-mamun/Food-Villa-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-5 flex-col md:flex-row group rounded-lg p-2 md:p-6 bg-slate-800 ">
          <div>
            <img
              className="w-full h-40 md:w-40 md:h-28 lg:w-72 lg:h-40 rounded-md"
              src={project3}
              alt=""
            />
          </div>
          <div className="flex-1 space-y-2">
            <a
              href="https://pottery-verse.web.app"
              target="_blank"
              className="group"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-b flex items-center gap-4 text-white group-hover:text-green-400 duration-200 md:pb-2">
                PotteryVerse
                <FaExternalLinkAlt
                  size={15}
                  className="group-hover:scale-125"
                />
              </h3>
            </a>
            <h3 className="text-base md:text-lg lg:text-xl font-semibold">
              Your Marketplace for Unique Art and Craft Creations
            </h3>
            <p className="text-slate-400 text-xs md:text-sm lg:text-base">
              PotteryVerse is a platform for art and craft enthusiasts to
              explore, purchase, and add unique items. Users can browse a wide
              range of handcrafted goods, add their own creations to the
              marketplace, and view their purchase and added history.
              PotteryVerse fosters a community for artisans and shoppers alike,
              promoting creativity and supporting the sharing of beautiful,
              handcrafted items.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 py-2 md:py-3">
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={tailwind}
                alt="TailwindCSS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={react}
                alt="ReactJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={node}
                alt="NodeJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={express}
                alt="ExpressJS"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={mongoDb}
                alt="MongoDb"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hover:scale-125 duration-300"
                src={firebase}
                alt="Firebase"
              />
            </div>
            <div className="flex justify-start gap-6">
              <a
                className="btn btn-sm font-bold  bg-white group-hover:text-green-950 group-hover:scale-110 group-hover:bg-green-100 duration-200 text-[#000]"
                href="https://github.com/A1-mamun/Pottery-Verse-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm  font-bold  bg-white group-hover:text-green-950 group-hover:scale-110 group-hover:bg-green-100 duration-200 text-[#000]"
                href="https://github.com/A1-mamun/Pottery-Verse-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
