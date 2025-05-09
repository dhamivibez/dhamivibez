import supabase from '@/lib/supabase';
import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';

export const Route = createFileRoute('/admin/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const login = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword(loginData);
    if (error) {
      return toast.error(error.message);
    }
    toast.success('Login Successful');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <form className="w-full max-w-sm space-y-4 rounded-2xl bg-gray-900 p-6 shadow-lg" onSubmit={login}>
        <h2 className="text-center text-2xl font-semibold text-white">Login</h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
            placeholder="admin@example.com"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
            placeholder="••••••••"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="w-full rounded-md bg-purple-600 py-2 font-semibold text-white transition hover:bg-purple-600/80">
          Login
        </button>
      </form>
    </div>
  );
}
