import pages from "../data/pages";
import projects from "../data/projects";
import team from "../data/team";
import calculator from "../data/calculator";
import services from "../data/services";
import vr from "../data/vr";
export async function getHomePage() {
  return pages.home;
}

export async function getAboutPage() {
  return pages.about;
}

export async function getTeam() {
  return team;
}
export async function getProjects() {
    return projects;
}

export async function getProject(slug){

    return projects.find(
        project=>project.slug===slug
    );

}

export async function getCalculatorData() {
  return calculator;
}

export async function getServicesPage() {
  return services;
}

export async function getVrPage() {
  return vr;
}

export async function getContactPage() {
  return pages.contact;
}

export async function getPrivacyPolicy() {
  return pages.privacyPolicy;
}

export async function getCareerPage() {
  return pages.career;
}
export async function getNotFoundPage() {
  return pages.notFound;
}