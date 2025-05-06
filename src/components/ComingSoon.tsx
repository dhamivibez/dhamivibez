import { Link } from '@tanstack/react-router';

const ComingSoon = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 px-4">
      <div className="w-full max-w-lg rounded-2xl border border-purple-700 bg-gray-950/80 p-10 text-center shadow-2xl backdrop-blur-md md:p-16">
        <h1 className="mb-6 text-5xl font-extrabold text-purple-400 drop-shadow md:text-6xl">Coming Soon</h1>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">We're cooking up something awesome 🍽️</h2>
        <p className="mb-8 text-lg text-gray-400 md:text-xl">The new experience is almost ready. Stay tuned for the launch!</p>
        <Link
          to="/"
          className="inline-block rounded-full bg-purple-600 px-8 py-3 text-lg font-semibold shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
