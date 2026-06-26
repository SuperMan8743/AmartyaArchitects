import pages from "../data/pages";
import team from "../data/team";

export async function getHomePage() {
  return pages.home;
}

export async function getAboutPage() {
  return pages.about;
}

export async function getTeam() {
  return team;
}