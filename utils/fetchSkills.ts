// utils/fetchSkills.js
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Skill } from "../typings";

const query = groq`*[_type == "skill"]`;

export const fetchSkills = async () => {
  try {
    const skills: Skill[] = await sanityClient.fetch(query);
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};
