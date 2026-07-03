import images from "./images";
const pages = {
  home: {
    heroTitle: "Modern Villa",
    heroSubtitle: "Where Architecture Meets Luxury",
    companyName: "amartya architects",
    companyTagLine: "Crafting Spaces, Creating Experiences",
    heroImages: images.homePageImages,
  },

  about: {
    bannerImage: images.aboutPageImages,
    bannerText: " Designing Spaces That Inspire",
    aboutText:
      "At Amartya Architects, we believe architecture is more than designing buildings— it's about creating experiences that enrich everyday life. With a passion for innovative design, functional planning, and attention to detail, we transform ideas into timeless spaces that reflect our clients' vision and lifestyle. From luxury residences and modern villas to commercial and interior projects, every design is thoughtfully crafted to balance aesthetics, comfort, and practicality.",
  },

  contact: {
    hero: {
      title: "Contact Us",
      subTitle:
        "Let's discuss your dream project. We're here to guide you from concept to completion.",
      bannerImage: "/contact-banner.jpg",
    },

    info: {
      heading: "Get In Touch",
      description:
        "Whether you're planning a residential, commercial, or interior project, our team is ready to help.",

      phone: "+91 9876543210",
      email: "info@amartyaarchitects.com",
      address: "B-4/238, Pocket 4, Sector 7, Rohini, New Delhi, Delhi, 110085",

      officeHours: "Mon - Sat : 10:00 AM - 7:00 PM",
    },

    form: {
      heading: "Send Us a Message",
      subHeading: "Fill out the form below and we'll get back to you shortly.",
    },

    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.861365936213!2d77.11848907495941!3d28.704727680799493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d039e6dbcf5bd%3A0xf432a08780bccd6e!2sAmartya%20Architects!5e1!3m2!1sen!2sin!4v1782981983841!5m2!1sen!2sin",
    },
  },

  privacyPolicy: {
  hero: {
    title: "Privacy Policy",
    subTitle:
      "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
    bannerImage: "/2.jpg",
  },

  sections: [
    {
      id: 1,
      title: "Information We Collect",
      content:
        "We may collect personal information such as your name, email address, phone number, and project details when you contact us or use our services.",
    },

    {
      id: 2,
      title: "How We Use Your Information",
      content:
        "Your information is used to respond to inquiries, provide architectural consultation, improve our services, and communicate project updates.",
    },

    {
      id: 3,
      title: "Cookies",
      content:
        "Our website may use cookies to improve user experience and analyze website traffic. You can disable cookies through your browser settings.",
    },

    {
      id: 4,
      title: "Third-Party Services",
      content:
        "We may use trusted third-party services such as Google Maps and analytics tools. These services have their own privacy policies.",
    },

    {
      id: 5,
      title: "Data Security",
      content:
        "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse.",
    },

    {
      id: 6,
      title: "Your Rights",
      content:
        "You may request access, correction, or deletion of your personal information by contacting us directly.",
    },

    {
      id: 7,
      title: "Contact Us",
      content:
        "If you have any questions regarding this Privacy Policy, please contact us through our Contact page.",
    },
  ],
},

career: {
  hero: {
    title: "Careers",
    subTitle:
      "Join our passionate team of architects, designers, and creative thinkers.",
    bannerImage: "/2.jpg",
  },

  intro: {
    heading: "Build Your Career With Us",
    description:
      "At Amartya Architects, we believe great architecture is created by great people. We're always looking for talented individuals who are passionate about design, innovation, and creating meaningful spaces.",
  },

  openings: [
    {
      id: 1,
      title: "Junior Architect",
      location: "Jaipur",
      type: "Full Time",
      experience: "1-3 Years",
      description:
        "Looking for a creative architect with strong AutoCAD and SketchUp skills.",
    },

    {
      id: 2,
      title: "Interior Designer",
      location: "Jaipur",
      type: "Full Time",
      experience: "2-4 Years",
      description:
        "Experience in residential and commercial interior projects.",
    },

    {
      id: 3,
      title: "Site Supervisor",
      location: "Jaipur",
      type: "Full Time",
      experience: "3+ Years",
      description:
        "Ability to manage site execution and coordinate with contractors.",
    },
  ],

  apply: {
    heading: "Didn't Find a Suitable Role?",
    description:
      "Send us your resume and portfolio. We're always interested in meeting talented people.",

    email: "careers@amartyaarchitects.com",
  },
},

footer: {
  quickLinks: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "The Studio",
      path: "/about",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "VR",
      path: "/vr",
    },
  ],

  importantLinks: [
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      path: "/terms-and-conditions",
    },
    {
      label: "Career",
      path: "/career",
    },
  ],
},
notFound: {
  hero: {
    title: "404",
    subTitle: "Oops! The page you're looking for doesn't exist or has been moved.",
    bannerImage: "/404-banner.jpg",
  },

  content: {
    heading: "Page Not Found",

    description:
      "The page you are trying to access may have been removed, renamed, or is temporarily unavailable.",

    primaryButton: {
      text: "Back to Home",
      path: "/",
    },

    secondaryButton: {
      text: "Explore Projects",
      path: "/project",
    },
  },
},
};

export default pages;
