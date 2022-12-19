import { request, gql } from 'graphql-request';


export const getProjects = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query getProjects {
      projects(orderBy: year_DESC) {
        id
        title
        image {
          url
        }
        organization {
          id
          name
          logo {
            url
          }
          location
          logoAlt
          url
        }
        type
        year
        department
        description
        skills {
          id
          name
          image {
            url
          }
        }
      }
    }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.projects;
  };