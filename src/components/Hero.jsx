import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: delay,
        },
    },
});

const Hero = () => {
    return (
        <section className="hero min-h-screen w-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    src="./src/assets/Dius.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <motion.h1
                        variants={container(0.2)}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl sm:text-7xl font-thin tracking-tighter"
                    >
                        Dius Montenegro
                    </motion.h1>
                    <motion.span
                        variants={container(0.8)}
                        initial="hidden"
                        animate="visible"
                        className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                    >
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                        variants={container(1.4)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-2 font-light tracking-tighter"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.a
                        variants={container(1.8)}
                        initial="hidden"
                        animate="visible"
                        className="btn btn-outline btn-primary"
                        href="./src/assets/resume/Resume-Dius.pdf"
                        download="Dius_Resume"
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
