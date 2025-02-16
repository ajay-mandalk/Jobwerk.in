import axios from "axios";

const API_URL = "http://localhost:1337/api/blog-posts"; // Corrected URL

export async function getBlogPosts(limit = 25, offset = 0) { // Added pagination
  try {
    const response = await axios.get(API_URL, {
      params: {
        populate: "*",
        limit: limit,
        start: offset,
      },
    });
    return response.data; // Return the entire response data
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { data: [] }; // Return an empty array instead of [] to keep type consistency
  }
}

export async function getBlogPostBySlug(slug) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        filters: { slug: { $eq: slug } },
        populate: "*",
      },
    });
    return response.data.data[0];
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}