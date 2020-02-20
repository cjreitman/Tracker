// validation/logs.js

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLogInput(data) {
  let errors = {};
  
  // if (typeof(data.calories) !== 'number') {
  //   errors.calories = 'Calories must be a number';
  // }

  // if (typeof(data.protein) !== 'number') {
  //   errors.protein = 'Protein must be a number';
  // }

  if (!Validator.isLength(data.name, { min: 1, max: 20 })) {
    errors.name = 'Name of log must be between 1 and 20 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};