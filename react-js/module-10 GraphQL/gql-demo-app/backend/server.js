const express = require("express");
const {ApolloServer,gql} = require("apollo-server-express");
const app = express();

const students = [
    {
        id:"1",
        name:"Mayur",
        age:36
    },
    {
        id:"2",
        name:"Parag",
        age:35
    },
    {
        id:"3",
        name:"Ashish",
        age:33
    },
    {
        id:"4",
        name:"Jaydeep",
        age:37
    }
];
const typeDefs = gql `
type Student {
    id:ID
    name:String
    age:Int
}
    type Query {
    students:[Student]}
`;
const resolvers = {
    Query:{
        students:()=>{
            return students;
        }
    }
};

async function start()
{
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    server.applyMiddleware({app});
    app.listen(4000,()=>{
        console.log("Server running on port no:4000");
    });
}

start();
