import { request, gql } from 'graphql-request';

export const getEquipments = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query getEquipments {
      equipments (orderBy: role_ASC){
        id
        manufacturer
        model
        role
        description
        tags
        photo {
          url
        }
      }
    }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.equipments;
  };