import {
  backend,
  creator,
  css,
  docker,
  figma,
  futurionic,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Familiar to React Native",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Jr. Full Stack Developer",
    company_name: "Futurionic Intern",
    icon: futurionic,
    iconBg: "#383E56",
    date: "Jun 2022 - Nob 2022",
    points: [
      "Developing and maintaining web applications using React.js, PostgreSQL and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr. Full Stack Developer",
    company_name: "Futturionic",
    icon: futurionic,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js, Node.Js, Mongodb, PostgreSQL, Mongoose and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "Member",
    company: "Futurionic",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "Member",
    company: "Futurionic",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Member",
    company: "Futurionic",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quora",
    description:
      "Web-based platform that allows users to enroll in Course and can watch their enrolled course content in their dashboard. Users can filter on courses by author name and course name or title",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ibb.co/Pcx3cMM/Screenshot-from-2023-12-21-12-18-00.png",
    source_code_link: "https://github.com/readul-islam/Frontend-Assignement",
  },
  {
    name: "Fliqa Indaia",
    description:
      "Fliqa Indaia is a Static full responsive project. it also has scrolling behavior. Technology used React, Tailwind, Swiper and more.it has 4+ section . every section fully responsive",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Swiper",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/xMP5Mp0/Screenshot-from-2023-12-21-12-27-23.png",
    source_code_link: "https://github.com/readul-islam/fliqaindia-task",
  },
  {
    name: "Panda",
    description:
      "Panda is a small project for E-commerce solution. it has beautiful slider and beautiful card which full responsive.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/k5xrWFZ/Screenshot-from-2023-12-21-12-35-57.png",
    source_code_link: "https://github.com/readul-islam/panda-ecomarce",
  },
  {
    name: "Laptop Store",
    description:
      "Laptop Store is small project where you can add item in your cart . you can't add one item in cart two times. you can also remove cart item from cart.Technology used react and tailwind",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/ZhPdNW9/Screenshot-from-2023-12-21-15-42-34.png",
    source_code_link: "https://github.com/readul-islam/Laptops-Store-website",
  },
];

export { experiences, projects, services, technologies, testimonials };
