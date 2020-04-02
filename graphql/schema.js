const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type TestData {
        text: String!
        views: Int!
    }

    type RootType {
        hello: TestData!
    }
    
    schema {
        query: RootType
    }
`);
