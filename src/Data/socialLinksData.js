import { FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";
import Resume from "../assets/images/Resume2.pdf";
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
    linkTo: Resume,
  },
];
