import { request, gql } from 'graphql-request';


export const getSkills = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query getSkills {
      skills (where:{showInSkillsPage: true}, first:20, orderBy: name_ASC) {
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