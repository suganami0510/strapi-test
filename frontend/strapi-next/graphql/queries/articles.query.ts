import { gql } from '@apollo/client';
import { Article } from '../../types/article';

export const ARTICLES_QUERY = gql`
  query {
    articles {
      id
      title
      content
    }
  }
`;

export interface ArticlesData {
  articles: Article[];
}