const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({
  typeDefs,
  mocks: {
    Launch: () => ({
      site: 'SiteA',
    }),
  },
  mockEntireSchema: truhttps://www.apollographql.com/docs/tutorial/introduction/e,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
