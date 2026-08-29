import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  author->{
    name,
    image
  }
}`;

export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body,
  author->{
    name,
    image,
    bio
  }
}`;
