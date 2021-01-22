const userTypes = require('./users');
const quizzesTypes = require('./quizzes');
const { gql } = require('apollo-server');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const types = [userTypes, quizzesTypes];

module.exports = mergeTypeDefs(types);
