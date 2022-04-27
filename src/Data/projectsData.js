import ECommerce from "../assets/images/ecommerce.webp";
import EasyView from "../assets/images/movies.webp";
import Laplace from "../assets/images/laplace.png";
import Cabin from "../assets/images/cabin.webp";
import Incredibots from "../assets/images/robotics.webp";
import EPortComm from "../assets/images/eport-client.webp";
import ExpenseTracker from "../assets/images/expense-tracker.webp";
import Airbnb from "../assets/images/airbnb.webp";

export const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    tags: ["Framework"],
    image: ECommerce,
    techStack: "JavaScript | React",
    description:
      "React E-commerce app that displays data about popular and recommended books. Has the abililty to filter books and add them to cart for purchase.",
    gitHubLink: "https://github.com/JawadH02/library-react",
    websiteLink: "https://focused-nightingale-f274c0.netlify.app/",
  },
  {
    id: 2,
    name: "EasyView Movies",
    tags: ["API", "Framework"],
    image: EasyView,
    techStack: "JavaScript | React | LocalStorage",
    description:
      "React App that makes an axios request to the TMDB API in order to search for movies and display their details.",
    gitHubLink: "https://github.com/JawadH02/easyView-app",
    websiteLink: "https://easy-view-app.vercel.app/",
  },
  {
    id: 3,
    name: "Laplace",
    tags: ["Full-Stack", "API", "Framework"],
    image: Laplace,
    techStack: "Material UI | React | Firebase v9 | chartjs | Context API",
    description:
      "Fully responsive and multi-platform Cryptocurrencies tracker web app. Makes axios request to Coin Gecko API in order to list and graph Cryptocurrencies Data",
    gitHubLink: "https://github.com/JawadH02/Laplace-crypto",
    websiteLink: "https://laplace-crypto.vercel.app",
  },
  {
    id: 4,
    name: "Expense Tracker",
    tags: ["Framework", "Full-Stack"],
    image: ExpenseTracker,
    techStack:
      "MongoDB | Express | React | Nodejs | Tailwind CSS | Redux Toolkit | RTK Query | Chartjs",
    description:
      "Expense Tracker Using MERN Stack built using a varity of tech stack. Developed for the purpose of keeping track of expenses and visually displaying the statisitcs using chartjs along with percentages calculated using Lodash",
    gitHubLink: "https://github.com/JawadH02/expense-tracker",
    websiteLink: "https://expense-tracker-roan.vercel.app/",
  },
  {
    id: 5,
    name: "Cabin",
    tags: ["Full-Stack", "Framework"],
    image: Cabin,
    techStack: "SASS | JavaScript | React | Firebase",
    description:
      "Firestore Database Web Application designed with React and Firebase. Developed by an international team of passionate members communicating and organizing code to Github using advanced Git commands. Engineered scalable, responsive, multi-platform code using react js.",
    gitHubLink: "https://github.com/barrybtw/react-blog-app",
    websiteLink: "https://elated-fermat-4587e4.netlify.app/",
  },
  {
    id: 6,
    name: "Incredibots: Site for Robotics organisation",
    tags: ["Commercial"],
    image: Incredibots,
    techStack: "Html | CSS | JavaScript | Git",
    description:
      "I developed this Responsive and multi-platform site for a client using semantic HTML5 and CSS3 (+BEM). Personal information and content was replaced to maintain privacy.",
    gitHubLink: "https://github.com/JawadH02/incredibots",
    websiteLink: "https://jawadh02.github.io/incredibots/",
  },
  {
    id: 7,
    name: "E-Portfolio for Client",
    tags: ["Commercial"],
    image: EPortComm,
    techStack: "Html | CSS | JavaScript | Git",
    description:
      "Responsive and multi-platform E-Portfolio built for a local Robotics Org. using semantic HTML5 and CSS3 (+BEM). Personal information and projects were replaced to maintain privacy. Projects were replaced with my own unfinished projects.",
    gitHubLink: "https://github.com/JawadH02/e-portfolio-clt",
    websiteLink: "https://jawadh02.github.io/e-portfolio-clt/",
  },
];
