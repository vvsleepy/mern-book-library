/* eslint-disable react/prop-types */

import SingleCard from "./singleCard";

const BookCard = ({ books }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-lavender-100 to-blue-100 py-10 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10 text-pink-700 tracking-wide drop-shadow-sm">
        💕 My Book Collection 💕
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {books.map((item) => (
          <div
            key={item._id}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md shadow-pink-200 hover:shadow-pink-300 hover:scale-105 transform transition duration-300 ease-in-out p-4 w-72"
          >
            <SingleCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
