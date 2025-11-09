import { useState } from 'react';
import { motion } from 'motion/react';
// import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import SocialIcons from '@/components/ui/SocialIcons';

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     await axios.post('https://dhamivibez-contact.dhamivibez.workers.dev/contact', contactData);
  //     toast.success('Message sent successfully!');
  //   } catch (error: any) {
  //     toast.error(error?.response?.data?.message || 'Server error occurred.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section id='contact' className='mt-24 mb-4 flex w-full scroll-mt-20 flex-col items-center'>
      <motion.h2
        className='mb-4 text-4xl font-semibold text-purple-600'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h2>

      <motion.form className='mt-4 w-[90%] max-w-sm space-y-4'>
        <motion.input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          className='w-full rounded border border-white/10 bg-white/5 px-4 py-3 transition focus:border-purple-600 focus:bg-purple-600/5 focus:outline-none'
          placeholder='Name'
          value={contactData.name}
          required
          initial={{ transform: 'translateY(50px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.4, once: true }}
        />
        <motion.input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          className='w-full rounded border border-white/10 bg-white/5 px-4 py-3 transition focus:border-purple-600 focus:bg-purple-600/5 focus:outline-none'
          placeholder='Email'
          value={contactData.email}
          initial={{ transform: 'translateY(50px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.4, once: true }}
        />
        <motion.textarea
          id='message'
          name='message'
          onChange={handleChange}
          rows={5}
          className='w-full rounded border border-white/10 bg-white/5 px-4 py-3 transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none'
          placeholder='Your Message...'
          value={contactData.message}
          initial={{ transform: 'translateY(50px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.4, once: true }}
        ></motion.textarea>
        <motion.button
          type='submit'
          disabled={loading}
          className='inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2 hover:bg-purple-600/90 disabled:cursor-not-allowed disabled:bg-neutral-500'
          initial={{ transform: 'translateY(50px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
          animate={{ transform: 'translateY(0px)', opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.4, once: true }}
        >
          {loading ? <Loader2 size={18} className='animate-spin' /> : ''}
          Submit
        </motion.button>
      </motion.form>

      <SocialIcons className='mt-8' delay={0.5} />
    </section>
  );
};

export default Contact;
