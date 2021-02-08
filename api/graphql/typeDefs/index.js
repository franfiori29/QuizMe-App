const userTypes = require('./users');
const quizzesTypes = require('./quizzes');
const statsTypes = require('./stats');
const validationsTypes = require('./validations');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const types = [userTypes, quizzesTypes, statsTypes, validationsTypes];

module.exports = mergeTypeDefs(types);
