import image from "../../Images/im (1).jpg";
import image1 from "../../Images/landy (1).jpg";
import image2 from "../../Images/landy (2).jpg";
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
    image: image1,
    descri:"LandyGasy Un site vitrine que j’ai conçu pour mettre en avant le lambalandy, un tissu emblématique de Madagascar. C’est un projet simple mais symbolique, qui me tient à cœur car il allie culture et création numérique.",
    git: "https://github.com/NandryRakoto/LANDYGASY",
    demo: "https://nandryrakoto.github.io/LANDYGASY/",
  },
  {
    date: "6 Avril 2025",
    image: image2,
    descri:" Tirage ,Un petit projet personnel autour du tirage aléatoire. Même s’il est très simple, il m’a permis de m’amuser et d’explorer la logique derrière les sélections aléatoires de façon ludique. ",
    git: "https://github.com/NandryRakoto/tirage",
    demo: "https://nandryrakoto.github.io/tirage/",
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
