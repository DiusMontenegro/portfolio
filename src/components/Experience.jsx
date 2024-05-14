import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="px-4 sm:px-10 py-8">
            {EXPERIENCES.map((experience, index) => (
                <div
                    key={index}
                    className="mb-8 flex flex-wrap lg:justify-center"
                >
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/4"
                    >
                        <p className="mb-2 text-sm text-base-content">
                            {experience.year}
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 40, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl lg:w-3/4"
                    >
                        <p className="mb-2 text-sm text-base-content">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{' '}
                                <span className="text-sm text-primary">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-base-content">
                                {experience.description}
                            </p>
                            {experience.technologies.map(
                                (technology, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-4 rounded bg-primary px-2 py-1 text-xs font-medium text-gray-100"
                                    >
                                        {technology}
                                    </span>
                                )
                            )}
                        </p>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
