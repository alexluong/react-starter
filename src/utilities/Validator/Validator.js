class Validator {
  // TODO: Implement
  static isHexColor(color) {
    return true;
  }

  // TODO: Implement
  static isRGBAColor(color) {
    return true;
  }

  // TODO: Implement
  static isHSVColor(color) {
    return true;
  }

  static validateForm(values) {
    const errors = {};

    Object.entries(values).forEach(([type, value]) => {
      const errorMessage = this._checkError(type, value);
      if (errorMessage !== '') {
        errors[type] = errorMessage;
      }
    });

    return errors;
  }

  _checkError(type, value) {
    switch (type) {
      case 'email':
        return this._validateEmail(value);
      case 'password':
        return this._validatePassword(value);
      default:
        console.error(`ERROR: "${type}" cannot be validated.`);
        return '';
    }
  }

  _validateEmail(email) {
    let errorMessage = '';

    if (!email) {
      errorMessage = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errorMessage = 'Invalid email address';
    }

    return errorMessage;
  }

  _validatePassword(password) {
    let errorMessage = '';

    if (!password) {
      errorMessage = 'Required';
    } else if (password.length < 6) {
      errorMessage = 'Password must be at least 6 characters';
    }

    return errorMessage;
  }
}

export default Validator;
