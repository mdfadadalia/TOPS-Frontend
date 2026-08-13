const typeDefs = `#graphql

    type Product {
        id: ID!
        name: String!
        price: Float!
        category: String!
        quantity: Int!
        createdAt: String
        updatedAt: String
    }

    input ProductInput {
        name: String!
        price: Float!
        category: String!
        quantity: Int
    }

    input ProductUpdateInput {
        name: String
        price: Float
        category: String
        quantity: Int
    }

    type Query {
        products: [Product!]!
        product(id: ID!): Product
    }

    type Mutation {
        createProduct(input: ProductInput!): Product!
        updateProduct(
            id: ID!
            input: ProductUpdateInput!
        ): Product
        deleteProduct(id: ID!): Product
    }
`;

module.exports = typeDefs;