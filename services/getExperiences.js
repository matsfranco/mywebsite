import { request, gql } from 'graphql-request';


export const getExperiences = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query getExperiences {
      experiences (orderBy: endDate_DESC){
        id
        type
        isCurrentlyWorkingHere
        jobTitle
        skills {
          ... on Skill {
            id
            name
            image {
              url
            }
          }
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
        description
        endDate
        startDate
        image {
          url
        }
      }
    }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.experiences;
  };