/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 
                   text-pink-900 font-medium shadow-md shadow-pink-100 
                   px-4 py-2 rounded-full hover:shadow-pink-300 hover:scale-105 
                   transition-all duration-300 ease-in-out"
      >
        <BsArrow90DegLeft className="text-2xl mr-1 text-pink-700" />
        <span className="hidden sm:inline text-sm tracking-wide">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
