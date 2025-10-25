import { useState, useEffect } from "react";
import Spinner from "../components/spinner";
import BackButton from "../components/backButton";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5001/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <BackButton />
      <h1 className="text-4xl text-center font-semibold text-pink-700 my-8 tracking-wide drop-shadow-sm">
        📚 Book Details
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col bg-white/80 backdrop-blur-md border border-pink-200 
                        rounded-3xl shadow-lg shadow-pink-100 max-w-[600px] mx-auto p-8 text-gray-700">
          <div className="my-4">
            <span className="text-lg font-semibold text-pink-600 mr-3">📖 ID:</span>
            <span className="text-lg">{book._id}</span>
          </div>

          <div className="my-4">
            <span className="text-lg font-semibold text-purple-600 mr-3">💫 Title:</span>
            <span className="text-lg">{book.title}</span>
          </div>

          <div className="my-4">
            <span className="text-lg font-semibold text-rose-600 mr-3">👩‍💻 Author:</span>
            <span className="text-lg">{book.author}</span>
          </div>

          <div className="my-4">
            <span className="text-lg font-semibold text-pink-600 mr-3">📅 Publish Year:</span>
            <span className="text-lg">{book.publishYear}</span>
          </div>

          <div className="my-4">
            <span className="text-lg font-semibold text-purple-600 mr-3">🕒 Created:</span>
            <span className="text-lg">
              {book.createdAt ? new Date(book.createdAt).toLocaleString() : ""}
            </span>
          </div>

          <div className="my-4">
            <span className="text-lg font-semibold text-rose-600 mr-3">🕕 Updated:</span>
            <span className="text-lg">
              {book.updatedAt ? new Date(book.updatedAt).toLocaleString() : ""}
            </span>
          </div>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-500 italic">
              “A room without books is like a body without a soul.” 💕
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
