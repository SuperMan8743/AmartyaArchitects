import axios from "axios";

// import pages from "../data/pages";
// import projects from "../data/projects";
// import team from "../data/team";
import calculator from "../data/calculator";
// import services from "../data/services";
// import vr from "../data/vr";

const API = axios.create({
  baseURL: "https://cms.amartyaarchitects.com/wp-json/wp/v2",
});

// helper funcation
async function getFeaturedImage(mediaId) {
  if (!mediaId) return "";

  const { data } = await API.get(`/media/${mediaId}`);

  return data.source_url;
}

// project slug
export async function getProject(slug) {
  const { data } = await API.get(`/project?slug=${slug}`);

  return await mapProject(data[0]);
}

// projects

export async function getProjects() {
  const { data } = await API.get("/project");

  return await Promise.all(data.map(mapProject));
}

async function mapProject(project) {
  const image = await getFeaturedImage(project.featured_media);

  return {
    id: project.id,
    slug: project.slug,

    title: project.title.rendered,

    thumbnail: image,
    bannerImage: image,

    category: project.acf?.project_category?.[0] || "",

    hero: {
      subTitle: project.acf?.subheading || "",
    },

    description: project.acf?.project_description || "",

    gallery:
      project.acf?.photo_gallery?.project_gallery?.[0]?.map(
        (img) => img.full_image_url,
      ) || [],

    height: 500,
  };
}

// Home page
export async function getHomePage() {
  const { data } = await API.get("/pages?slug=home");

  const page = data[0];

  const heroImage1 = await getFeaturedImage(page.featured_media);
  const heroImage2 = await getFeaturedImage(page.acf?.hero_image_2);
  const heroImage3 = await getFeaturedImage(page.acf?.hero_image_3);

  return {
    heroTitle: page.acf?.hero_title || page.title.rendered,

    heroSubtitle: page.acf?.hero_subtitle || "",

    companyName: page.acf?.company_name || "",

    companyTagLine: page.acf?.company_tagline || "",

    heroImages: {
      img1: heroImage1,
      img2: heroImage2,
      img3: heroImage3,
    },
  };
}

// about page
export async function getAboutPage() {
  // About page fetch
  const { data } = await API.get("/pages?slug=about");

  const page = data[0];

  // Hero image
  const heroImage = await getFeaturedImage(page.featured_media);

  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
      bannerImage: heroImage,
    },

    aboutHeading: page.acf?.about_heading || "",
    aboutDescription: page.acf?.about_description || "",

    teamHeading: page.acf?.team_heading || "",
    teamSubHeading: page.acf?.team_sub_heading || "",
  };
}
// getTeam

export async function getTeam() {
  const { data } = await API.get("/team");

  const members = await Promise.all(
    data.map(async (member) => {
      const image = await getFeaturedImage(member.featured_media);

      return {
        id: member.id,
        name: member.title.rendered,
        designation: member.acf?.designation || "",
        bio: member.acf?.bio || "",
        image,
      };
    }),
  );

  return {
    heading: "Our Team",
    subHeading: "Meet Our Experts",
    members,
  };
}

// Cost Calculator
export async function getCalculatorData() {
  const { data } = await API.get("/pages?slug=cost-calculator");

  const page = data[0];

  const heroImage = await getFeaturedImage(page.featured_media);

  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
      bannerImage: heroImage,
    },

    intro: {
      heading: page.acf?.intro_heading || "",
      description: page.acf?.intro_description || "",
    },

    categories: calculator.categories,
    whatsappNumber: page.acf?.whatsapp_number || "",
  };
}

// service page
export async function getServicesPage() {
  const { data } = await API.get("/pages?slug=service");

  const page = data[0];

  const heroImage = await getFeaturedImage(page.featured_media);

  const architectureImage = await getFeaturedImage(
    page.acf?.architecture_image,
  );

  const interiorImage = await getFeaturedImage(page.acf?.interior_image);

  const landscapeImage = await getFeaturedImage(page.acf?.landscape_image);

  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
      bannerImage: heroImage,
    },
    intro: {
      heading: page.acf?.intro_heading || "",
      description: page.acf?.intro_description || "",
    },

    serviceList: [
      {
        id: 1,
        title: "Architecture Design",
        slug: "architecture-design",
        image: architectureImage,
        description:
          page.acf?.architecture_description
            ?.split("\n")
            .map((item) => item.trim())
            .filter(Boolean) || [],
      },

      {
        id: 2,
        title: "Interior Design",
        slug: "interior-design",
        image: interiorImage,
        description:
          page.acf?.interior_description
            ?.split("\n")
            .map((item) => item.trim())
            .filter(Boolean) || [],
      },

      {
        id: 3,
        title: "Landscape Design",
        slug: "landscape-design",
        image: landscapeImage,
        description:
          page.acf?.landscape_description
            ?.split("\n")
            .map((item) => item.trim())
            .filter(Boolean) || [],
      },
    ],

    // Abhi local data hi use karenge
    process: {
      heading: page.acf?.process_heading || "",
      subHeading: page.acf?.process_subtitle || "",
      steps: [
        {
          number: page.acf?.process_1_number || "",
          title: page.acf?.process_1_title || "",
          description: page.acf?.process_1_description || "",
        },
        {
          number: page.acf?.process_2_number || "",
          title: page.acf?.process_2_title || "",
          description: page.acf?.process_2_description || "",
        },
        {
          number: page.acf?.process_3_number || "",
          title: page.acf?.process_3_title || "",
          description: page.acf?.process_3_description || "",
        },
        {
          number: page.acf?.process_4_number || "",
          title: page.acf?.process_4_title || "",
          description: page.acf?.process_4_description || "",
        },
      ],
    },

    whyChooseUs: {
      heading: page.acf?.why_heading || "",
      subHeading: page.acf?.why_subtitle || "",
      items: [
        {
          title: page.acf?.why_1_title || "",
          description: page.acf?.why_1_description || "",
        },
        {
          title: page.acf?.why_2_title || "",
          description: page.acf?.why_2_description || "",
        },
        {
          title: page.acf?.why_3_title || "",
          description: page.acf?.why_3_description || "",
        },
        {
          title: page.acf?.why_4_title || "",
          description: page.acf?.why_4_description || "",
        },
        {
          title: page.acf?.why_5_title || "",
          description: page.acf?.why_5_description || "",
        },
        {
          title: page.acf?.why_6_title || "",
          description: page.acf?.why_6_description || "",
        },
      ].filter((item) => item.title.trim() !== ""),
    },

    cta: {
      title: page.acf?.cta_title || "",
      description: page.acf?.cta_description || "",
      buttonText: page.acf?.cta_button_text || "",
      buttonLink: page.acf?.cta_button_link || "",
      backgroundImage: await getFeaturedImage(page.acf?.cta_background_image),
    },
  };
}

