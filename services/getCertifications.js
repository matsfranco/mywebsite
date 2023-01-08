import { request, gql } from 'graphql-request';


export const getCertifications = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query getCertifications {
      certifications (first:20, orderBy: date_DESC) {
        id
        name
        date
        number
        expeditedBy
        image {
          url
        }
      }
    }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.certifications;
  };