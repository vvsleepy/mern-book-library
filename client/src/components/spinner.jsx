const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative h-16 w-16 m-8">
        {/* Soft pastel ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 animate-ping opacity-70"></div>

        {/* Inner solid pastel circle */}
        <div className="absolute inset-2 rounded-full bg-white shadow-inner shadow-pink-100"></div>
      </div>
    </div>
  );
};

export default Spinner;
