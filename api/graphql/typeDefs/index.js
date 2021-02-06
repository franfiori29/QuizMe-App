const userTypes = require('./users');
const quizzesTypes = require('./quizzes');
const statsTypes = require('./stats');
const { gql } = require('apollo-server');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const types = [userTypes, quizzesTypes, statsTypes];

module.exports = mergeTypeDefs(types);
