import crypto from 'crypto';
import pkg from 'js-sha3';
import axios from 'axios';
import me from './methods/me.js'; // Import the me module
import salt from './methods/salt.js'; // Import the salt module
import generatePassword from './methods/generatePassword.js'; // Import generatePassword
import validateUsername from './methods/validateUsername.js'; // Import validateUsername
import validateEmail from './methods/validateEmail.js'; // Import validateEmail
import verifyPassword from './methods/verifyPassword.js'; // Import verifyPassword
import randomToken from './methods/randomToken.js'; // Import randomToken
const { keccak256 } = pkg;
class Cleaker {
  constructor(ledger) { 
    this.ledger = ledger;
  }

  /**
   * Main hashing function with algorithm options.
   * @param {Object|string} data - The object or string to be hashed.
   * @param {string} [algorithm='Keccak-256'] - The hashing algorithm to use.
   * @param {number} [iterations=1] - Number of iterations (if applicable).
   * @returns {string} The resulting hash.
   */
  static hash(data, algorithm = 'Keccak-256', iterations = 1) {
    const dataString = JSON.stringify(data);
    let hash;
    switch (algorithm) {
      case 'SHA-256':
        hash = crypto.createHash('sha256').update(dataString).digest('hex');
        break;
      case 'DoubleSHA-256':
        hash = crypto.createHash('sha256').update(
          crypto.createHash('sha256').update(dataString).digest()
        ).digest('hex');
        break;
      case 'Keccak-256':
        hash = keccak256(dataString);
        break;
      default:
        throw new Error('Unsupported hashing algorithm');
    }
    for (let i = 1; i < iterations; i++) {
      hash = keccak256(hash);
    }
    return hash;
  }

  // Incorporate standalone methods as Cleaker class methods

  static me(options) {
    return me(options);
  }

  static salt(length = 16) {
    return salt(length);
  }

  static generatePassword(length = 12) {
    return generatePassword(length);
  }

  static validateUsername(username) {
    return validateUsername(username);
  }

  static validateEmail(email) {
    return validateEmail(email);
  }

  static verifyPassword(password, hashedPassword, salt, iterations = 1000) {
    return verifyPassword(password, hashedPassword, salt, iterations);
  }

  static randomToken(length = 20) {
    return randomToken(length);
  }
}

export default Cleaker;