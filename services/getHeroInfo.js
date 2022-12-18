import { request, gql } from 'graphql-request';
import { createImportSpecifier } from 'typescript';


export const getHeroInfo = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query Assets {
        heroInfo(where: {id: "clbtmjzci4n6e09kb1cqr4cvw"}) {
          id
          backgroundInformation
          heroImage {
            url
          }
          profilePicture {
            url
          }
          name
          role
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.heroInfo;
  };