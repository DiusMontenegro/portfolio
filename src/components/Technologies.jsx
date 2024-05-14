import { FaReact, FaNode } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';
import { SiRedux, SiExpress } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiCodeigniter } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { RiSupabaseFill } from 'react-icons/ri';
import { animate, motion } from 'framer-motion';

const iconMovements = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
});

const Technologies = ({ theme }) => {
    return (
        <div className="mb-8">
            <motion.h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl text-center font-light my-2 p-2"
            >
                Technologies
            </motion.h1>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="px-2 sm:px-10 py-4 flex flex-wrap justify-center items-center gap-4"
            >
                <motion.div
                    variants={iconMovements(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <FaReact className="text-7xl text-[#00AEEF]" />
                </motion.div>
                <motion.div
                    variants={iconMovements(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <SiRedux className="text-7xl text-purple-500" />
                </motion.div>
                <motion.div
                    variants={iconMovements(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <BiLogoMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={iconMovements(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <TbBrandNextjs
                        className={`text-7xl ${
                            theme === 'dark'
                                ? 'text-[#f2f2f2]'
                                : 'text-[#1c1c1c]'
                        }`}
                    />
                </motion.div>
                <motion.div
                    variants={iconMovements(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <DiCodeigniter className="text-7xl text-red-500" />
                </motion.div>
                <motion.div
                    variants={iconMovements(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <SiExpress
                        className={`text-7xl ${
                            theme === 'dark' ? 'text-gray-300' : 'text-black'
                        }`}
                    />
                </motion.div>
                <motion.div
                    variants={iconMovements(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <FaNode className="text-7xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconMovements(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <GrMysql className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div
                    variants={iconMovements(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-500 p-4"
                >
                    <RiSupabaseFill className="text-7xl text-green-500" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
