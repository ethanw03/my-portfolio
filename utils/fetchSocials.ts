// utils/fetchSocials.js
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Social } from "../typings";

const query = groq`*[_type == "social"]`;

export const fetchSocials = async () => {
  try {
    const socials: Social[] = await sanityClient.fetch(query);
    return socials;
  } catch (error) {
    console.error("Error fetching socials:", error);
    throw error;
  }
};
