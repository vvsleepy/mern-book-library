import { useState } from "react";
import BackButton from "../components/backButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleBookSave = () => {
    const data = { title, author, publishYear };
    setLoading(true);

    axios
      .post("http://localhost:5001/api/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully 💕", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error Creating Book 😢", { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <BackButton />

      <h1 className="text-4xl text-center font-semibold text-pink-700 my-6 tracking-wide drop-shadow-sm">
        ✨ Create a New Book ✨
      </h1>

      {loading && <Spinner />}

      <div className="flex flex-col bg-white/80 backdrop-blur-md border border-pink-200 rounded-3xl shadow-lg shadow-pink-100 w-[600px] max-w-full p-6 mx-auto">
        {/* Title */}
        <div className="my-4">
          <label
            htmlFor="title"
            className="text-lg font-medium text-pink-700 block mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border border-pink-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Author */}
        <div className="my-4">
          <label
            htmlFor="author"
            className="text-lg font-medium text-pink-700 block mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            className="border border-pink-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 focus:outline-none"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {/* Publish Year */}
        <div className="my-4">
          <label
            htmlFor="publishYear"
            className="text-lg font-medium text-pink-700 block mb-2"
          >
            Publish Year
          </label>
          <input
            type="text"
            id="publishYear"
            className="border border-pink-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-pink-300 focus:outline-none"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleBookSave}
          className="mt-6 mx-auto px-6 py-2 bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 
                     text-pink-900 font-semibold rounded-full shadow-md shadow-pink-100 
                     hover:scale-105 hover:shadow-pink-300 transition-all duration-300"
        >
          💾 Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
