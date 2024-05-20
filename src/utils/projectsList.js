import { ChitChat, AiImage, BlogImage, WordImage, NikeImage, IstoreImage } from "../Assets/images";

const projects = [
  {
    title: "ChitChat",
    subTitle: "Chatting Application",
    description:
      "ChitChat is a chatting application that allows users to connect with friends and engage in real-time conversations. It is built using HTML, CSS, JavaScript, Node.js, Sequelize, SQLite, and Socket.IO. Users can create accounts, join chat rooms, and send messages to their friends.",
    image: ChitChat,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Sequelize", "SQLite", "Socket.IO"],
    github: "https://github.com/Fabrice-Mokfembam/chitchat",
    live: "",
  },
  {
    title: "ThiagoAI",
    subTitle: "AI Assistant",
    description:
      "ThiagoAI is an AI assistant similar to Gemini. It is built using React, SASS, Node.js, Express, and the Gemini API. ThiagoAI can assist you with various tasks, such as answering questions, providing recommendations, and performing actions based on user commands.",
    image: AiImage,
    technologies: ["React", "SASS", "Node.js", "Express", "Gemini API"],
    github: "https://github.com/Fabrice-Mokfembam/AI-Chat-Assistant",
    live: "",
  },
  {
    title: "iStore",
    subTitle: "E-commerce Website",
    description:
      "iStore is a niche website developed at Staruth Technology. It is primarily a backend-focused project with 80% backend development and 20% frontend development. The website is built using Node.js, Express, MongoDB, React.js, Sass, and Socket.IO. It offers a seamless shopping experience for customers and efficient inventory management for the business.",
    image: IstoreImage,
    technologies: ["Node.js", "Express", "MongoDB", "React.js", "Sass", "Socket.IO"],
    github: "https://github.com/Fabrice-Mokfembam/istore-frontend",
    live: "https://user-panel-lac.vercel.app/",
  },
  {
    title: "Blogger",
    subTitle: "Blog Web",
    description:
      "Blogger is a blog website where users can create and publish their own blog posts. It provides a platform for sharing knowledge, experiences, and opinions. The website is built using HTML, CSS, JavaScript, and additional frameworks and libraries for styling and functionality.",
    image: BlogImage,
    technologies: ["React", "SASS", "Nodejs","Express","MongoDB"],
    github: "https://github.com/Fabrice-Mokfembam/Blog",
    live: "https://blog-iota-one.vercel.app/",
  },
  {
    title: "Realtime Word Processing App",
    subTitle: "Collaborative Document Editing",
    description:
      "The Realtime Word Processing App is a collaborative tool that allows teams to edit documents in real-time. It is built using Node.js, MongoDB, Socket.IO, React.js, Express, and CSS. Multiple users can work on the same document simultaneously, enabling efficient collaboration and seamless synchronization.",
    image:WordImage,
    technologies: ["Node.js", "MongoDB", "Socket.IO", "React.js", "Express", "CSS"],
    github: "https://github.com/Fabrice-Mokfembam/Realtime-Wordprocessing-app",
    live: "",
  },
  {
    title: "Nike Landing Page",
    subTitle: "Brand Landing Page",
    description:
      "The Nike Landing Page is a visually stunning landing page designed for the Nike brand. It is built using React.js and Tailwind CSS. The page showcases the latest Nike products, provides information about the brand, and offers a seamless browsing experience for users.",
    image: NikeImage,
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Fabrice-Mokfembam/Nike-Landing-Page",
    live: "",
  },
];

export default projects;