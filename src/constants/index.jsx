import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 6 Month of hands-on experience, I have honed my skills in front-end technologies like HTML & HTML5, CSS & CSS3 with framework like Tailwind, React and Next.js, as well as back-end technologies like Node.js, JavaScript, and database connectivities are MongoDB as well as MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

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
    position: "MERN Developer",
    location: "Noida, India",
    web_link: "https://www.sndigitech.com/",
    duration: [
      { start: "May 19, 2023" },
      { end: "Present" }
    ],
    description: `
      Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
      Implemented RESTful APIs, JWT-based authentication, dynamic admin panels, and reusable component libraries.
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
      "JWT Auth",
      "Axios",
      "Git",
    ],
    website: "https://www.sndigitech.com", // Optional
    logo: "/assets/logos/sndigitech.png",   // Optional
  },
  // You can add more experience entries below if needed
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    details: {
      links: {
        web: "https://alicom-admin-pannel.netlify.app/login",
        local: {
          github: "",
        },
      },
      media: {
        video_link: "", // Optional video demo link
        project_images: [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg",
        ],
      },
    },
  },
  {
    title: "Nicki Macfarlane Admin",
    image: project2, // Assuming this is imported correctly above
    description:
      "An application for managing tasks and projects, with features like task creation, assignment, role-based access control, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    details: {
      links: {
        web: "https://alicom-admin-pannel.netlify.app/login",
        local: {
          github: "",
        },
      },
      media: {
        video_link: "", // Optional video demo link
        project_images: [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg",
        ],
      },
    },
  },
  {
    title: "BDRL Admin Pannel",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    details: {
      links: {
        web: "https://alicom-admin-pannel.netlify.app/login",
        local: {
          github: "",
        },
      },
      media: {
        video_link: "", // Optional video demo link
        project_images: [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg",
        ],
      },
    },
  },
  {
    title: "Guruji Admin Pannel",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mongoDB"],
    details: {
      links: {
        web: "https://alicom-admin-pannel.netlify.app/login",
        local: {
          github: "",
        },
      },
      media: {
        video_link: "", // Optional video demo link
        project_images: [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg",
        ],
      },
    },
  },
  {
    title: "Nicki Macfarlane Website",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mongoDB"],
    details: {
      links: {
        web: "https://alicom-admin-pannel.netlify.app/login",
        local: {
          github: "",
        },
      },
      mmedia: {
        video_link: "", // Optional video demo link
        project_images: [
          "image1.jpg",
          "image2.jpg",
          "image3.jpg",
          "image4.jpg",
        ],
      },
    },
  },
];

export const CONTACT = {
  address: "Bisrakh Sector-1 Gautambudh Nagar Greater Noida (UP) ",
  phoneNo: "+91 7088887210 ",
  email: "amck.sharma@gmail.com",
};
