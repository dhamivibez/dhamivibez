import { ExternalLink } from 'lucide-react';
import { LuGithub } from 'react-icons/lu';
import { motion } from 'motion/react';

const Projects = () => {
  const projects = [
    {
      name: 'Flowzen',
      description: 'Modern landing page for AI automation platform with sleek design, workflow builder showcase, and integration demos — built to drive sign-ups.',
      demo: 'https://flowzen.pages.dev',
    },
    {
      name: 'Jokes Generator',
      description: 'Simple web app for generating random jokes with clean interface, category selection, and one-click humor — built to deliver instant laughs.',
      demo: 'https://jokes-generator.pages.dev/',
    },
    {
      name: 'Auth System',
      description: 'Clean authentication demo app with login/signup forms, secure user management, and session handling — built to showcase modern auth implementation.',
      demo: 'https://auth-system-wnp.pages.dev/',
    },
  ];

  return (
    <section id="projects" className="mt-20 mb-4 flex w-full scroll-mt-20 flex-col items-center">
      <motion.h2
        className="mb-4 text-4xl font-semibold text-purple-600"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div className="mt-4 grid w-[90%] grid-cols-1 gap-6 sm:grid-cols-2 md:w-[80%] lg:grid-cols-3">
        {projects.map(({ name, description, github, demo }, index) => (
          <motion.div
            key={index}
            initial={{ transform: 'translateY(50px)', opacity: 0 }}
            whileInView={{ transform: 'translateY(0px)', opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            className="flex min-h-[150px] flex-col justify-between rounded-md border border-white/20 bg-purple-900/10 p-4 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-1 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-600/30"
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-400">{name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{description}</p>
            </div>

            <div className="mt-6 flex justify-between gap-4">
              

              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                <ExternalLink size={18} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
