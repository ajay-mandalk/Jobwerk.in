// src/types/blogPost.ts
export interface ImageAttributes {
    url: string;
  }
  
  export interface ImageData {
    attributes: ImageAttributes;
  }
  
  export interface Author {
    name: string;
    avatar: string;
  }
  
  export interface PostAttributes {
    title: string;
    excerpt: string;
    content: string;
    coverImage: {
      data: ImageData;
    };
    author: Author;
  }
  
  export interface Post {
    id: number;
    attributes: PostAttributes;
  }
  
  export interface StrapiResponse {
    data: Post[];
  }