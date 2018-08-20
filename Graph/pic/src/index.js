const { GraphQLServer  } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    posts: (_, args, ctx, info) => {
        
    },
    user: (_, args, ctx, info) => {

    }
  }
}


const server = new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    ctx: req => ({
        ...req,
        prisma: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'http://127.0.0.1:4466/pic/pic'
        })
    })
})

server.start(() => console.log('GraphQL server is runing on http://127.0.0.1:4000'))