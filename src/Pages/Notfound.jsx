import { Link } from "react-router-dom";
import notFoundImg from "../assets/notfound.png";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
      <div className="max-w-xl text-center">
        
        <img
          src={notFoundImg}
          alt="404 Not Found"
          className="w-full max-w-md mx-auto mb-8"
        />

        <h1 className="text-5xl font-extrabold text-slate-800 mb-3">
          404
        </h1>

        <h2 className="text-2xl font-bold text-slate-700 mb-4">
          Page Not Found
        </h2>

        <p className="text-slate-500 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3
                    bg-blue-600 text-white font-bold rounded-lg
                    shadow-md hover:bg-blue-700 hover:shadow-lg
                    transition-all duration-300"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
