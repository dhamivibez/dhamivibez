import BlogEditor from '@/components/Blog/BlogEditor';
import { ClientOnly, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/blog/create')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ClientOnly>
        <BlogEditor />
      </ClientOnly>
    </div>
  );
}
