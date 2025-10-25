/* eslint-disable react/prop-types */
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BookTable = ({ books }) => {
  return (
    <div className="overflow-x-auto bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg shadow-pink-200 mt-8">
      <h2 className="text-3xl font-semibold text-center text-pink-700 mb-6 tracking-wide">
        📚 My Book Table 
      </h2>

      <table className="w-full border-separate border-spacing-2 text-center text-gray-700">
        <thead>
          <tr className="bg-gradient-to-r from-pink-100 to-purple-100">
            <th className="border border-pink-200 rounded-md py-2 text-pink-800 font-medium">
              No
            </th>
            <th className="border border-pink-200 rounded-md py-2 text-pink-800 font-medium">
              Title
            </th>
            <th className="border border-pink-200 rounded-md py-2 text-pink-800 font-medium max-md:hidden">
              Author
            </th>
            <th className="border border-pink-200 rounded-md py-2 text-pink-800 font-medium max-md:hidden">
              Publish Year
            </th>
            <th className="border border-pink-200 rounded-md py-2 text-pink-800 font-medium">
              Operation
            </th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="hover:bg-pink-50 transition-all duration-200 rounded-lg"
            >
              <td className="border border-pink-100 rounded-md py-2">
                {index + 1}
              </td>
              <td className="border border-pink-100 rounded-md py-2">
                {book.title}
              </td>
              <td className="border border-pink-100 rounded-md py-2 max-md:hidden">
                {book.author}
              </td>
              <td className="border border-pink-100 rounded-md py-2 max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-pink-100 rounded-md py-2">
                <div className="flex justify-center gap-5">
                  <Link
                    to={`books/details/${book._id}`}
                    className="hover:scale-110 transition-transform"
                  >
                    <BsInfoCircle className="text-2xl text-purple-500 hover:text-purple-700" />
                  </Link>
                  <Link
                    to={`books/edit/${book._id}`}
                    className="hover:scale-110 transition-transform"
                  >
                    <AiOutlineEdit className="text-2xl text-pink-500 hover:text-pink-700" />
                  </Link>
                  <Link
                    to={`books/delete/${book._id}`}
                    className="hover:scale-110 transition-transform"
                  >
                    <MdOutlineDelete className="text-2xl text-rose-500 hover:text-rose-700" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
