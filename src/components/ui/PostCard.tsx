import { formatDate } from '@/utils/formatDate';

const BlogCard = ({ title, description, link, date }: { title: string; description: string; link: string; date: string }) => {
  const formattedDate = formatDate(date);
  return (
    <div className="flex min-h-[150px] flex-col justify-between rounded-md border border-white/20 bg-purple-900/10 p-4 shadow-md transition-all duration-300 ease-in-out hover:border-purple-600 hover:shadow-xl">
      <div className="flex flex-grow flex-col justify-between">
        <h3 className="text-xl font-semibold text-purple-400">{title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{description}</p>
        {formattedDate && <p className="mt-2 text-xs text-zinc-400">{formattedDate}</p>}
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
