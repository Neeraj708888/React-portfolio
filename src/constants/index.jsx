import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 Year + of hands-on experience, I have honed my skills in front-end technologies like HTML & HTML5, CSS & CSS3 with framework like Tailwind, React.js and Next.js, as well as back-end technologies like Node.js, Express.js, JavaScript, and database connectivities are MongoDB as well as MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6 Month of professional experience, I have worked with a variety of technologies, including React, JavaScript, Node.js, Tailwind and MongoDB as well as MySQL databases. My journey in web development and full-stack developer or Mern Developer or Node JS Developer began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const QUALIFICATION = [
  {
    year: "2021 - 2023",
    course: "Master  in Computer Application (MCA)",
    college:
      "KCMT- Khandelwal College of Management Science & Technology, Bareilly (UP) -243001",
    university: "AKTU- Abdul Kalam Technology University, Lucknow (UP)",
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "Tailwind"],
    // company: "Google Inc.",
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  },
  {
    year: "2016 - 2019",
    course: "B.COM- Bachelor of Commerce",
    college: "Bareilly College, Bareilly (UP) -243001",
    university:
      "MJPRU- Mahatma Jyotiba Phule Rohilkhand University Bareilly (UP)",
    // description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  },
  {
    year: "2012 - 2014",
    course: "HSC- Higher Secondary Certificate",
    college: "Rajender Prasad Inter College, Meerganj, Bareilly (UP)- 243504",
    university: "UPMSP- Board of High School & Intermediate Education",
    technologies: ["Physics", "Chemistry", "Math"],
    // description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  },
  {
    year: "2011 - 2012",
    course: "SSC- Secondary School Certificate",
    college: "Rajender Prasad Inter College, Meerganj, Bareilly (UP)- 243504",
    university: "UPMSP- Board of High School & Intermediate Education",
    // description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Physics", "Chemistry", "Math"],
  },
];

export const EXPERIENCE = [
  {
    company: "SN Digitech Private Limited",
    position: "MERN Stack Developer",
    location: "Noida, India",
    web_link: "www.sndigitech.com",
    short_name: "SN Digitech",
    duration: [{ start: "Dec 16, 2024" }, { end: "Dec 18, 2025" }],
    description: `
      Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
      Implemented RESTful APIs, JWT-based authentication, Role Based Access Control - RBAC, Pagination, dynamic admin panels, and reusable component libraries.
      Worked closely with UI/UX designers and integrated frontend with backend services.
      Improved app performance and optimized MongoDB queries for large datasets.
    `,
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "BootStrap",
      "JSON Web Tokens (JWT)",
      "Axios",
      "Git",
    ],
    logo: "/assets/logos/sndigitech.png", // Optional
  },
  {
    company: "Railworld India Private Limited",
    position: "React Developer - Intern",
    location: "Gurugram, Haryana",
    duration: [{ start: "Dec 16, 2023" }, { end: "June 16, 2024" }],
    description: `
      Built and supported responsive web applications with React.js to deliver smooth user experiences. Integrated RESTful APIs, implemented JWT authentication, and managed data flow effectively through reusable components. Partnered with UI/UX teams to align frontend functionality with backend systems. Improved performance and fine-tuned database operations to efficiently handle large volumes of data.
    `,
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "Axios", "Git"],
  },
];


export const PROJECTS = [
  {
    title: "Nicki Macfarlane Admin Panel",
    image: project2, // Assuming this is imported correctly above
    description:
      "An application for managing Products and Accessories with Order-Management, with features like Product & Accessories creation, updation, get products with role-based access control, Pagination implemented for large dataset, and progress tracking for order management. Admin panel controls various aspects of the e-commerce platform, including product listings, inventory management, order processing, and user management. Built using MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT-Token- Authentication and Authorization. Here, I integrated CRUD operations for products and accessories, implemented role-based access control to ensure secure access, and designed a user-friendly interface for efficient management.",
    technologies: ["React JS", "Node JS", "MongoDB"],
    links: ["https://alicom-admin-pannel.netlify.app/"],
    media: {
      video_link: "", // Optional video demo link
      project_images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
  },
  {
    title: "SN Digitech Website",
    image: project2, // Assuming this is imported correctly above
    description:
      "Integrated REST APIs into the SN Digitech website to enable dynamic data handling and seamless frontend–backend communication. Implemented secure API calls for fetching and managing content, handled authentication, error handling, and optimized data flow to improve performance and user experience. The integration enhanced the website's functionality, allowing for real-time updates and interactive features that improved user engagement and satisfaction.",
    technologies: ["React JS", "Node JS", "MongoDB", "Context API, Axios-Library"],
    links: ["https://www.sndigitech.com/"],
    media: {
      video_link: "", // Optional video demo link
      project_images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
  },
  {
    title: "My Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
    links: ["https://react-portfolio-neeraj.netlify.app/"],
    media: {
      video_link: "", // Optional video demo link
      project_images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
  },
  {
    title: "Nicki Macfarlane Website",
    image: project4,
    description:
      "A UI/UX case study focused on designing a luxury fashion website that highlights elegance, craftsmanship, and brand storytelling. The design emphasizes clean layouts, strong visual hierarchy, and minimal navigation to enhance user experience and product discovery. Special attention was given to responsive design, accessibility, and performance to match premium brand expectations. Here, I contributed to the front-end development using React JS, Bootstrap, and CSS to bring the design to life.I implemented responsive layouts, interactive elements, and ensured cross-browser compatibility to create a seamless user experience across devices. I implemented features such as image carousels, product galleries, and contact forms to enhance user engagement. I integrated restful APIs to fetch product data and handle user inquiries effectively.",
    technologies: ["React JS", "Bootstrap", "CSS"],
    links: ["https://www.nickimacfarlane.com/"],
    media: {
      video_link: "", // Optional video demo link
      project_images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
  },
  {
    title: "Photo Gallery Admin and Website",
    image: project4,
    description:
      "Developed a full-stack Photo Gallery web application with an Admin panel to manage image content efficiently. Admin can upload, update, delete photos and organize them into albums or categories. Implemented a responsive user interface for viewing images with search and filter functionality. Built using modern web technologies with secure backend APIs and database integration for scalable media management.",
    technologies: ["MongoDB", "Express JS", "React JS", "Node JS", "JSON-Web Token (JWT)", "Cloudinary- Media Management Service"],
    links: ["https://photo-gallery-albums.netlify.app"],
    media: {
      video_link: "", // Optional video demo link
      project_images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
  },
  {
    title: "Question Bank",
    image: project1,
    description:
      "A fully functional with CRUD & features like questions and user authentication with JWT-Token- Authentication and Authorization.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    links: ["https://question-bank-frontend-navy.vercel.app/"],
    media: {
      video_link: "", // Optional video demo link
      project_images: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    },
  },
];
export const CONTACT = {
  address: "Bisrakh Sector-1 Gautambudh Nagar Greater Noida (UP) ",
  phoneNo: "+91 7088887210 ",
  email: "amck.sharma@gmail.com",
};
