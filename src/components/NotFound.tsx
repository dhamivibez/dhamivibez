import { Link } from '@tanstack/react-router';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-purple-700 bg-gray-950/80 p-10 text-center shadow-2xl backdrop-blur-md md:p-16">
        <h1 className="mb-6 text-7xl font-extrabold text-purple-400 drop-shadow">404</h1>
        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">You’ve wandered off.</h2>
        <p className="mb-8 text-lg text-gray-400 md:text-xl">The page you're looking for doesn't exist. Let's teleport you back to safety.</p>
        <Link
          to="/"
          className="inline-block rounded-full bg-purple-600 px-8 py-3 text-lg font-semibold shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
