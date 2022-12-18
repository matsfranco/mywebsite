import { request, gql } from 'graphql-request';


export const getSkills = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
    query getSkills {
      skills (where:{showInSkillsPage: true}) {
        name
        image {
          url
        }
      }
    }
    `;
  
    const result = await request(graphqlAPI, query);
    console.log("skills:"+result)
    return result.skills;
  };