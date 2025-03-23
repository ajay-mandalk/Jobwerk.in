import axios from "axios";

const API_URL = import.meta.env.STRAPI_URL 
  ? `${import.meta.env.STRAPI_URL}/api/blog-posts`
  : "http://localhost:1337/api/blog-posts";

/**
 * Fetches blog posts with pagination
 * @param {number} limit - Number of posts to fetch
 * @param {number} offset - Offset for pagination
 * @returns {Promise<Object>} - Blog posts data
 */
export async function getBlogPosts(limit = 25, offset = 0) {
  try {
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await axios.get(API_URL, {
      params: {
        populate: "*",
        limit: limit,
        start: offset,
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request was cancelled due to timeout");
    } else {
      console.error("Error fetching blog posts:", error);
    }
    return { data: [] };
  }
}

/**
 * Fetches a single blog post by slug
 * @param {string} slug - Blog post slug
 * @returns {Promise<Object|null>} - Blog post data or null
 */
export async function getBlogPostBySlug(slug) {
  if (!slug) return null;
  
  try {
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    const response = await axios.get(API_URL, {
      params: {
        filters: { slug: { $eq: slug } },
        populate: "*",
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    return response.data.data[0] || null;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request was cancelled due to timeout");
    } else {
      console.error("Error fetching blog post:", error);
    }
    return null;
  }
}