import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query getBlogs {
    blogs {
      id
      slug
      title
      publishedAt
    }
  }
`;

export const GET_POST = gql`
  query getBlog($where: JSON!) {
    blogs(where: $where) {
      id
      slug
      title
      content
      publishedAt
    }
  }
`;
