import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    //uri: "http://localhost:5001/api/insipid-iguana",
    uri: "https://eastdonegal.stepzen.net/api/insipid-iguana/__graphql",
    headers: {
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache()
})

export default client