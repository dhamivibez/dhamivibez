import { motion } from 'motion/react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';

interface SocialIconsProps {
  className?: string;
  delay?: number;
}

const SocialIcons = ({ className = '', delay = 0 }: SocialIconsProps) => {
  return (
    <motion.div
      className={`flex space-x-6 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: delay,
      }}
      viewport={{ once: true }}
    >
      <motion.a
        href='https://github.com/dhamivibez'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white/70 transition-colors duration-300 hover:scale-110 hover:text-white'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.2, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <LuGithub size={24} />
      </motion.a>
      <motion.a
        href='https://x.com/0xdhamivibez'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white/70 transition-colors duration-300 hover:scale-110 hover:text-white'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.4, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <FaXTwitter size={24} />
      </motion.a>
      <motion.a
        href='https://linkedin.com/in/dhamivibez'
        target='_blank'
        rel='noopener noreferrer'
        className='text-white/70 transition-colors duration-300 hover:scale-110 hover:text-white'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.6, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <LuLinkedin size={24} />
      </motion.a>
    </motion.div>
  );
};

export default SocialIcons;
