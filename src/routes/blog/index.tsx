import BlogHeader from '@/components/BlogHeader';
import { createFileRoute } from '@tanstack/react-router';
import PostCard from '@/components/ui/PostCard';

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="pt-12 md:pt-16">
      <BlogHeader />
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 md:px-16 lg:grid-cols-4">
        <PostCard
          title="10 Things I Learned Building My Portfolio"
          description="A breakdown of lessons from building a modern, full-stack portfolio site using TanStack, Supabase, and Cloudflare Workers."
          link="/blog/portfolio-lessons"
          category="General"
        />
      </div>
    </div>
  );
}
