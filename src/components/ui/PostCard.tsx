const BlogCard = ({ title, description, category, link }: { title: string; description: string; category: string; link: string }) => {
  return (
    <div className="flex min-h-[150px] flex-col justify-between rounded-md border border-white/20 bg-purple-900/10 p-4 shadow-md transition-all duration-300 ease-in-out hover:border-purple-600 hover:shadow-xl">
      <div className="flex flex-grow flex-col justify-between">
        <h3 className="text-xl font-semibold text-purple-400">{title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap">
        <button className="mr-2 mb-2 rounded-full border border-white/20 px-3 py-1 text-xs text-purple-400 transition hover:border-purple-600 hover:text-white">
          {category}
        </button>
      </div>

      <div className="mt-4">
        <a href={link} className="block w-full rounded-md border border-white/20 px-4 py-2 text-center text-sm transition hover:bg-white/10">
          Read
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
