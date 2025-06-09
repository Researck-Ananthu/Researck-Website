import React from "react";

// import loadingHeroBgImage from "@/assets/svg/abstract-timekeeper.svg";
import cameraSvgIcon from "@/assets/svg/CameraSvg";
import playIcon from "@/assets/svg/Play-Icon.svg";

import mobileAppDev from "@/assets/images/portfoliogrid/mobile.jpg";
import webAppDev from "@/assets/images/portfoliogrid/web.jpg";
import softwareAppDev from "@/assets/images/portfoliogrid/software2.jpg";
import healthcareAnalyze from "@/assets/images/portfoliogrid/health2.jpg";
import portfolioImg from "@/assets/images/portfoliogrid/portfolio2.jpg";
import ecommercePlatform from "@/assets/images/portfoliogrid/e-commerce2.jpg";
import apiDevelopment from "@/assets/images/portfoliogrid/apidev.jpg";
import smartHome from "@/assets/images/portfoliogrid/smart_home2.jpg";
import aiChatBot from "@/assets/images/portfoliogrid/robo.jpg";
import machineLearning from "@/assets/images/portfoliogrid/robotics2.jpg";
import saasProject from "@/assets/images/portfoliogrid/saas2.jpg";
import pocService from "@/assets/images/portfoliogrid/poc2.jpg";
import projectManagement from "@/assets/images/portfoliogrid/recovery.jpg";
import machineIntergration from "@/assets/images/portfoliogrid/industrial-iot-solution.svg";

import mobileImage from "@/assets/images/fun/bento-03-mobile-friendly.png";
import performanceImage from "@/assets/images/fun/bento-03-performance.png";
import securityImage from "@/assets/images/fun/bento-03-security.png";

import park from "@/assets/images/client/Computer park.png";
import global from "@/assets/images/client/Global Builders.png";
import onestop from "@/assets/images/client/Onestop.png";
import varnam from "@/assets/images/client/Varnam Designs.png";
import remi from "@/assets/images/client/Remi design studio.png";
import energylife from "@/assets/images/client/Energy Life.png";

// import reactCode from "@/assets/images/features/codes/react.jpg";
// import jsCode from "@/assets/images/features/codes/js.jpg";
// import tsCode from "@/assets/images/features/codes/type.jpg";
// import nodeCode from "@/assets/images/features/codes/node.jpg";
// import pythonCode from "@/assets/images/features/codes/python.jpg";
// import javaCode from "@/assets/images/features/codes/java.jpg";
// import dockerCode from "@/assets/images/features/codes/docker.jpg";
// import kuberCode from "@/assets/images/features/codes/kuber.png";
// import gitCode from "@/assets/images/features/codes/git.jpg";
// import figmaUi from "@/assets/images/features/codes/figma.jpg";
// import tailCode from "@/assets/images/features/codes/tailwind.jpg";
// import sqlQuery from "@/assets/images/features/codes/sql.png";
// import mongoQuery from "@/assets/images/features/codes/mongo.png";
// import awsCloud from "@/assets/images/features/codes/aws2.jpg";
// import mysqlQuery from "@/assets/images/features/codes/mysql.jpg";

import {
   BotMessageSquareIcon,
   BrainIcon,
   BriefcaseBusinessIcon,
   CableIcon,
   ComputerIcon,
   FolderGit2Icon,
   HousePlugIcon,
   PanelsTopLeftIcon,
   ScaleIcon,
   ShoppingBagIcon,
   SquareActivityIcon,
   SquareKanbanIcon,
   SquarePercentIcon,
   TabletSmartphoneIcon,
   WebhookIcon,
} from "lucide-react";

import {
   FaAws,
   FaDatabase,
   FaDocker,
   FaFigma,
   FaGithub,
   FaJava,
   FaNode,
   FaPython,
   FaReact,
} from "react-icons/fa";
import {
   SiJavascript,
   SiKubernetes,
   SiMongodb,
   SiMysql,
   SiPostgresql,
   SiTailwindcss,
   SiTypescript,
} from "react-icons/si";

// ===================================================
// General
// ===================================================
// export { researckWhiteLogo, researckRkLogo, loadingHeroBgImage };

export const blurUrl =
   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAFCAQAAACNByblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

export const placeHolderImg =
   "https://cdn-icons-png.flaticon.com/512/13434/13434909.png";

// ===================================================
// Header Section
// ===================================================
// export const headerLogos = {
//     src: researckWhiteLogo,
//     alt: "Researck",
// };

