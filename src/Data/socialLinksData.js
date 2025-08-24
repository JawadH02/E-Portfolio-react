import { FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";
// import Resume from "../../public/Resume.pdf";
export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedinIn />,
    linkTo: "https://www.linkedin.com/in/jawad-hanif02",
  },
  {
    id: 2,
    icon: <FaGithub />,
    linkTo: "https://github.com/JawadH02",
  },
  {
    id: 3,
    icon: <FaFilePdf />,
    linkTo: `${process.env.PUBLIC_URL}/Resume2025.pdf`
  },
];
