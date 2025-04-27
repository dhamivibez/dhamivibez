import { Link } from '@tanstack/react-router'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 px-4">
      <div className="bg-gray-950/80 backdrop-blur-md border border-purple-700 rounded-2xl p-10 md:p-16 text-center shadow-2xl max-w-lg w-full">
        <h1 className="text-7xl font-extrabold text-purple-400 drop-shadow mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          You’ve wandered off.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          The page you're looking for doesn't exist. Let's teleport you back to
          safety.
        </p>
        <Link
          to="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
export default NotFound