export const headerNavList = [
   {
      id: 0,
      title: "Home",
      href: "#hero",
      tooltip: "Hero",
      onlyMobile: false,
   },
   {
      id: 1,
      title: "Portfolio",
      href: "#portfolio",
      tooltip: "Portfolio",
      onlyMobile: false,
   },
   {
      id: 2,
      title: "Services",
      href: "#what-we-do",
      tooltip: "What we do",
      onlyMobile: true,
   },
   {
      id: 3,
      title: "About",
      href: "#about-us",
      tooltip: "About Us",
      onlyMobile: false,
   },
   {
      id: 4,
      title: "Careers",
      href: "#career",
      tooltip: "Careers",
      onlyMobile: false,
   },
   {
      id: 5,
      title: "Start Conversion",
      href: "#chat",
      tooltip: "Chat",
      onlyMobile: true,
   },
];

export const headerButtonText = "Start Conversion";

// ===================================================
// Hero Section
// ===================================================
export const CameraSvg = {
   icon: cameraSvgIcon,
   alt: "Camera",
};

export const loadingData = {
   heading: "Reserack",
};

export const splineSceneLinks = {
   linkCube: "https://prod.spline.design/IEt7OLCx0WUYtUA3/scene.splinecode",
};

export const heroSectionContent = {
   topHeading: "We Are Giving \nSoftware \nSolutions",
   topParagraph:
      "Expert in e-commerce application, e-learning application, healthcare application",
   bottomHeading: "Creating \nTailored Mobile Applications",
   bottomParagraph:
      "Tell your expectations, we will make that happen in an economical budget",
};

// ===================================================
// Portfolio Section
// ===================================================
export const portfolioHeading = {
   headingStart: "Explore the innovative ",
   headingHighlight: "solutions we deliver",
   headingEnd: ".",
};

export const portfolioParagraph = {
   paragraphStart:
      "At Researck, we do more than develop software — we empower businesses " +
      "to achieve their goals through innovative and tailored solutions. By leveraging " +
      "the latest technologies, including advanced programming languages, cutting-edge frameworks, " +
      "and robust cloud platforms, we create systems that drive efficiency, scalability, and success. " +
      "Our expertise spans a wide range of industries, ensuring each project is designed " +
      "to meet the unique challenges and opportunities of your sector.",
   paragraphEnd:
      "From initial brainstorming to deployment and beyond, we are committed to turning your " +
      "vision into a functional, user-centric, and future-ready solution. Partner with Researck, " +
      "where innovation meets reliability, and together, let's build software that transforms the way you work and grow.",
};

