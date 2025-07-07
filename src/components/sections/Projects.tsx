import { ExternalLink } from 'lucide-react';
import { LuGithub } from 'react-icons/lu';
import { motion } from 'motion/react';

const Projects = () => {
  const projects = [
    {
      name: 'LocalEats',
      description: 'Modern landing page for restaurants with a bold hero, menu preview, and contact info — built to drive bookings.',
      demo: 'https://localeats-demo.vercel.app',
      github: 'https://github.com/youruser/localeats',
    },
    {
      name: 'SharpCuts',
      description: 'Stylish landing page tailored for barbershops with services, pricing, and customer testimonials, optimized for mobile bookings.',
      demo: 'https://sharpcuts-demo.vercel.app',
      github: 'https://github.com/youruser/sharpcuts',
    },
    {
      name: 'Cleanly',
      description: 'Sleek, trust-driven landing page for local home cleaning services, featuring service tiers and CTA for quotes.',
      demo: 'https://cleanly-demo.vercel.app',
      github: 'https://github.com/youruser/cleanly',
    },
    {
      name: 'Eventify',
      description: 'Event landing page with RSVP form, event details, and social sharing links to drive participation.',
      demo: 'https://eventify-demo.vercel.app',
      github: 'https://github.com/youruser/eventify',
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