// VR PAGE
export async function getVrPage() {
  // Main VR page
  const { data } = await API.get("/pages?slug=vr-tour");

  const page = data[0];

  if (!page) {
    throw new Error("VR page not found");
  }

  // Hero image
  const heroImage = await getFeaturedImage(page.featured_media);

  // Dynamic VR Tours from custom API
  const { data: vrData } = await axios.get(
    "https://cms.amartyaarchitects.com/wp-json/amartya/v1/vr-tours"
  );

  const tours = (vrData?.tours || []).map((tour) => ({
    id: tour.id,
    image: tour.image || "",
    title: tour.title || "",
    location: tour.location || "",
    vrLink: tour.vr_url || "",
    category: tour.category || "",
  }));

  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
      bannerImage: heroImage,
    },

    intro: {
      heading: page.acf?.intro_heading || "",
      description: page.acf?.intro_description || "",
    },

    tours,
  };
}
// Contact page
export async function getContactPage() {
  const { data } = await API.get("/pages?slug=contact");

  const page = data[0];

  const heroImage = await getFeaturedImage(page.featured_media);

  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
      bannerImage: heroImage,
    },

    info: {
      heading: page.acf?.contact_heading || "",
      description: page.acf?.contact_sub_heading || "",
      address: page.acf?.office_address || "",
      phone: page.acf?.phone_number || "",
      email: page.acf?.email_address || "",
      workingHours: page.acf?.working_hours || "",
    },

    map: {
      embedUrl: page.acf?.google_map_embed_url || "",
    },
  };
}

// contact form
export async function submitContactForm(formData) {
  const { data } = await axios.post(
    "https://cms.amartyaarchitects.com/wp-json/amartya/v1/contact",
    formData,
  );

  return data;
}


// privacypolicy
export async function getPrivacyPolicy() {
  const { data } = await API.get("/pages?slug=privacy-policy");

  const page = data[0];

  const heroImage = await getFeaturedImage(page.featured_media);
  console.log(data[0]); // 👈 add this
  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
      bannerImage: heroImage,
    },

    content: page.content.rendered,
  };
}

// terms condition
export async function getTermsConditions() {
  const { data } = await API.get("/pages?slug=terms-conditions");

  const page = data[0];

  const heroImage = await getFeaturedImage(page.featured_media);

  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
     bannerImage: heroImage || null,
    },

    content: page.content.rendered,
  };
}

// Career Page
export async function getCareerPage() {
  const { data } = await API.get("/pages?slug=career");

  const page = data[0];
  const heroImage = await getFeaturedImage(page.featured_media);

  return {
    hero: {
      title: page.acf?.hero_title || page.title.rendered,
      subTitle: page.acf?.hero_subtitle || "",
      bannerImage: heroImage,
    },

    intro: {
      heading: page.acf?.section_heading || "",
      description: page.acf?.section_description || "",
    },

    openings: [
  {
    title: page.acf?.job1_title || "",
    location: page.acf?.job_1_location || "",
    type: page.acf?.job_1_type || "",
    experience: page.acf?.job_1_experience || "",
    description: page.acf?.job_1_description || "",
  },
  {
    title: page.acf?.job_2_title || "",
    location: page.acf?.job_2_location || "",
    type: page.acf?.job_2_type || "",
    experience: page.acf?.job_2_experience || "",
    description: page.acf?.job_2_description || "",
  },
],

    apply: {
      heading: page.acf?.apply_heading || "",
      description: page.acf?.apply_description || "",
      email: page.acf?.apply_email || "",
    },
  };
}

export async function getNotFoundPage() {
  return pages.notFound;
}



// site Setting
export async function getSiteSettings() {
  const { data } = await API.get("/pages?slug=site-settings");

  const page = data[0];

  const logo = await getFeaturedImage(page.featured_media);

  return {
    companyName: page.acf?.company_name || "",
    companyTagline: page.acf?.company_tagline || "",

    logo,

    phone: page.acf?.phone || "",
    email: page.acf?.email || "",
    address: page.acf?.address || "",
    workingHours: page.acf?.working_hours || "",

    facebook: page.acf?.facebook || "",
    instagram: page.acf?.instagram || "",
    linkedin: page.acf?.linkedin || "",
    youtube: page.acf?.youtube || "",
    pinterest: page.acf?.pintrest || "",

    copyright: page.acf?.copyright_text || "",
  };
}