export const portfolioGridItems = [
   {
      id: 0,
      title: "Mobile App Development",
      description:
         "We specialize in designing and developing cutting-edge mobile applications tailored to meet your business needs. Our services include creating intuitive user interfaces, implementing robust backend systems, and integrating third-party services to deliver seamless experiences. From ideation to launch, we ensure your app performs flawlessly on both iOS and Android platforms.",
      category: "App Development",
      image:
         mobileAppDev ||
         "https://img.freepik.com/free-vector/awesome-mobile-software-application-development-concept-mobile-phone-with-big-gear_39422-984.jpg?uid=R201435396&ga=GA1.1.964911120.1744880468&w=740",
      icon: <TabletSmartphoneIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 1,
      title: "Web App Development",
      description:
         "Our web app development services focus on creating dynamic, responsive, and scalable applications. Leveraging the latest technologies, we deliver customized solutions that offer exceptional user experiences. From interactive designs to secure backend systems, we ensure your web application meets the highest standards of performance and reliability.",
      category: "Web Development",
      image:
         webAppDev ||
         "https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?ga=GA1.1.1423727093.1736249503",
      icon: <PanelsTopLeftIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 2,
      title: "Software Development",
      description:
         "We deliver comprehensive software development solutions designed to improve business processes and enhance operational efficiency. Whether you need a custom application, enterprise software, or a tailored business solution, our team ensures the end product is reliable, scalable, and aligned with your goals.",
      category: "Software Development",
      image:
         softwareAppDev ||
         "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?ga=GA1.1.1423727093.1736249503&semt=ais_hybrid",
      icon: <ComputerIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 5,
      title: "E-Commerce Platform",
      description:
         "Our e-commerce platform solutions are designed to deliver seamless shopping experiences for users and businesses alike. Key features include secure payment processing, inventory management, personalized product recommendations, and scalable architecture to handle high traffic volumes. We ensure your online store remains competitive in the digital marketplace.",
      category: "Web Development",
      image:
         ecommercePlatform ||
         "https://img.freepik.com/free-photo/online-purchasing-payment-e-commerce-banking_53876-127604.jpg?uid=R201435396&ga=GA1.1.964911120.1744880468&semt=ais_items_boosted&w=740",
      icon: <ShoppingBagIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 6,
      title: "API Development",
      description:
         "Our API development services streamline the integration of applications and systems by providing secure, efficient, and scalable communication channels. Using modern standards like REST and GraphQL, we design APIs that are well-documented and tailored to the specific needs of your business, ensuring seamless interoperability.",
      category: "Development",
      image:
         apiDevelopment ||
         "https://img.freepik.com/free-vector/technology-isometric-api-illustration_23-2149375823.jpg?uid=R201435396&ga=GA1.1.964911120.1744880468&semt=ais_items_boosted&w=740",
      icon: <WebhookIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 3,
      title: "Healthcare Analytics",
      description:
         "Our healthcare analytics platform empowers healthcare providers with actionable insights through advanced predictive modeling and real-time data analysis. Key features include patient data integration, trend analysis, and AI-driven diagnostics, helping organizations enhance patient care, optimize resources, and make informed decisions.",
      category: "Healthcare",
      image:
         healthcareAnalyze ||
         "https://img.freepik.com/free-photo/doctor-using-tablet-diagnose-medical-technology_53876-104202.jpg?uid=R201435396&ga=GA1.1.964911120.1744880468&w=740",
      icon: <SquareActivityIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 4,
      title: "Portfolio Management",
      description:
         "We offer sophisticated portfolio management solutions designed for financial professionals and individual investors. Our platforms provide real-time updates, comprehensive analytics, and customizable dashboards, enabling users to monitor asset performance, analyze market trends, and make data-driven investment decisions with confidence.",
      category: "Finance",
      image:
         portfolioImg ||
         "https://img.freepik.com/free-photo/top-shot-three-unrecognizable-business-people-sitting-meeting-looking-charts_1098-17726.jpg",
      icon: <BriefcaseBusinessIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 7,
      title: "Smart Home Systems",
      description:
         "Our IoT-powered smart home systems enable seamless integration of devices for a connected living experience. Control lights, appliances, security cameras, and more from a centralized mobile app. These systems focus on enhancing user convenience, improving energy efficiency, and ensuring robust security for modern smart homes.",
      category: "IoT",
      image:
         smartHome ||
         "https://img.freepik.com/free-vector/gradient-smart-home-isometric-technology-background_52683-4498.jpg",
      icon: <HousePlugIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 9,
      title: "AI & Data Science",
      description:
         "We develop customized AI and data science solutions to empower businesses with intelligent tools for decision-making, process automation, and growth. Our services include data analysis, predictive modeling, and the development of AI-driven applications that deliver measurable results.",
      category: "AI & Machine Learning",
      image:
         machineLearning ||
         "https://img.freepik.com/free-photo/businessman-working-futuristic-office_23-2151003702.jpg",
      icon: <BrainIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 8,
      title: "AI Chatbot Platform",
      description:
         "Our AI chatbot platform enhances customer engagement by automating support, answering FAQs, and offering personalized assistance. Built with advanced NLP capabilities, our chatbots seamlessly integrate with popular messaging apps and provide detailed analytics, enabling businesses to continually improve user interactions.",
      category: "AI & Machine Learning",
      image:
         aiChatBot ||
         "https://img.freepik.com/free-vector/artificial-intelligence-isometric-ai-robot-mobile-phone-screen-chatbot-app_39422-767.jpg",
      icon: <BotMessageSquareIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 10,
      title: "SaaS Development",
      description:
         "Our SaaS development services focus on creating scalable and secure solutions tailored to your business needs. From product conceptualization to deployment, we deliver feature-rich SaaS applications that offer seamless user experiences, robust performance, and scalability to support your growth.",
      category: "Software Development",
      image:
         saasProject ||
         "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399292.jpg",
      icon: <SquareKanbanIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 11,
      title: "PoC Development Services",
      description:
         "Our PoC development services enable businesses to validate ideas and demonstrate feasibility before scaling projects. We provide rapid prototyping and clear demonstrations, helping stakeholders make informed decisions about the viability and potential of innovative solutions.",
      category: "Development",
      image:
         pocService ||
         "https://img.freepik.com/free-vector/personal-digital-security_74855-4560.jpg",
      icon: <SquarePercentIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 12,
      title: "Project Scaling & Migration",
      description:
         "We provide expert project scaling and migration services to modernize your existing systems and ensure smooth transitions to new technologies. Our approach minimizes downtime and maximizes operational efficiency, ensuring your business continues to thrive during the transformation.",
      category: "Consulting",
      image:
         undefined ||
         "https://img.freepik.com/free-vector/character-illustration-people-with-packages-shipment_53876-66109.jpg?uid=R201435396&ga=GA1.1.964911120.1744880468&w=740",
      icon: <ScaleIcon className="size-6 text-neutral-500" />,
   },
   {
      id: 13,
      title: "Project Recovery",
      description:
         "Our project recovery services help businesses get back on track by identifying challenges and implementing effective solutions. Whether it's realigning goals, optimizing resources, or fixing technical issues, we ensure projects are completed successfully.",
      category: "Consulting",
      image:
         projectManagement ||
         "https://vitolavecchia.altervista.org/wp-content/uploads/2018/12/Project-Management.png",
      icon: <FolderGit2Icon className="size-6 text-neutral-500" />,
   },
   {
      id: 14,
      title: "Machine Integration & IoT",
      description:
         "We specialize in integrating machines, sensors, and analyzers into applications, providing solutions for industries like home automation, medical research, and industrial automation. Our IoT expertise ensures seamless connectivity and reliable performance.",
      category: "IoT",
      image:
         machineIntergration ||
         "https://www.bluepixeltech.com/assets/img/solutions/industrial-iot-solution.svg",
      icon: <CableIcon className="size-6 text-neutral-500" />,
   },
];

