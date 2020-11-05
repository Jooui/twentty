const { gql } = require('apollo-server-express');

const typeDefs = gql`
    extend type Query {
        brand(slug: String!): Brand
        brands: [Brand]
    }
    extend type Mutation {
        createBrand(input: BrandInput): Brand
        deleteBrand(slug: String) : String
    }
    type Brand {
        id: ID!
        slug: String!
        name: String
        description: String
        web: String
    }
    
    type DeleteResponse {
        ok: String
    }

    input deleteBrandInput {
        slug: String!
    }
    
    input BrandInput {
        name: String!
        description: String
        web: String
    }
`;

module.exports = typeDefs;

// export default typeDefs;