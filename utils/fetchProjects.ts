// utils/fetchProjects.js
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Project } from "../typings";

const query = groq`
  *[_type == 'project'] {
    ...,
    technologies[]->
  }
`;

export const fetchProjects = async () => {
  try {
    const projects: Project[] = await sanityClient.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
