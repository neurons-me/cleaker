import crypto from 'crypto';

/**
 * Generates a salt for password hashing.
 * @param {number} [length=16] - Length of the salt.
 * @returns {string} The salt in hexadecimal format.
 */
function salt(length = 16) {
  return crypto.randomBytes(length).toString('hex');
}

export default salt;