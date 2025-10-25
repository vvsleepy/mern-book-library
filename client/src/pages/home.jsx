import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import BookCard from "../components/home/bookCard";
import BookTable from "../components/home/bookTable";
import { MdOutlineAddBox } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5001/api/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      {/* Toggle Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            className={`px-5 py-2 rounded-full font-medium shadow-sm transition-all duration-300 ${
              showType === "table"
                ? "bg-pink-300 text-white shadow-pink-200"
                : "bg-white/70 text-pink-600 hover:bg-pink-100"
            }`}
            onClick={() => setShowType("table")}
          >
            ۶ৎ Table
          </button>

          <button
            className={`px-5 py-2 rounded-full font-medium shadow-sm transition-all duration-300 ${
              showType === "card"
                ? "bg-pink-300 text-white shadow-pink-200"
                : "bg-white/70 text-pink-600 hover:bg-pink-100"
            }`}
            onClick={() => setShowType("card")}
          >
            ۶ৎ Card
          </button>
        </div>

        {/* Add Book Button */}
        <Link
          to="/books/create"
          className="flex items-center justify-center bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 text-white rounded-full px-5 py-2 shadow-md hover:shadow-pink-200 hover:scale-105 transition-all duration-300"
        >
          <MdOutlineAddBox className="text-3xl mr-2" />
          <span className="text-lg font-medium">Add Book</span>
        </Link>
      </div>

      <h1 className="text-4xl font-semibold text-center text-pink-700 mb-8 tracking-wide">
        ⋆˚꩜｡ My Book Collection ⋆˚꩜｡
      </h1>

      {/* Content */}
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <div className="bg-white/80 p-4 rounded-3xl shadow-md shadow-pink-100">
          <BookTable books={books} />
        </div>
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
