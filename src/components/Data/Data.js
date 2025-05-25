import image from "../../Images/im (1).jpg";
import image1 from "../../Images/im (1).png";
import image2 from "../../Images/im (2).jpg";
import html from "../../Images/Html.png"
import css from "../../Images/Css.png"
import javascript from "../../Images/Javascript.png"
import react from "../../Images/React.png"
import git from "../../Images/Git.png"
import github from "../../Images/Github.png"
import canva from "../../Images/Canva.png"
import vscode from "../../Images/Vscode.png"

export const MenuListData = [
  {
    url: "/",
    menu: "Home",
  },
  {
    url: "/About",
    menu: "About",
  },
  {
    url: "/Project",
    menu: "Projects",
  },
  {
    url: "/Competence",
    menu: "Skills",
  },
  {
    url: "/Contact",
    menu: "Contact",
  },
];
export const AboutData = [
  {
    icone: "bx bxs-user",
    titre: "Who am I?",
    description:
      "A passionate computer science student,self-taught and highlu motivated",
  },
  {
    icone: "bx bxs-bullseye",
    titre: "My Goal",
    description:
      "To be full-stack developer and build modern,high quality website",
  },
  {
    icone: "bx bx-code-alt",
    titre: "What I Do",
    description:
      "I create web interfaces using HTML , CSS ,JS and react , a,and I'm learning for backend",
  },
  {
    icone: "bx bxs-rocket",
    titre: "Why Choose me",
    description:
      "I grow everyday trougth passion,discipline , and a strong will to succeed",
  },
];
export const ProjectData = [
  {
    date: "10 Mai 2025",
    image: image,
    descri:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit praesentium excepturi repellendus, odio repellat?",
    git: "url",
    demo: "url",
  },
  {
    date: "6 Avril 2025",
    image: image1,
    descri:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit praesentium excepturi repellendus, odio repellat?",
    git: "url",
    demo: "url",
  },

  {
    date: "19 janvier 2025",
    image: image2,
    descri:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit praesentium excepturi repellendus, odio repellat?",
    git: "url",
    demo: "url",
  },
];
export const ContactData = [
  {
    icones: "bx bx-phone-call",
    titre : "PHONE",
    text: "+261389637092",
  },
  {
    icones: "bx bx-envelope",
    titre : "EMAIL",
    text: "rnandrianina11@gmail.com",
  },
  {
    icones: "bx bx-home",
    titre : "LOCATION",
    text: "LOT 250 BIS FM Morondava",
  },
  {
    icones: "bx bxl-facebook",
    titre : "FACEBOOK",
    text: "Nandrianina RAKOTOARISOA",
  },
];
export const SkillData = [
  {
    label : "HTML",
    value : 90,
    color : "#E44D2A",
    image : html,
  },
  {
    label : "CSS",
    value : 80,
    color : "#3972B6",
    image : css,
  },
  {
    label : "Javascript",
    value : 60,
    color : "#F0DB50",
    image : javascript,
  },
  {
    label : "React",
    value : 55,
    color : "#5AB7D0",
    image : react,
  },
  {
    label : "Github",
    value : 90,
    color : "#000",
    image : github,
  },
  {
    label : "VsCode",
    value : 97,
    color : "#9FD8F8",
    image : vscode,
  },
  {
    label : "Canva",
    value : 50,
    color : "#f0db4f",
    image : canva,
  },
  {
    label : "Git",
    value : 80,
    color : "#E74F2B",
    image : git,
  },
]
