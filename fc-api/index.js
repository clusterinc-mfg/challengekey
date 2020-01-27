import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

import Query from './server/resolvers/Query'

require('dotenv').config()

//TODO: Create a connection to the mongodb database
//see .env file for port and mongoURI
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})


//TODO: Setup a graphql server.
//use the ./server/schema.graphql file and
const server = new GraphQLServer({
    typeDefs: './server/schema.graphql',
    resolvers: {
        Query
    }
})


//set the server options
//use the env port and default to 3010
//set the end point to be "/"
//set the playground endpoint to equal /gql

const options = {
    port: process.env.PORT || 3010,
    endpoint: "/",
    playground: '/gql'
}


server.start( options, ()=>{
    console.log('server has started')
})