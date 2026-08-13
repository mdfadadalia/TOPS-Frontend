const Product = require("../models/Products");

const resolvers = {

    // =========================
    // QUERY
    // =========================

    Query: {

        // Get all products
        products: async () => {

            const products = await Product.find()
                .sort({ createdAt: -1 });

            return products;
        },

        // Get single product
        product: async (_, { id }) => {

            const product = await Product.findById(id);

            return product;
        }
    },


    // =========================
    // MUTATION
    // =========================

    Mutation: {

        // CREATE
        createProduct: async (_, { input }) => {

            const product = new Product(input);

            const savedProduct = await product.save();

            return savedProduct;
        },


        // UPDATE
        updateProduct: async (_, { id, input }) => {

            const product = await Product.findByIdAndUpdate(
                id,
                input,
                {
                    new: true,
                    runValidators: true
                }
            );

            return product;
        },


        // DELETE
        deleteProduct: async (_, { id }) => {

            const product = await Product.findByIdAndDelete(id);

            return product;
        }
    }
};

module.exports = resolvers;