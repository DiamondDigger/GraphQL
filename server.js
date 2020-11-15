const { request } = require('express')
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema, GraphQLObjectType, GraphQLString, GraphQLSchema} = require('graphql')
const app = express()

// const schema = buildSchema(`
//     type Query{
//         hello: String
//     }
// `)

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:'HelloWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello world from GraphQL'
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(5001, () => console.log('Server is running now...'))