// ===================================================
// What we do section
// ===================================================
export const whatWeDoHeading = {
   headingLines: [
      "CRAFTING INNOVATIVE DIGITAL",
      "SOLUTIONS FOR A",
      "INTERCONNECTED WORLD",
   ],
   headingHighlight: "RESEARCK",
   headingEnd: ".",
};

export const whatWeDoParagraph = {
   paragraphStart:
      "At Researck, we specialize in transforming ideas into powerful\n" +
      "digital experiences. Our mission is to provide cutting-edge\n" +
      "software solutions that empower businesses to thrive in today’s\n" +
      "fast-paced, technology-driven world. By combining innovation,\n" +
      "strategy, and the latest technologies, we craft applications that\n" +
      "drive growth and solve real-world challenges.",
   paragraphHighlight: "",
   paragraphEnd:
      "From custom software development and scalable cloud solutions to\n" +
      "seamless mobile and web applications, our team of experts is\n" +
      "dedicated to building tools that enhance productivity, foster\n" +
      "collaboration, and deliver measurable results. Whether you're\n" +
      "a startup or a global enterprise, Researck is here to help you\n" +
      "succeed in your digital transformation journey.",
};

export const whatWeDo = [
   {
      title: "PC Software Development",
      description: "Explore Our Expertise",
      image:
         softwareAppDev ||
         "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?ga=GA1.1.1423727093.1736249503&semt=ais_hybrid",
      points: [
         "Commercial purpose.",
         "Healthcare Management Solutions.",
         "Education and E-Learning Platforms.",
         "Inventory Management Systems.",
         "Financial and Accounting Software",
         "Customer Relationship Management (CRM)",
         "Business Management Software",
         "Your IT Companion",
      ],
   },
   {
      title: "Mobile Application Development",
      description: "Explore Our Expertise",
      image:
         mobileAppDev ||
         "https://img.freepik.com/free-vector/awesome-mobile-software-application-development-concept-mobile-phone-with-big-gear_39422-984.jpg?uid=R201435396&ga=GA1.1.964911120.1744880468&w=740",
      points: [
         "Commercial purpose.",
         "Healthcare Management Solutions.",
         "Education and E-Learning Platforms.",
         "Inventory Management Systems.",
         "Financial and Accounting Software",
         "Customer Relationship Management (CRM)",
         "Business Management Software",
         "Your IT Companion",
      ],
   },
   {
      title: "Web Application Development",
      description: "Explore Our Expertise",
      image:
         webAppDev ||
         "https://img.freepik.com/free-photo/ai-site-helping-with-software-production_1268-21620.jpg?ga=GA1.1.1423727093.1736249503",
      points: [
         "Commercial purpose.",
         "Healthcare Management Solutions.",
         "Education and E-Learning Platforms.",
         "Inventory Management Systems.",
         "Financial and Accounting Software",
         "Customer Relationship Management (CRM)",
         "Business Management Software",
         "Your IT Companion",
      ],
   },
];

// ===================================================
// About us Section
// ===================================================
export const aboutUsHeading = {
   headingStart: "Innovative Software Solutions For Your ",
   headingHighlight: "Business Growth",
   headingEnd: ".",
};

export const aboutUsParagraph = {
   paragraphStart:
      "At Researck, we specialize in crafting innovative software solutions\n" +
      "that fuel business growth and drive digital transformation. With a\n" +
      "team of seasoned developers, designers, and strategists, we are\n" +
      "committed to understanding your unique challenges and delivering\n" +
      "robust, scalable, and efficient software tailored to your needs. Our\n" +
      "passion lies in blending creativity and technology to build\n" +
      "applications that are not only functional but also intuitive and\n" +
      "impactful. We take pride in our collaborative approach, ensuring\n" +
      "that every solution we create aligns with your goals, enhances\n" +
      "productivity, and sets your business on a path to long-term success.\n",
   paragraphEnd:
      "From startups to enterprises, we partner with businesses across\n" +
      "industries to unlock their full potential through cutting-edge\n" +
      "technology. At our core, we believe in innovation, excellence, and\n" +
      "delivering results that exceed expectations.",
};

