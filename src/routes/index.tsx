import Header from '@/components/Header';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className="mt-12">
      <Header />
    </div>
  );
}
