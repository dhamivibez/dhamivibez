import { motion } from 'motion/react';

const About = () => {
  const frontend = [
    { id: 1, name: 'HTML & CSS' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Typescript' },
    { id: 4, name: 'TailwindCSS' },
    { id: 5, name: 'Tanstack Start' },
  ];

  const backend = [
    { id: 1, name: 'NodeJS' },
    { id: 2, name: 'ExpressJS' },
    { id: 4, name: 'Supabase' },
  ];

  const database = [
    { id: 1, name: 'MongoDB' },
    { id: 2, name: 'PostgreSQL' },
  ];

  return (
    <section id="about" className="mt-4 flex w-full scroll-mt-20 flex-col items-center text-white">
      <motion.h2
        className="mb-4 text-4xl font-semibold text-purple-600"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <div className="grid w-[90%] grid-cols-1 gap-6 md:w-[70%] md:grid-cols-3">
        <motion.p
          className="col-span-1 rounded-md border border-white/20 p-4 text-white shadow-md md:col-span-3 md:p-6"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          A full-stack developer passionate about crafting performant, scalable apps with the MERN stack and Supabase. I thrive on solving real-world
          problems with clean architecture, intuitive UI, and efficient backend logic — all while staying sharp with the latest tools and best
          practices.
        </motion.p>

        <motion.div
          className="rounded-md border border-white/20 p-4 text-white shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }} // Trigger when 40% is visible
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h4 className="mb-2 text-2xl font-semibold">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            {frontend.map(({ id, name }) => (
              <motion.p
                key={id}
                className="rounded-lg bg-purple-600 px-2 py-1 text-[12px] hover:bg-purple-600/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }} // Trigger when 40% is visible
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {name}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-md border border-white/20 p-4 text-white shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h4 className="mb-2 text-2xl font-semibold">Backend</h4>
          <div className="flex flex-wrap gap-2">
            {backend.map(({ id, name }) => (
              <motion.p
                key={id}
                className="rounded-lg bg-purple-600 px-2 py-1 text-[12px] hover:bg-purple-600/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {name}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-md border border-white/20 p-4 text-white shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h4 className="mb-2 text-2xl font-semibold">Database</h4>
          <div className="flex flex-wrap gap-2">
            {database.map(({ id, name }) => (
              <motion.p
                key={id}
                className="rounded-lg bg-purple-600 px-2 py-1 text-[12px] hover:bg-purple-600/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {name}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