export const buttonStart = {
   text: "Get Started",
};

export const buttonExplore = {
   icon: playIcon,
   alt: "Play",
   text: "Explore",
};

export const sourceCodeCustomStyle = {
   background: "#27272a",
   margin: "0",
   padding: "1 0 1rem 0",
   width: "-webkit-fill-available",
   border: "0px solid",
   borderRadius: "0px",
   boxShadow: "none",
   fontSize: "1rem",
   whiteSpace: "nowrap",
   // scrollbarWidth: "thin",
   scrollbarColor: "transparent",
   backgroundClip: "content-box",
};

export const sourceCode = `function add(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("Missing arguments");
    }
    return a + b; // Simple addition
}

const result = add(2, 3); // Output is 5
console.log("The result is:", result); // Debugging done! 🎉`;

// ===================================================
// Info And Fun Section
// ===================================================
export const infoFunSecHeading = {
   headingStart: "Our Focus: Exceptional User Experience and ",
   headingHighlight: "High Performance",
   headingEnd: ".",
};

export const infoFunSecParagraph = {
   paragraphStart:
      "At Researck, we do more than develop software — we create lasting partnerships. Our dedicated team specializes in crafting customized solutions that align perfectly with your unique needs. Using the latest programming languages, frameworks, and cloud technologies, we bring your ideas to life, delivering software that is scalable, efficient, and user-friendly.",
   paragraphEnd:
      "From ideation to execution, we are committed to transforming your vision into impactful software solutions. Our expertise ensures that every product we develop drives growth, enhances user experience, and exceeds expectations.",
};

export const focuses = [
   {
      title: "Security",
      description:
         "We follow best practices and use cutting-edge encryption to protect data.",
      image: "/images/fun/security.jpg",
      flip_image: "/images/fun/security-2.jpg",
   },
   {
      title: "Mobile Friendly",
      description:
         "Seamless, responsive design optimized for all screen sizes and devices.",
      image: "/images/fun/mobile.jpg",
      flip_image: "/images/fun/mobile-2.jpg",
   },
   {
      title: "Performance",
      description:
         "We build highly optimized applications for blazing fast performance.",
      image: "/images/fun/performance.jpg",
      flip_image: "/images/fun/performance-2.jpg",
   },
   {
      title: "Powerful APIs",
      description:
         "Robust, scalable APIs that enable efficient integration and automation.",
      image: "/images/fun/power-api.jpg",
      flip_image: "/images/fun/power-api-2.jpg",
   },
];

export const infoFunSecGrid = [
   {
      title: "Mobile friendly",
      description:
         "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      imageUrl: mobileImage,
   },
   {
      title: "Performance",
      description:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.",
      imageUrl: performanceImage,
   },
   {
      title: "Security",
      description:
         "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.",
      imageUrl: securityImage,
   },
   {
      title: "Powerful APIs",
      description:
         "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.",
      codeFileName: "NotificationSetting.jsx",
      mainFile: "App.jsx",
      codeSnippet: `
import { useState } from 'react';
import { Switch } from '@headlessui/react';

function Example() {
    const [enabled, setEnabled] = useState(true);

    return (
        <form action="/notification-settings" method="post">
            <Switch checked={enabled} onChange={setEnabled} name="notifications">
                {/* ... */}
            </Switch>
            <button>Submit</button>
        </form>
    );
}
        `,
   },
];

// ===================================================
// Feature Section
// ===================================================
export const featureHeading = {
   headingStart: "Empowering Innovation with Cutting-Edge ",
   headingHighlight: "Technologies",
   headingEnd: ".",
};

export const featureParagraph = {
   paragraphStart:
      "At Researck, we are more than just a software development company. We are your technology partners, delivering tailored solutions powered by modern programming languages, frameworks, and cloud technologies. From concept to deployment, we transform ideas into robust, scalable, and user-friendly software solutions to drive your success.",
   paragraphEnd:
      "With our expertise and dedication, we ensure that every project is not only functional but also strategically aligned with your business goals. Join us in creating innovative solutions that make a real difference.",
};

