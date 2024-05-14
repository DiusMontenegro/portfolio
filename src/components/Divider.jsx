import { motion } from 'framer-motion';

const Divider = ({ text }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full px-4 sm:px-10"
        >
            <div className="divider divider-primary text-base-content text-lg lg:text-3xl font-light">
                {text}
            </div>
        </motion.div>
    );
};

export default Divider;
