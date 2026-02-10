/* ===============================
   Personal Portfolio Configuration
   =============================== */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* Splash Screen */
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1500
};

/* Illustration */
const illustration = {
  animated: true
};

/* Greeting Section */
const greeting = {
  username: "Om Raja",
  title: "Hi, I'm Om Raja",
  subTitle: emoji(
    "Electrical & Computer Engineering student 🚀 interested in Web Development, AI applications, and Blockchain-based systems."
  ),
  resumeLink: "",
  displayGreeting: true
};

/* Social Media */
const socialMediaLinks = {
  github: "https://github.com/omraja653",
  linkedin: "https://www.linkedin.com/in/om-raja-84850b240/",
  instagram: "https://www.instagram.com/raja_om653/",
  display: true
};

/* Skills Section */
const skillsSection = {
  title: "Skills",
  subTitle: "Technical skills and tools I have worked with",
  skills: [
    emoji("⚡ Web development using HTML, CSS, JavaScript"),
    emoji("⚡ Artificial Intelligence for predictive systems"),
    emoji("⚡ Blockchain fundamentals and decentralized systems"),
    emoji("⚡ Java programming with Data Structures and Algorithms"),
    emoji("⚡ Embedded systems fundamentals")
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

/* Education */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "MIT World Peace University, Pune",
      logo: require("./assets/images/mitlogo.jpeg"),
      subHeader: "B.Tech – Electrical and Computer Engineering",
      duration: "2023 – Present"
    }
  ]
};

/* REMOVE PROFICIENCY */
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

/* ===============================
   ACADEMIC PROJECTS (BIG VIEW)
   =============================== */
const bigProjects = {
  title: "Academic Projects",
  subtitle: "Click on a project to view detailed information",
  projects: [
    {
      image: require("./assets/images/project.png"),
      projectName: "Predictive Maintenance of Vehicles Using AI",
      projectDesc:
        "An AI-based academic project designed to predict potential vehicle failures using historical and sensor-based data. The system helps in reducing downtime and improving maintenance efficiency.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/omraja653"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName:
        "Blockchain-Enabled P2P Energy Trading with Automated T&D Loss Traceability",
      projectDesc:
        "An ongoing academic project focused on enabling peer-to-peer energy trading using blockchain technology while ensuring transparent tracking of transmission and distribution losses.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/omraja653"
        }
      ]
    }
  ],
  display: true
};

/* Certifications */
const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Academic and technical certifications",
  achievementsCards: [
    {
      title: "Java with Data Structures and Algorithms",
      subtitle:
        "Certification covering core Java programming concepts along with fundamental data structures and algorithms.",
      image: require("./assets/images/certificate.png"),
      imageAlt: "Java DSA Certificate",
      footerLink: []
    }
  ],
  display: true
};

/* REMOVE TEMPLATE SECTIONS */
const workExperiences = { display: false, experience: [] };
const openSource = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const resumeSection = { display: false };

/* Contact Section (Form handled in UI) */
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to connect for academic or project-related discussions",
  number: "7875498243",
  email_address: "rajaom653@gmail.com"
};

const twitterDetails = { display: false };
const isHireable = false;

/* Export */
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
