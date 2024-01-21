export const SKILLS = [
  { name: "React.js", icon: "react.png", strength: "strong" },
  { name: "HTML", icon: "html.png", strength: "strong" },
  { name: "JavaScript", icon: "js.png", strength: "beginner" },
  { name: "CSS", icon: "css.png", strength: "beginner" },
  { name: "Tailwind CSS", icon: "tailwind.png", strength: "strong" },
  { name: "Socket.io", icon: "socketio.png", strength: "beginner" },
  { name: "Next.js", icon: "nextjs.png", strength: "strong" },
  { name: "Java", icon: "java.png", strength: "strong" },
  { name: "Spring", icon: "spring.png", strength: "intermediate" },
  { name: "PostgreSQL", icon: "postgresql.png", strength: "beginner" },
  { name: "Hibernate", icon: "hibernate.png", strength: "strong" },
  { name: "Spring Boot", icon: "springboot.png", strength: "strong" },
  { name: "MySQL", icon: "mysql.png", strength: "intermediate" },
  { name: "Prisma", icon: "prisma.png", strength: "beginner" },
  { name: "Redis", icon: "redis.png", strength: "beginner" },
  { name: "Kafka", icon: "kafka.png", strength: "beginner" },
  { name: "Postman", icon: "postman.png", strength: "beginner" },
  { name: "Github", icon: "github.png", strength: "strong" },
  { name: "Vervel", icon: "vercel.png", strength: "beginner" },
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
  {
    title: "Community Chat",
    desc: "A real-time chat application over a browser window, where users interact using anonymous usernames.",
    link: "https://github.com/shubhjena/CommunityChat",
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
    title: "Community Chat",
    technologies: ["Next, Socket.io, Node.js, Redis, Kafka, Prisma, PostgreSQL"],
    urlText: "/github/CommunityChat",
    url: "https://github.com/shubhjena/CommunityChat",
    problemStatement:
      "Build an application to anonymously chat in real-time.",
    description:
      "Created a ’Community Chat’ web app with Next.js and Node.js, made scalable with Redis and Kafka. #Users can chat in real-time on a web-based chat interface on any of the predefined topics. # Data is stored and fetched from a PostgreSQL database using the Prisma ORM tool.",
  },
  // {
  //   title: "Expense Tracker",
  //   technologies: ["React", "Express.js", "Node.js", "MongoDB", "GitHub"],
  //   urlText: "/github/expense-tracker",
  //   url: "https://github.com/shubhjena/ExpenseTracker",
  //   problemStatement:
  //     "Build a web application for recording and tracking expenses.",
  //   description:
  //     "Created an 'Expense Tracker' web app with React.js and Express.js. #Users can add, view, edit, and delete their expense records. It can be used for expense monitoring. #Data is stored and fetched from a MongoDB database using Mongoose.",
  // },
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
