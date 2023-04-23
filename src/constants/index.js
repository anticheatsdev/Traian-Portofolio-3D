import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "HTML, CSS and JS Developer",
    company_name: "CVACODE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 27, 2022",
    points: [
      "As a junior front-end developer, I gained experience creating web-forms that required user input and sent information to designated email addresses.",
      "During a recent interview, I was tasked with building a web-form that would send information to my Gmail account upon submission.",
      "I successfully completed the task and gained valuable experience in utilizing form data and email integration.",
      "My work as a junior front-end developer has provided me with the skills necessary to create responsive and intuitive web-forms that enhance user experience.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Elecars",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2023",
    points: [
      "As a junior web developer, I developed an e-commerce website for Elecars, an electric car company.",
      "I gained experience in designing and developing a user-friendly and responsive website that enabled customers to purchase electric cars online.",
      "I used HTML, CSS, and JavaScript to create a seamless shopping experience for users.",
      "My work with Elecars allowed me to gain valuable experience in e-commerce website development and hone my skills as a junior web developer.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "TempoModer",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "As a React Native Developer for TempoModer, I designed and developed a responsive watches website using React.js.",
      "The website featured smooth scrolling in each section, and included both dark and light modes.",
      "I utilized the Mobile First methodology during development to ensure compatibility with all mobile devices, and optimized for desktop.",
      "My work with TempoModer allowed me to gain valuable experience in React.js development and create a visually appealing and functional website.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Traian is an exceptional FullStackDeveloper, with deep knowledge in front-end and back-end technologies. He delivers projects on time and to the highest standards.",
    name: "Miron Cezar",
    designation: "CFO",
    company: "Acme Co",
    image: "https://cdn.discordapp.com/attachments/1077685924864995340/1097632725340520600/CEZAR.png",
  },
  {
    testimonial:
      "Working with Traian on a complex web development project was a pleasure. His technical expertise and attention to detail were outstanding. He provides creative solutions to difficult challenges.",
    name: "Lucian Duca",
    designation: "COO",
    company: "DEF Corp",
    image: "https://cdn.discordapp.com/attachments/1077685924864995340/1097632934112014386/Lucian.png",
  },
  {
    testimonial:
      "Traian is a professional FullStackDeveloper who consistently delivers high-quality code and communicates effectively. I highly recommend him!",
    name: "Ștropșa Dorin",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://cdn.discordapp.com/attachments/858811765394898956/1097633925582573668/Dorin.png",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "A responsive car website created with HTML, CSS, and JavaScript featuring scrolling animations, smooth transitions between sections, a mobile-first approach, and compatibility with all mobile devices.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Java-Script",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://anticheatsdev.github.io/Elecars/",
  },
  {
    name: "Watches Website",
    description:
      "TempoModer is a responsive watches website that features smooth scrolling, dark and light modes, and compatibility with all mobile devices. Developed with the Mobile First methodology, it provides a consistent user experience across all devices.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Java-Script",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://anticheatsdev.github.io/_TempoModern_/",
  },
  {
    name: "What is Chat-GPT4?",
    description:
      "Chat-GPT is an AI chatbot powered by GPT-4, providing human-like conversation. It's a valuable tool for businesses and individuals seeking to automate customer support or improve online communication.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://what-is-chat-gpt-4.vercel.app/",
  }

  
];



export { services, technologies, experiences, testimonials, projects };
