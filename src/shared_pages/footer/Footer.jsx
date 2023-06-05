import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-8">
        <h1 className="text-xl font-semibold">
          Copyright © 2023. All rights are reserved by Mafuz
        </h1>
        <div className="flex mt-2 text-3xl gap-2">
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
