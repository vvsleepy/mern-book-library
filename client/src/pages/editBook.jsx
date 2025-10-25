import { useState, useEffect } from "react";
import BackButton from "../components/backButton";
import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5001/api/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);

    axios
      .put(`http://localhost:5001/api/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Updated Successfully 💖", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error Updating Book 💔", { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <BackButton />

      <h1 className="text-4xl text-center font-semibold text-pink-700 my-6 tracking-wide drop-shadow-sm">
        ✨ Edit Book ✨
      </h1>

      {loading && <Spinner />}

      <div className="flex flex-col border border-pink-200 bg-white/80 backdrop-blur-lg rounded-3xl w-full max-w-[600px] p-8 mx-auto shadow-lg shadow-pink-100">
        {/* Title */}
        <div className="my-4">
          <label htmlFor="title" className="block text-lg font-medium text-pink-600 mb-2">
            📚 Title
          </label>
          <input
            type="text"
            id="title"
            className="border-2 border-pink-200 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/60"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Author */}
        <div className="my-4">
          <label htmlFor="author" className="block text-lg font-medium text-pink-600 mb-2">
            ✍️ Author
          </label>
          <input
            type="text"
            id="author"
            className="border-2 border-pink-200 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/60"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {/* Publish Year */}
        <div className="my-4">
          <label htmlFor="publishYear" className="block text-lg font-medium text-pink-600 mb-2">
            🗓 Publish Year
          </label>
          <input
            type="text"
            id="publishYear"
            className="border-2 border-pink-200 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white/60"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>

        {/* Save Button */}
        <button
          className="mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 shadow-md shadow-pink-200 hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={handleEditBook}
        >
          💾 Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditBook;
