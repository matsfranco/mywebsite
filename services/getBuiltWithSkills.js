import { request, gql } from 'graphql-request';


export const getBuiltWithSkills = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query getBuiltWithSkills {
      skills (where:{usedInWebsite: true}, first:20, orderBy: name_ASC) {
        id
        name
        group
        image {
          url
        }
      }
    }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.skills;
  };