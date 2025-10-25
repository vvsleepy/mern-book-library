import Spinner from "../components/spinner";
import { useState } from "react";
import BackButton from "./../components/backButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    setLoading(true);

    axios
      .delete(`http://localhost:5001/api/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully 💔", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error Deleting Book 😢", { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <BackButton />

      <h1 className="text-4xl text-center font-semibold text-pink-700 my-6 tracking-wide drop-shadow-sm">
        💕 Delete Book
      </h1>

      {loading && <Spinner />}

      <div className="flex flex-col items-center bg-white/80 backdrop-blur-md border border-pink-200 rounded-3xl shadow-lg shadow-pink-100 max-w-[600px] p-10 mx-auto text-center">
        <h2 className="text-2xl text-gray-700 my-4">
          Are you sure you want to delete this book? 📚
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          This action cannot be undone. Please confirm your choice.
        </p>

        <button
          onClick={handleDelete}
          className="px-6 py-3 bg-gradient-to-r from-rose-300 via-pink-300 to-red-300 
                     text-white font-semibold rounded-full shadow-md shadow-pink-200
                     hover:shadow-rose-400 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          💔 Yes, Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
