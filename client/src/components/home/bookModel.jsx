/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ item, onClose }) => {
  return (
    <div
      className="fixed bg-pink-200/40 backdrop-blur-sm top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[420px] bg-white/80 backdrop-blur-lg rounded-3xl p-6 flex flex-col relative shadow-lg shadow-pink-200 hover:shadow-pink-300 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <AiOutlineClose
          className="absolute top-5 right-5 text-pink-500 cursor-pointer hover:text-pink-700 transition-all duration-200"
          onClick={onClose}
          size={22}
        />

        {/* Year tag */}
        <h2 className="w-fit px-4 py-1 bg-pink-200 text-pink-800 font-medium rounded-full shadow-sm">
          {item.publishYear}
        </h2>

        {/* ID */}
        <h2 className="my-3 text-gray-400 text-sm tracking-wide">{item._id}</h2>

        {/* Title */}
        <div className="flex items-center gap-x-3 mt-2">
          <PiBookOpenTextLight className="text-pink-400 text-3xl" />
          <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-x-3 mt-3">
          <BiUserCircle className="text-pink-400 text-3xl" />
          <h2 className="text-lg text-gray-700 italic">{item.author}</h2>
        </div>

        {/* Footer / attribution */}
        <p className="mt-auto text-center text-pink-600 font-semibold text-lg tracking-wide">
           Curated by Ankita Tripathi ⋆. 𐙚 ˚
        </p>
      </div>
    </div>
  );
};

export default BookModel;
