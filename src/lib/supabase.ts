import { createClient } from '@supabase/supabase-js';

const supabase_url = 'https://kkidtfdttkcfffngzudo.supabase.co';
const anon_key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraWR0ZmR0dGtjZmZmbmd6dWRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2Nzc2NzIsImV4cCI6MjA2MTI1MzY3Mn0.9jh3ko8knqyE09yaTqZouNBUCi2zuzQf8wAxZ9vAazw';

const supabase = createClient(supabase_url, anon_key);

export default supabase;
