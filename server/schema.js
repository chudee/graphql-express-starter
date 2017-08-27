import { makeExecutableSchema } from 'graphql-tools';

const TypeDefs = `
    type Query {
        testString: String
        hello_world: String
    }

    schema {
        query: Query
    }
`;

export default makeExecutableSchema({
    typeDefs: TypeDefs,
    resolvers: {
        Query: {
            testString: () => 'It Works!', 
            hello_world() {
                return 'Hello GraphQL!!'
            },
        }
    }
});