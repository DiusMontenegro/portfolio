import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';

export const HERO_CONTENT = `
I'm a Frontend Developer focused on React, with exposure to Full Stack Development. I'm a passionate coder driven by tech innovation, a quick learner, and eager to tackle new challenges. My collaborative spirit makes me a valuable team member, always striving to enhance my skills and contribute to meaningful projects.`;

export const ABOUT_TEXT = `I am a versatile frontend developer passionate about creating efficient and user-friendly web applications. With 1 year of coding experience, I've worked with various technologies, including React, Node.js, MySQL, MVC framework (CodeIgniter), Next.js, and MongoDB. My journey in web development started with a deep curiosity about how things work and has grown into a career focused on continuous learning and adaptation. I thrive in collaborative environments and enjoy solving problems to deliver effective solutions. Outside of coding, I stay active, explore new technologies, and build projects based on the knowledge I've gained.`;

export const EXPERIENCES = [
    {
        year: '2023 - Present',
        role: 'Senior Full Stack Developer',
        company: 'Google Inc.',
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
    },
    {
        year: '2022 - 2023',
        role: 'Frontend Developer',
        company: 'Adobe',
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ['HTML', 'CSS', 'Vue.js', 'mySQL'],
    },
    {
        year: '2021 - 2022',
        role: 'Full Stack Developer',
        company: 'Facebook',
        description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
        technologies: ['Python', 'Svelte', 'Three.js', 'Postgres'],
    },
    {
        year: '2020 - 2021',
        role: 'Software Engineer',
        company: 'Paypal',
        description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
        technologies: ['Ruby', 'Rails', 'PHP', 'Sqlite'],
    },
];

export const PROJECTS = [
    {
        title: 'Shady Shop: E-Commerce Website',
        image: project1,
        description:
            'Shady Shop: MERN Stack e-commerce with sleek UI, Express and MongoDB backend, and seamless PayPal checkout. Users browse, search, purchase; admins manage users, products.',
        technologies: ['React', 'Redux', 'Node/Express', 'MongoDB'],
    },
    {
        title: 'Axiomcast: Video Conference App',
        image: project2,
        description:
            'AxiomCast: Empowering teams with cutting-edge virtual collaboration. Crystal-clear video conferencing, interactive screen sharing, and advanced meeting controls redefine teamwork.',
        technologies: ['Nextjs', 'Typescript', 'Tailwind CSS'],
    },
    {
        title: 'Product Dashboard',
        image: project4,
        description:
            'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
        technologies: ['PHP', 'CodeIgniter 3', 'WAMP', 'mySQL'],
    },
    {
        title: 'DsTube',
        image: project3,
        description:
            'A personal portfolio website showcasing projects, skills, and contact information.',
        technologies: ['HTML', 'CSS', 'React', 'Bootstrap'],
    },
];

export const CONTACT = {
    address: 'President Roxas, North Cotabato, Philippines, 9405',
    phoneNo: '+63 970 460 7775',
    email: 'montenegrodiussantos1@gmail.com',
};