export const featureTechnologies = [
   {
      name: "React",
      icon: <FaReact color="#3B82F6" className="size-6 text-blue-500" />,
      image: "/images/fun/codes/react.jpg",
      description:
         "React is a popular JavaScript library for building user interfaces. It enables developers to create large web applications that can update and render efficiently in response to data changes.",
   },
   {
      name: "JavaScript",
      icon: <SiJavascript color="#FACC15" className="size-6 text-yellow-400" />,
      image: "/images/fun/codes/js.jpg",
      description:
         "JavaScript is a versatile programming language commonly used to create interactive effects within web browsers. It is a core technology alongside HTML and CSS.",
   },
   {
      name: "TypeScript",
      icon: <SiTypescript color="#2563EB" className="size-6 text-blue-600" />,
      image: "/images/fun/codes/type.jpg",
      description:
         "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It helps catch errors early through a type system and improves the development experience.",
   },
   {
      name: "Node.js",
      icon: <FaNode color="#22C55E" className="size-6 text-green-500" />,
      image: "/images/fun/codes/node.jpg",
      description:
         "Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript on the server side. It is widely used for building scalable network applications.",
   },
   {
      name: "Python",
      icon: <FaPython color="#306998" className="size-6 text-blue-400" />,
      image: "/images/fun/codes/python.jpg",
      description:
         "Python is a high-level programming language known for its readability and simplicity. It is used in a wide variety of applications, including web development, data analysis, and artificial intelligence.",
   },
   {
      name: "Java",
      icon: <FaJava color="#EF4444" className="size-6 text-red-500" />,
      image: "/images/fun/codes/java.jpg",
      description:
         "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications.",
   },
];

export const featureTools = [
   {
      name: "Docker",
      icon: <FaDocker color="#60A5FA" className="size-6 text-blue-400" />,
      image: "/images/fun/codes/docker.jpg",
      description:
         "Docker is a platform that enables developers to create, deploy, and run applications in containers. Containers allow applications to be packaged with all their dependencies, ensuring consistency across environments.",
   },
   {
      name: "Kubernetes",
      icon: <SiKubernetes color="#2563EB" className="size-6 text-blue-600" />,
      image: "/images/fun/codes/kuber.png",
      description:
         "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It is widely used for managing complex microservices architectures.",
   },
   {
      name: "GitHub",
      icon: <FaGithub color="#374151" className="size-6 text-gray-700" />,
      image: "/images/fun/codes/git.jpg",
      description:
         "GitHub is a web-based platform for version control and collaboration. It allows developers to host and review code, manage projects, and build software alongside millions of other developers.",
   },
   {
      name: "Figma",
      icon: <FaFigma color="#A855F7" className="size-6 text-purple-500" />,
      image: "/images/fun/codes/figma.jpg",
      description:
         "Figma is a cloud-based design tool that allows designers to collaborate in real-time. It is widely used for UI/UX design, prototyping, and creating design systems.",
   },
   {
      name: "Tailwind",
      icon: <SiTailwindcss color="#2DD4BF" className="size-6 text-teal-400" />,
      image: "/images/fun/codes/tailwind.jpg",
      description:
         "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. It is known for its flexibility and ease of use.",
   },
];

export const featureDatabases = [
   {
      name: "SQL",
      icon: <FaDatabase color="#4B5563" className="size-6 text-gray-600" />,
      image: "/images/fun/codes/sql.png",
      description:
         "SQL (Structured Query Language) is the standard language for relational database management systems. It is used to manage and manipulate relational databases.",
   },
   {
      name: "MongoDB",
      icon: <SiMongodb color="#22C55E" className="size-6 text-green-500" />,
      image: "/images/fun/codes/mongo.png",
      description:
         "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It is known for its scalability and performance in handling large volumes of data.",
   },
   {
      name: "PostgreSQL",
      icon: <SiPostgresql color="#60A5FA" className="size-6 text-blue-400" />,
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3",
      description:
         "PostgreSQL is an advanced, open-source relational database management system. It supports a wide range of data types and has a strong reputation for reliability and performance.",
   },
   {
      name: "AWS",
      icon: <FaAws color="#FB923C" className="size-6 text-orange-400" />,
      image: "/images/fun/codes/AWs2.jpg",
      description:
         "AWS (Amazon Web Services) is a comprehensive cloud computing platform that provides a wide range of services, including computing power, storage, and databases, to help businesses scale and grow.",
   },
   {
      name: "MySQL",
      icon: <SiMysql color="#4B5563" className="size-6 text-gray-600" />,
      image: "/images/fun/codes/mysql.jpg",
      description:
         "MySQL is an open-source relational database management system that is widely used for web applications. It is known for its performance, reliability, and ease of use.",
   },
];

// ===================================================
// Client Section
// ===================================================
export const clientHeading = {
   headingStart: "Hear from our satisfied ",
   headingHighlight: "clients",
   headingEnd: ".",
};

