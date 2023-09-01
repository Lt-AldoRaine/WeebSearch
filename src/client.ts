import { HoudiniClient } from '$houdini';
  
const url = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'https://graphql.anilist.co'

export default new HoudiniClient({
    url: url

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) { 
    //     return { 
    //         headers: {
    //             Authentication: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})
