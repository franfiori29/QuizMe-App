const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");

const User = require("./models/User");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect("mongodb://localhost:27017/quiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
  })
  .then(async () => {
    mongoose.connection.db.dropDatabase();
    console.log("MONGODB CONNECTED");
    return server.listen({ port: 4000 });
  })
  .then((res) => console.log(res.url))
  .catch(console.log);