export const clientParagraph = {
   paragraphStart:
      "At Researck, we go beyond software development — we build\n" +
      "partnerships. Our team delivers customized solutions tailored to your\n" +
      "unique needs, leveraging cutting-edge programming languages,\n" +
      "frameworks, and cloud technologies. From concept to launch, we turn\n" +
      "your vision into powerful, scalable, and user-friendly software that\n" +
      "drives growth and success.",
   paragraphHighlight: "",
   paragraphEnd:
      "At Researck, we go beyond software development — we build\n" +
      "partnerships. Our team delivers customized solutions tailored to your\n" +
      "unique needs, leveraging cutting-edge programming languages,\n" +
      "frameworks, and cloud technologies. From concept to launch, we turn\n" +
      "your vision into powerful, scalable, and user-friendly software that\n" +
      "drives growth and success.",
};

// ===================================================
// Pricing Section
// ===================================================

export const subscriptionPlans = [
   {
      id: "demo",
      name: "Demo",
      description: "Try before you buy with our fully-featured demo",
      monthlyPrice: 0,
      yearlyPrice: 0,
      isPopular: false,
      features: [
         "Limited to 5 users",
         "Core features",
         "7-day access",
         "Sample data",
         "Basic support",
      ],
   },
   {
      id: "starter",
      name: "Starter",
      description: "Perfect for small teams just getting started",
      monthlyPrice: 2900,
      yearlyPrice: 29900,
      isPopular: false,
      features: [
         "Up to 10 users",
         "All core features",
         "Basic analytics",
         "Email support",
         "1 GB storage",
      ],
   },
   {
      id: "pro",
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      monthlyPrice: 7900,
      yearlyPrice: 79900,
      isPopular: true,
      features: [
         "Up to 50 users",
         "All core features",
         "Advanced analytics",
         "Priority support",
         "10 GB storage",
         "API access",
         "Custom integrations",
      ],
   },
   {
      id: "enterprise",
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      monthlyPrice: 19900,
      yearlyPrice: 199900,
      isPopular: false,
      features: [
         "Unlimited users",
         "All features",
         "Custom analytics",
         "24/7 support",
         "Unlimited storage",
         "Dedicated account manager",
         "On-premise option",
         "Custom training",
      ],
   },
   {
      id: "custom",
      name: "Custom",
      description: "Tailored solutions for your specific business needs",
      monthlyPrice: 0,
      yearlyPrice: 0,
      isPopular: false,
      features: [
         "Custom user limits",
         "Tailored feature set",
         "Custom integrations",
         "Dedicated support team",
         "Custom SLAs",
         "On-site training",
         "White-labeling options",
      ],
   },
];

export const clientTestimonials = [
   {
      id: 0,
      clientName: "Arjun Nair",
      clientPosition: "IT Manager",
      clientCompany: "TechWave Solutions",
      clientImage:
         "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg?semt=ais_hybrid",
      testimonialText:
         "Partnering with this team has streamlined our operations and boosted efficiency. Their innovative solutions are second to none.",
      companyLogo: park,
      category: "IT Consulting",
   },
   {
      id: 1,
      clientName: "Sneha Sharma",
      clientPosition: "Software Developer",
      clientCompany: "Innovatech Pvt Ltd",
      clientImage:
         "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869165.jpg?semt=ais_hybrid",
      testimonialText:
         "Their attention to detail and dedication to delivering high-quality software have been instrumental in our success.",
      companyLogo: global,
      category: "Software Development",
   },
   {
      id: 2,
      clientName: "Ravi Kulkarni",
      clientPosition: "Project Manager",
      clientCompany: "NextGen Technologies",
      clientImage:
         "https://img.freepik.com/premium-psd/3d-illustration-with-online-avatar_23-2151303107.jpg?semt=ais_hybrid",
      testimonialText:
         "This team has revolutionized the way we manage projects. Their tools and insights are a game-changer for our organization.",
      companyLogo: onestop,
      category: "Project Management",
   },
   {
      id: 3,
      clientName: "Priya Verma",
      clientPosition: "UI/UX Designer",
      clientCompany: "Design Matrix",
      clientImage:
         "https://img.freepik.com/premium-psd/3d-rendering-hair-style-avatar-design_23-2151869169.jpg?semt=ais_hybrid",
      testimonialText:
         "The creative and user-centric approach of this team has brought our designs to life in the best possible way.",
      companyLogo: varnam,
      category: "Design",
   },
   {
      id: 4,
      clientName: "Ankit Joshi",
      clientPosition: "Product Owner",
      clientCompany: "BizCraft Solutions",
      clientImage:
         "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869145.jpg?semt=ais_hybrid",
      testimonialText:
         "Their agile development process and technical expertise have helped us launch successful products on time.",
      companyLogo: remi,
      category: "Product Development",
   },
   {
      clientName: "Kavya Menon",
      clientPosition: "CEO",
      clientCompany: "Digital Infoware",
      clientImage:
         "https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869119.jpg?semt=ais_hybrid",
      testimonialText:
         "This team's dedication to delivering innovative and reliable software solutions is unparalleled.",
      companyLogo: energylife,
      category: "Digital Transformation",
   },
];

