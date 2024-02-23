require('dotenv').config();

module.exports = {
  client: {
    service: {
      name: 'yoopii',
      // URL to the GraphQL API
      url: process.env.VITE_GRAPHQL_URL || 'http://localhost:3000/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
      'src/**/*.ts',
    ],
  },
};