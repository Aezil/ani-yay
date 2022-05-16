import { gql } from '@apollo/client';

export const animeQuery = gql`
  query PageQuery($page: Int, $perPage: Int, $title: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: $title) {
        id
        title {
          romaji
        }
        description
      }
    }
  }
`;