// ===================================================
// Event Section
// ===================================================
export const eventSecInfo = {
   heading: "Empowering Your Digital Transformation",
   paragraph:
      "Unlock innovation with cutting-edge software solutions tailored to your business needs. From web development to AI-powered platforms, we bring your ideas to life.",
};

// ===================================================
// Career Section
// ===================================================
export const careerInfo = {
   highlight: "Careers at Researck",
};

export const careerHeading = {
   headingStart: "Unlock new career opportunities at",
   headingHighlight: "Researck",
   headingEnd: ".",
};

export const careerParagraph = {
   paragraphStart:
      "Researck embraces a youthful and flexible spirit, enabling us to swiftly adapt to market research, conditions, and customer demands through our advanced technology.",
   paragraphEnd:
      "Researck embraces a youthful and flexible spirit, enabling us to swiftly adapt to market research, conditions, and customer demands through our advanced technology.",
};

export const careerJob = {
   heading: "Open positions",
   openings: [
      { title: "UX Designer", color: "text-gray-900" },
      { title: "Software Developer", color: "text-gray-900" },
      { title: "iOS Developer", color: "text-gray-900" },
      { title: "Product Designer", color: "text-gray-900" },
      { title: "UX Researcher", color: "text-gray-900" },
      { title: "Project Manager", color: "text-gray-900" },
   ],
};

export const careerFormFields = [
   { label: "First Name", name: "firstName", type: "text", required: true },
   { label: "Last Name", name: "lastName", type: "text", required: true },
   { label: "Email", name: "email", type: "email", required: true },
   { label: "Phone Number", name: "phone", type: "tel", required: true },
   { label: "District", name: "district", type: "text", required: true },
   { label: "State", name: "state", type: "text", required: true },
   {
      label: "Qualification",
      name: "qualification",
      type: "text",
      required: true,
   },
   { label: "Date of Birth", name: "dob", type: "date", required: true },
   {
      label: "Year of Pass",
      name: "yearOfPass",
      type: "number",
      required: true,
   },
   { label: "Upload Resume", name: "resume", type: "file", required: true },
];

export const careerGrid = {
   heading: "Researck thrives on a spirit of agility",
   paragraph:
      "We want to provide a user friendly experience with the eyes capture design and develop product quickly with the ability to solve user problems.",
};

export const careerBanner = {
   heading: "Don't see the role you're interested in?",
   paragraph:
      "We’re always looking for talented people to join our team. Send us your CV and we will contact you for any future roles.",
   buttonText: "Send Your CV",
};

// ===================================================
// Footer Section
// ===================================================
export const footerContent = {
   contact: {
      title: "Contact",
      details: [
         {
            icon: "FaMapLocationDot",
            text: "3rd Floor, Kulathunkal Towers, Perunna, Changanassery",
         },
         {
            icon: "PhoneIcon",
            text: "+91 945 658 3256",
         },
         {
            icon: "EmailRoundedFillIcon",
            text: "support@researck.com",
         },
      ],
   },
   sections: [
      {
         title: "Researck",
         links: [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about-us" },
            { name: "Careers", href: "#career" },
            { name: "Event", href: "#event" },
         ],
      },
      {
         title: "Features",
         links: [
            { name: "System", href: "#" },
            { name: "Campaign", href: "#" },
            { name: "What's New", href: "#" },
            { name: "Release Note", href: "#" },
         ],
      },
      {
         title: "Resources",
         links: [
            { name: "FAQs", href: "#" },
            { name: "Quick Start", href: "#" },
            { name: "Documentation", href: "#" },
            { name: "User Guide", href: "#" },
         ],
      },
   ],
   newsletter: {
      headline: "Join Our Newsletter for Exclusive Updates",
      description:
         "Subscribe to Our Exclusive Newsletter for the Latest Updates",
      placeholder: "support@reserack.com",
      buttonText: "Subscribe",
   },
   socialLinks: [
      {
         icon: "FaTwitterSquare",
         href: "https://researck-website.vercel.app/",
         label: "Twitter",
      },
      { icon: "FaInstagramSquare", href: "#", label: "Instagram" },
      { icon: "FaFacebookSquare", href: "#", label: "Facebook" },
      { icon: "FaYoutubeSquare", href: "#", label: "YouTube" },
   ],
   copyright: {
      text: "©Researck 2025, All rights reserved.",
      policy:
         "When you visit or interact with our sites, services or tools, we or our authorized service providers may use cookies for storing information to help provide you with a better, faster, and safer experience and for marketing purposes.",
   },
};
// ✅ Then export them cleanly
// export const researckBlackLogo = blackLogo;
// export const researckWhiteLogo = whiteLogo;

export const siteName = "WorkSync";
