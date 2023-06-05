import about from "../../assets/About/about.jpg";
// import about_one from "../../assets/About/about_one.png";
const About = () => {
  return (
    <div
      id="about"
      className="max-w-5xl mx-auto py-40 flex justify-between gap-10"
    >
      <div className="w-1/2 relative">
        <img className="w-full rounded-lg shadow-sm" src={about} alt="" />
        {/* <img className="" src={about_one} alt="" /> */}
      </div>
      <div className="w-1/2">
        <h1 className="text-[#147EFA] font-bold text-[17px]">ABOUT ME</h1>
        <h3 className="text-2xl font-semibold my-2">
          A dedicated Front-end Developer
          <br />
          based in Dhaka, Bangladesh📍
        </h3>
        <p className="text-[15px] text-gray-700 font-medium">
          To kick-start my career as a front-end developer, I am seeking an
          opportunity to apply my passion for coding and design to create
          visually appealing and user-friendly websites. I am eager to expand my
          skills and explore new technologies to bring innovative ideas.
        </p>
        <h3 className="font-bold mt-2">My SKIlls:</h3>
        <ul className="text-[16px] font-bold">
          <li>
            Expertise:
            <span className="font-medium ml-3 text-sm">
              HTML | CSS | BootStrap | TailWind | React | FireBase | APIs |
              React Router
            </span>
          </li>
          <li>
            Comfortable:
            <span className="font-medium ml-3 text-sm">
              JavaScript | ExpressJS | JWT | Node
            </span>
          </li>
          <li>
            Tools:
            <span className="font-medium ml-3 text-sm">
              VS Code | Git | GitHub | Figma | Netlify | Vercel
            </span>
          </li>
          <li>
            OS:
            <span className="font-medium ml-3 text-sm">
              Window 10/11 | Linux
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
