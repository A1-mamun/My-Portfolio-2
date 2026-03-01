import { FaLinkedin } from "react-icons/fa";
import {
  FaPhoneVolume,
  FaSquareFacebook,
  FaSquareGithub,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTypewriter } from "react-simple-typewriter";

const Social = () => {
  const [text] = useTypewriter({
    words: [". . ."],
    loop: true,
  });
  return (
    <div>
      <div className="lg:space-y-1 xl:space-y-2">
        <h2 className="w-full lg:text-3xl xl:text-4xl 2xl:text-[44px] font-bold text-txt-color">
          Let&apos;s Connect!
        </h2>
        <h4 className="lg:text-base xl:text-lg 2xl:text-xl font-medium">
          I&apos;m just a message away <span>{text}</span>
        </h4>
      </div>
      <div className="lg:space-y-2 xl:space-y-3 2xl:space-y-5">
        <div className="flex items-center gap-3">
          <MdEmail className="lg:text-xl xl:text-2xl 2xl:text-3xl" />
          <h3 className="lg:text-base xl:text-lg 2xl:text-xl">
            1154almamun@gmail.com
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneVolume className="lg:text-xl xl:text-2xl 2xl:text-3xl" />
          <h3 className="lg:text-base xl:text-lg 2xl:text-xl">
            +8801745093497
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/a1-mamun" target="_blank">
            <FaLinkedin className="lg:text-2xl xl:text-3xl 2xl:text-4xl" />
          </a>
          <a href="https://github.com/A1-mamun" target="_blank">
            <FaSquareGithub className="lg:text-2xl xl:text-3xl 2xl:text-4xl" />
          </a>
          <a href="https://www.facebook.com/A1Mamun178" target="_blank">
            <FaSquareFacebook className="lg:text-2xl xl:text-3xl 2xl:text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
