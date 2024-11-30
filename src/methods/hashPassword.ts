import crypto from 'crypto';

/**
 * Hashes a password with a salt and a given number of iterations.
 * @param password - Plain text password to hash.
 * @param salt - Salt used during hashing.
 * @param iterations - Number of iterations for hashing.
 * @returns A Promise resolving to the hashed password as a string.
 */
async function hashPassword(password: string, salt: string, iterations: number): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, iterations, 64, 'sha512', (err, derivedKey) => {
      if (err) {
        return reject(err);
      }
      resolve(derivedKey.toString('hex'));
    });
  });
}

export default hashPassword;