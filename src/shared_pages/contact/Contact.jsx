import { FaLocationArrow } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="max-w-5xl mx-auto py-28">
      <h3 className="text-xl uppercase font-bold text-[#187EFA]">Contact</h3>
      <h1 className="text-2xl font-semibold my-2">
        Don't be shy! Hit me Up!👇
      </h1>
      <div className="flex gap-16 mt-5">
        <div className="flex items-center gap-4">
          <span className="p-5 text-3xl rounded-full shadow-2xl text-blue-900">
            <FaLocationArrow />
          </span>
          <div>
            <h1 className="text-xl font-semibold">Location</h1>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="p-5 text-3xl rounded-full shadow-2xl text-blue-900">
            <HiMailOpen />
          </span>
          <div>
            <h1 className="text-xl font-semibold">Mail</h1>
            <p className="text-gray-600">mdmahafuzur4747@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
