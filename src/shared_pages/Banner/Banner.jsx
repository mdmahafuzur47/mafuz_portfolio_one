import myImg from "../../assets/myImg/myImg.png";
import {
  FaLinkedin,
  FaGithub,
  FaBootstrap,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const Banner = () => {
  return (
    <div className="bg-[#F9F9F9] mt-[64px]">
      <div className="max-w-5xl mx-auto py-20 flex justify-between gap-20 items-center">
        <div>
          <h1 className="text-6xl font-medium mb-3">
            Front-End React
            <br />
            Developer👋
          </h1>
          <p className="text-xl text-gray-600">
            Hi, I'm Mahafuzur Rahaman.A passionate Front-end React Developer
            Based in Dhaka, Bangladesh📍
          </p>
          <div className="flex mt-2 text-3xl gap-2">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </div>
        <div
          className="border-[4px] border-gray-600"
          style={{
            transition: "all 1s ease-in-out",
            animation: "morph 8s ease-in-out infinite",
            backgroundImage: `url(${myImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            height: "25rem",
            position: "relative",
            width: "30rem",
          }}
        ></div>
      </div>
      <div className="max-w-5xl text-2xl font-medium mx-auto pb-12 flex gap-10 items-center">
        <h1>
          Tech Stack <span className="ml-2 text-3xl">|</span>
        </h1>
        <div className="flex text-4xl gap-5">
          <span className="p-3 bg-white rounded-full border shadow-sm text-[#E34F26]">
            <AiFillHtml5 />
          </span>
          <span className="p-3 bg-white rounded-full border shadow-sm text-[#1672B6]">
            <FaCss3Alt />
          </span>
          <span className="p-3 bg-white rounded-full border shadow-sm text-[#F7E039]">
            <TbBrandJavascript />
          </span>
          <span className="p-3 bg-white rounded-full border shadow-sm text-[#53C1DD]">
            <FaReact />
          </span>
          <span className="p-3 bg-white rounded-full border shadow-sm text-[#3EBFF8]">
            <SiTailwindcss />
          </span>
          <span className="p-3 bg-white rounded-full border shadow-sm text-[#26e3d9]">
            <FaBootstrap />
          </span>
          <span className="p-3 bg-white rounded-full border shadow-sm text-[#4526e3]">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
