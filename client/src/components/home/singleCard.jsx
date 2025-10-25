/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./bookModel";
import { useState } from "react";

const SingleCard = ({ item }) => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div
      key={item._id}
      className="relative border-2 border-pink-200 bg-white/70 backdrop-blur-md rounded-3xl p-6 m-4 shadow-md shadow-pink-100 hover:shadow-pink-300 hover:scale-[1.03] transition-all duration-300 ease-in-out"
    >
      {/* Year tag */}
      <h2 className="absolute top-2 right-3 px-4 py-1 bg-pink-200 text-pink-700 text-sm font-medium rounded-full shadow-sm">
        {item.publishYear}
      </h2>

      {/* ID */}
      <h2 className="my-3 text-gray-400 text-xs tracking-widest">{item._id}</h2>

      {/* Title */}
      <div className="flex items-center gap-x-3 mb-2">
        <PiBookOpenTextLight className="text-pink-400 text-2xl" />
        <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
      </div>

      {/* Author */}
      <div className="flex items-center gap-x-3">
        <BiUserCircle className="text-purple-400 text-2xl" />
        <h2 className="text-md italic text-gray-600">{item.author}</h2>
      </div>

      {/* Operations */}
      <div className="flex justify-around items-center gap-x-3 mt-6">
        <BiShow
          className="text-3xl text-pink-400 hover:text-pink-600 cursor-pointer transition-transform hover:scale-110"
          onClick={() => setShowModel(true)}
        />
        <Link to={`/books/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-purple-500 hover:text-purple-700 transition-transform hover:scale-110" />
        </Link>
        <Link to={`/books/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-rose-400 hover:text-rose-600 transition-transform hover:scale-110" />
        </Link>
        <Link to={`/books/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-400 hover:text-red-600 transition-transform hover:scale-110" />
        </Link>
      </div>

      {/* Modal */}
      {showModel && <BookModel item={item} onClose={() => setShowModel(false)} />}
    </div>
  );
};

export default SingleCard;
