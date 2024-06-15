import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I'm a Frontend Developer focused on React, with exposure to Full Stack Development. I'm a passionate coder driven by tech innovation, a quick learner, and eager to tackle new challenges. My collaborative spirit makes me a valuable team member, always striving to enhance my skills and contribute to meaningful projects.`;

export const ABOUT_TEXT = `I am a versatile frontend developer passionate about creating efficient and user-friendly web applications. With 1 year of coding experience, I've worked with various technologies, including React, Node.js, MySQL, MVC framework (CodeIgniter), Next.js, and MongoDB. My journey in web development started with a deep curiosity about how things work and has grown into a career focused on continuous learning and adaptation. I thrive in collaborative environments and enjoy solving problems to deliver effective solutions. I stay active, explore new technologies, and build projects based on the knowledge I've gained.`;

export const EXPERIENCES = [
    {
        year: "Apr 2023 - Dec 2023",
        role: "Customer Service Representative (CSR)",
        company: "Chirpish LLC.",
        description: `Promoted as an email support (NON-VOICE) within 3 weeks. Awarded 2x Best in Customer Service, 4x Best in Email Support.`,
        technologies: ["Shopify", "Konnektive CRM", "Dialpad"],
    },
    {
        year: "Oct 2022 - Apr 2023",
        role: "Website Management VA",
        company: "T&Co Virtual assistance",
        description: `Effectively enhanced the T&Co. website, resulting in a monthly average increase of 22 clients. Awarded as a Top Trainee and got promoted as Website management VA for the company operations.`,
        technologies: ["Weebly", "SEO", "Google Analytics"],
    },
];

export const PROJECTS = [
    {
        title: "Shady Shop: E-Commerce Website",
        image: project1,
        link: "https://youtu.be/al8bGhoxZIE",
        description:
            "Shady Shop: MERN Stack e-commerce with sleek UI, Express and MongoDB backend, and seamless PayPal checkout. Users browse, search, purchase; admins manage users, products.",
        technologies: ["React", "Redux", "Node/Express", "MongoDB"],
    },
    {
        title: "Axiomcast: Video Conference App",
        image: project2,
        link: "https://axiomcast.vercel.app",
        description:
            "AxiomCast: Empowering teams with cutting-edge virtual collaboration. Crystal-clear video conferencing, interactive screen sharing, and advanced meeting controls redefine teamwork.",
        technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    },
    {
        title: "Product Dashboard",
        image: project4,
        link: "https://www.youtube.com/watch?v=WL8FgM3h_R0",
        description:
            "Product Dashboard is a CodeIgniter web app for managing products and user accounts, with admin controls, reviews, and MySQL data storage.",
        technologies: ["PHP", "CodeIgniter 3", "WAMP", "mySQL"],
    },
    {
        title: "Food.",
        image: project3,
        link: "https://food-sepia-one.vercel.app/",
        description:
            "A full-stack CRUD app for managing food products. Create, view, update, and delete items using React Query, Tailwind CSS, DaisyUI, and Firebase.",
        technologies: ["React-Query", "Firebase", "Tailwind"],
    },
];

export const CONTACT = {
    address: "President Roxas, North Cotabato, Philippines, 9405",
    phoneNo: "+63 970 460 7775",
    email: "montenegrodiussantos1@gmail.com",
};
