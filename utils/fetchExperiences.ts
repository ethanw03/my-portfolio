// utils/fetchExperiences.js
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";
import { Experience } from "../typings";

const query = groq`
  *[_type == 'experience'] {
    ...,
    technologies[]->
  }
`;

export const fetchExperiences = async () => {
  try {
    const experiences: Experience[] = await sanityClient.fetch(query);
    console.log("Fetched experiences:", experiences);
    return experiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    throw error;
  }
};
