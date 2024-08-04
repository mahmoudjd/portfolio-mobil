export const projects = [
  {
    id: 1,
    title: "MJD-FootballScout",
    description:
      "A comprehensive platform for scouting football players, leveraging Cheerio.js for efficient data extraction from web sources. The backend is built with Node.js and Express.js, while the frontend is developed using React and React Native for seamless web and mobile experiences. Data is managed with MongoDB and the entire application is type-safe with TypeScript.",
    technologies: [
      "React",
      "React Native",
      "Cheerio.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
    ],
    imageUrl: require("@/assets/images/mjd-football.png"),
    link: "https://github.com/mahmoudjd/abschlussarbeit",
  },
  {
    id: 2,
    title: "MJD&MZ-Planer",
    description:
      "A web application for event planning, particularly useful for managing guest lists and seating arrangements at weddings. The backend is powered by a Node.js and Express server, providing a RESTful HTTP interface and persistent storage using MongoDB. The frontend is designed with HTML and Less, enabling intuitive and efficient event planning.",
    technologies: [
      "Node.js",
      "Express",
      "JavaScript",
      "Less",
      "HTML",
      "MongoDB",
    ],
    imageUrl: require("@/assets/images/mjd-mz.png"),
    link: "https://github.com/mahmoudjd/MJD-MZ-Planer",
  },
  {
    id: 3,
    title: "Mosaic-Generator",
    description:
      "A Python3-based application that converts images into stunning mosaics composed of smaller tile images. Utilizing image processing techniques, the software analyzes the color composition of the source image and matches it with the best-fit tiles from a predefined library, creating visually appealing mosaics. The user interface is built with PySimpleGUI.",
    technologies: ["Python3", "PySimpleGUI"],
    imageUrl: require("@/assets/images/mosaic.png"),
    link: "https://github.com/mahmoudjd/mosaic-generator",
  },
  {
    id: 4,
    title: "Full-Stack Authentication Application",
    description:
      "A robust full-stack authentication application with a React frontend and a Node.js backend using Express.js. Secure user authentication and authorization are handled using JSON Web Tokens (JWT) and bcrypt for password hashing. The application is developed with TypeScript to ensure type safety and enhanced code quality throughout both the frontend and backend.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "TypeScript",
    ],
    imageUrl: require("@/assets/images/auth.png"),
    link: "https://github.com/mahmoudjd/Authenticationapp",
  },
  {
    id: 5,
    title: "Full-Stack ToDo-Application",
    description:
      "A robust full-stack ToDo application with a React frontend and a Node.js backend using Express.js. The application is developed with TypeScript to ensure type safety and enhanced code quality throughout both the frontend and backend.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "TypeScript",
    ],
    imageUrl: require("@/assets/images/todo-app.png"),
    link: "https://github.com/mahmoudjd/todo-list",
  },
  {
    id: 6,
    title: "Portfolio Mahmoud Al Jarad",
    description:
      "A personal portfolio website showcasing my projects, skills, and experiences. Built with React and TypeScript for a robust and type-safe front-end, and styled using Tailwind CSS for a modern and responsive design. The site serves as a central hub for potential employers and collaborators to view my work and get in touch with me.",
    technologies: ["React", "TypeScript", "Tailwindcss"],
    imageUrl: require("@/assets/images/portfolio.png"),
    link: "https://github.com/mahmoudjd/portfolio",
  },
];
