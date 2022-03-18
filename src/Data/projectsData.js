import ECommerce from "../assets/images/ecommerce.webp";
import EasyView from "../assets/images/movies.webp";
import Laplace from "../assets/images/laplace.png";
import Cabin from "../assets/images/cabin.webp";
import Incredibots from "../assets/images/robotics.webp";
import EPortComm from "../assets/images/eport-client.webp";
import NFTMarketPlace from "../assets/images/nft-market.webp"; 

export const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    tags: ["React"],
    image: ECommerce,
    techStack: "Html | CSS | JavaScript | React | Git | NPM",
    description:
      "React E-commerce app that displays data about popular and recommended books. Has the abililty to filter books and add them to cart for purchase.",
    gitHubLink: "https://github.com/JawadH02/library-react",
    websiteLink: "https://focused-nightingale-f274c0.netlify.app/",
  },
  {
    id: 2,
    name: "EasyView Movies",
    tags: ["API", "React"],
    image: EasyView,
    techStack: "Html | CSS | JavaScript | React | Git | NPM",
    description:
      "React App that makes an axios request to the TMDB API in order to search for movies and display their details.",
    gitHubLink: "https://github.com/JawadH02/easyView-app",
    websiteLink: "https://easy-view-app.vercel.app/",
  },
  {
    id: 3,
    name: "Laplace",
    tags: ["Firebase", "API", "React"],
    image: Laplace,
    techStack: "Material UI | React | Firebase v9 | chartjs | Context API",
    description:
      "Fully responsive and multi-platform Cryptocurrencies tracker web app. Makes axios request to Coin Gecko API in order to list and graph Cryptocurrencies Data",
    gitHubLink: "https://github.com/JawadH02/Laplace-crypto",
    websiteLink: "https://laplace-crypto.vercel.app",
  },
  {
    id: 4,
    name: "Cabin",
    tags: ["Firebase", "React"],
    image: Cabin,
    techStack: "Html | SASS | JavaScript | React | Firebase | Git | NPM",
    description:
      "Firestore Database Web Application designed with React and Firebase. Developed by an international team of passionate members communicating and organizing code to Github using advanced Git commands. Engineered scalable, responsive, multi-platform code using react js.",
    gitHubLink: "https://github.com/barrybtw/react-blog-app",
    websiteLink: "https://elated-fermat-4587e4.netlify.app/",
  },
  // {
  //   id: 5,
  //   name: "NFT-Marketplace",
  //   tags: ["React", "Firebase"],
  //   image: NFTMarketPlace,
  //   techStack: "Html | SASS | JavaScript | Firebase v9 | React | Git | NPM",
  //   description:
  //     "NFT Marketplace perfect template for NFTS marketplace, crypto-collectibles, digital items, non-fungible tokens websites, and more",
  //   gitHubLink: "https://github.com/JawadH02/nft-marketplace",
  //   websiteLink: "https://nft-marketplace-ten-sigma.vercel.app/",
  // },
  {
    id: 5,
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
    id: 6,
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
