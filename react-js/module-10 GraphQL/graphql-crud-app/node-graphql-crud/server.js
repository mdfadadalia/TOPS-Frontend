const { ApolloServer } = require("apollo-server-express");
// const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const typeDefs = require("./typeDefs/productTypeDefs");
const resolvers = require("./resolvers/productResolvers")

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.error("MongoDB Connection Error : ", error);
    });

// Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Start Server
const app = express();
async function startServer(){
    // const {url} = await startStandaloneServer(server,{
    //     listen:{port:process.env.PORT || 5000}
    // });
    // console.log(`GraphQL Server running at ${url}`);
    await server.start();
    server.applyMiddleware({app});
     app.listen(4000, () => {
        console.log("Server running at 4000");
    })

}
startServer();