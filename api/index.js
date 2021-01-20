const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
  },
  { timestamps: true }
);

const User = model("User", userSchema);

const typeDefs = gql`
  type User {
    username: String!
    password: String!
    email: String!
  }

  input UserInput {
    username: String!
    password: String!
    email: String!
  }

  type Query {
    sayHi: String!
    getUsers: [User]!
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "Hi",
    getUsers: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const newUser = await User.create({ ...input });
      newUser.save();
      return newUser;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect("mongodb://localhost:27017/quiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MONGODB CONNECTED");

    // const user1 = new User({
    //   username: "Paco2",
    //   password: "121233",
    //   email: "pa23co@mail.com",
    // });
    // console.log(await user1.save());
    return server.listen({ port: 4000 });
  })
  .then((res) => console.log(res.url))
  .catch(console.log);
