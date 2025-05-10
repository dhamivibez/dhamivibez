import BlogHeader from '@/components/BlogHeader';
import { createFileRoute } from '@tanstack/react-router';
import PostCard from '@/components/ui/PostCard';
import supabase from '@/lib/supabase';

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
  loader: async () => {
    const { data, error } = await supabase.from('blogs').select('*');

    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
});

function RouteComponent() {
  const blogs = Route.useLoaderData();

  return (
    <div className="pt-12 md:pt-16">
      <BlogHeader />
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:px-16 lg:grid-cols-4">
        {blogs.map((blog) => (
          <PostCard key={blog.id} title={blog.title} description={blog.description} link={`/blog/${blog.slug}`} date={blog.created_at} />
        ))}
      </div>
    </div>
  );
}
