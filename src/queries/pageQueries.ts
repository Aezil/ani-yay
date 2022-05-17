import { gql } from '@apollo/client';

export const pageQuery = gql`
  query PageQuery($page: Int, $title: String) {
    Page(page: $page) {
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
        status
        type
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        popularity
        format
      }
    }
  }
`;
