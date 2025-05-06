import BlogHeader from '@/components/BlogHeader';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BlogHeader />
    </div>
  );
}
