// utils/fetchPageInfo.js
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

const query = groq`*[_type == "pageInfo"][0]`;

export const fetchPageInfo = async () => {
  try {
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    return pageInfo;
  } catch (error) {
    console.error("Error fetching page info:", error);
    throw error;
  }
};
