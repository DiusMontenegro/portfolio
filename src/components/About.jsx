import { motion } from 'framer-motion';
import aboutImg from '../assets/about.avif';
import { ABOUT_TEXT } from '../constants';

const About = () => {
    return (
        <div className="px-4 sm:px-10 py-4 flex flex-wrap justify-center items-center">
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8 flex justify-center"
            >
                <img
                    src={aboutImg}
                    alt="about"
                    className="rounded-lg"
                    width={400}
                />
            </motion.div>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-start"
            >
                <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </motion.div>
        </div>
    );
};

export default About;
