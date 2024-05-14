import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <div className="px-4 sm:px-10 py-4">
            {PROJECTS.map((project, index) => (
                <div
                    key={index}
                    className="mb-8 flex flex-wrap lg:justify-center"
                >
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/4 flex justify-center md:justify-start"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="mb-6 rounded w-[300px] md:w-[150px]"
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 40, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl lg:w-3/4"
                    >
                        <h6 className="mb-2 text-xl font-semibold">
                            {project.title}
                        </h6>
                        <p className="mb-4 text-base-content">
                            {project.description}
                        </p>
                        {project.technologies.map((technology, index) => (
                            <span
                                key={index}
                                className="mr-2 mt-4 rounded bg-primary px-2 py-1 text-xs font-medium text-gray-100"
                            >
                                {technology}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
