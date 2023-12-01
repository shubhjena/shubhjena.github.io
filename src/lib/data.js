export const SKILLS = [
  { name: "React.js", icon: "react.png", strength: "strong" },
  { name: "HTML", icon: "html.png", strength: "strong" },
  { name: "JavaScript", icon: "js.png", strength: "beginner" },
  { name: "Tailwind CSS", icon: "tailwind.png", strength: "strong" },
  { name: "CSS", icon: "css.png", strength: "beginner" },
  { name: "Java", icon: "java.png", strength: "strong" },
  { name: "MySQL", icon: "mysql.png", strength: "moderate" },
  { name: "Spring Boot", icon: "springboot.png", strength: "strong" },
  { name: "Spring", icon: "spring.png", strength: "moderate" },
  { name: "PostgreSQL", icon: "postgresql.png", strength: "beginner" },
  { name: "Vervel", icon: "vercel.png", strength: "beginner" },
  { name: "Github", icon: "github.png", strength: "strong" },
  { name: "Postman", icon: "postman.png", strength: "beginner" },
];

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  // Add more sections as needed
];

export const PROJECTS = [
  // {
  //   title: "Classic Snake Game",
  //   desc: "The classic snake game presented in JAVA GUI",
  //   link: "https://github.com/shubhjena/SnakeGame",
  // },
  {
    title: "TaskMeowster",
    desc: "A cat themed task listing app to track your pending tasks.",
    link: "https://github.com/shubhjena/TaskMeowster",
  },
  {
    title: "LinkNest - Chrome extension",
    desc: "A chrome extension for saving and managing web links",
    link: "https://github.com/shubhjena/LinkNestChromeExtension",
  },
  {
    title: "Portfolio Website",
    desc: "My professional portfolio website",
    link: "",
  },
  {
    title: "Quick Cart",
    desc: "An online shopping mart",
    link: "https://quick-cart-kohl.vercel.app/",
  },
  {
    title: "My Dental Clinic",
    desc: "Website for a dental clinic",
    link: "https://my-dental-clinic.vercel.app/",
  },
  {
    title: "Expense Tracker",
    desc: "An expense tracker web-app to store and display transactions",
    link: "https://github.com/shubhjena/ExpenseTracker",
  },

  // Add more sections as needed
];

export const RESUME_PROJECTS = [
  {
    title: "Portfolio Website",
    technologies: ["React", "Tailwind CSS", "Zustand", "GitHub Pages"],
    urlText: "/shubhjena.github.io",
    url: "https://shubhjena.github.io/",
    problemStatement:
      "Develop a portfolio website to showcase my skills and projects.",
    description:
      "Developed a portfolio website with home, projects, and about sections.#The website showcases my skills, projects, and contact information.",
  },
  {
    title: "Expense Tracker",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "GitHub"],
    urlText: "/github/expense-tracker",
    url: "https://github.com/shubhjena/ExpenseTracker",
    problemStatement:
      "Build a web application for recording and tracking expenses.",
    description:
      "Created an 'Expense Tracker' web app with React.js and Express.js. #Users can add, view, edit, and delete their expense records. It can be used for expense monitoring. #Data is stored and fetched from a MongoDB database using Mongoose.",
  },
  {
    title: "Quiz Application",
    technologies: ["Spring Boot", "Java", "Maven", "PostgreSQL", "REST API"],
    urlText: "/github/Quizapp",
    url: "https://github.com/shubhjena/Quizapp",
    problemStatement: "Develop a quiz app with RESTful API endpoints.",
    description:
      "Created RESTful API endpoints for quiz creation, submission, and management. #Quiz questions are maintained in a PostgreSQL database to which questions can be added or deleted. #Users can generate a quiz with a requested number of questions in any of the given topics.",
  },
  {
    title: "My Dental Clinic",
    technologies: ["React", "Material UI", "Tailwind CSS", "GitHub", "Vercel"],
    urlText: "/my-dental-clinic.vercel.app",
    url: "https://my-dental-clinic.vercel.app",
    problemStatement: "Create a front-end for a dental clinic website.",
    description:
      "Developed a website for a dental clinic that provides information about their services. #The website also shows their contact information, patient testimonials, doctor’s profiles, equipment, etc.",
  },
];
