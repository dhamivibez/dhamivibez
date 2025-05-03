import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactData);
  };

  return (
    <section id="contact" className="mt-24 mb-4 flex w-full scroll-mt-20 flex-col items-center text-white">
      <h2 className="mb-4 text-4xl font-semibold text-purple-600">Contact</h2>
      <form className="mt-4 w-[90%] max-w-sm space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-purple-600 focus:bg-purple-600/5 focus:outline-none"
          placeholder="Name"
          value={contactData.name}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-purple-600 focus:bg-purple-600/5 focus:outline-none"
          placeholder="Email"
          value={contactData.email}
        />
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          rows={5}
          className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
          placeholder="Your Message..."
          value={contactData.message}
        ></textarea>
        <Button type="submit" className="w-full bg-purple-600 py-6 hover:bg-purple-600/90">
          Submit
        </Button>
      </form>
    </section>
  );
};
export default Contact;
