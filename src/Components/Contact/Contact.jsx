import { FaLinkedin } from "react-icons/fa";
import {
  FaPhoneVolume,
  FaSquareFacebook,
  FaSquareGithub,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTypewriter } from "react-simple-typewriter";

const Contact = () => {
  const [text] = useTypewriter({
    words: [". . ."],
    loop: true,
  });
  return (
    <div id="contact" className="bg-slate-800 text-[#fff] mt-14 lg:hidden">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-around py-16 px-16">
        <div className="space-y-2 ">
          <h2 className="w-full lg:text-3xl xl:text-4xl 2xl:text-[44px] font-bold text-txt-color">
            Let&apos;s Connect!
          </h2>
          <h4 className="text-base md:text-lg lg:text-xl font-medium">
            I&apos;m just a message away <span>{text}</span>
          </h4>
        </div>
        <div className=" space-y-5">
          <div className="flex items-center gap-3">
            <MdEmail className="text-2xl md:text-3xl" />
            <h3 className="text-base md:text-lg lg:text-xl">
              1154almamun@gmail.com
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneVolume className="text-2xl md:text-3xl" />
            <h3 className="ttext-base md:text-lg lg:text-xl">+8801745093497</h3>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/a1-mamun" target="_blank">
              <FaLinkedin className="text-2xl md:text-3xl" />
            </a>
            <a href="https://github.com/A1-mamun" target="_blank">
              <FaSquareGithub className="text-2xl md:text-3xl" />
            </a>
            <a href="https://www.facebook.com/A1Mamun178" target="_blank">
              <FaSquareFacebook className="text-2xl md:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
