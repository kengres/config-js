function matchAlphaNumeric (rule, value, callback, source, options) {
  if (!value || value.replace(/\s+/g, '') === '') {
    callback(new Error('Must not be empty!'));
  } else if (!value.match(/^[a-zа-яА-ЯA-Z0-9.\-_\s]+$/)) {
    callback(new Error('Must contains only letters and numbers!'));
  } else if (value.match(/^\s+|\s+$/)) {
    callback(new Error('No white spaces before or after!'));
  } else {
    callback();
  }
};

var validateName = [
  { required: true, message: 'Please fill this field!', trigger: 'blur' },
  { min: 3, max: 100, message: 'Length should be 3 to 100', trigger: 'blur' },
  { validator: matchAlphaNumeric, trigger: 'blur' }
];

var requiredField = [
  { required: true, message: 'Please fill this field', trigger: 'blur' }
];

function validatePhoneNumber (rule, value, callback) {
  if (!value) {
    callback(new Error('Tel. is required'));
  } else {
    if (!value.match(/^[\\+\\-]?\d+$/)) {
      callback(new Error('Invalid characters!'));
    } else if (value.length < 11) {
      callback(new Error('short lenght!'));
    } else if (value.length > 11) {
      callback(new Error('Invalid phone number!'));
    } else {
      callback();
    }
  }
};
var validatePhone = [
  { required: true, message: 'Please input number', trigger: 'blur' },
  { validator: validatePhoneNumber }
];

module.exports = {
  matchAlphaNumeric: matchAlphaNumeric,
  requiredField: requiredField,
  validateName: validateName,
  validatePhone: validatePhone,
  validatePhoneNumber: validatePhoneNumber,
}
module.exports.defaults = module.exports;
