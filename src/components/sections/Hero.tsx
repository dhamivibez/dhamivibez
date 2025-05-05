import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="flex h-screen w-full justify-center">
      <div className="flex flex-col items-center justify-center space-y-8 px-4 py-6">
        <motion.h1
          className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-center text-5xl font-extrabold text-transparent md:text-7xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Hi, I'm Dhamivibez
        </motion.h1>

        <motion.p
          className="mx-auto text-center text-base leading-loose tracking-tight sm:w-[80%] sm:text-lg lg:w-[60%] lg:text-xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m a full-stack developer focused on crafting fast, scalable web apps with clean architecture and seamless UX. I turn complex problems into
          elegant, reliable solutions.
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Button
              className="bg-accent border-accent hover:bg-accent/80 cursor-pointer px-4 py-6 hover:-translate-y-0.5"
              onClick={() => (window.location.href = '#contact')}
            >
              Contact Me
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="border-accent hover:bg-accent/20 hover: cursor-pointer bg-transparent px-4 py-6 hover:-translate-y-0.5"
              onClick={() => (window.location.href = '#projects')}
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
