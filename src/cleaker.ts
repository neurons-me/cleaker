import crypto from 'crypto';
import { keccak256 } from 'js-sha3';
import axios from 'axios';
import me from './methods/me';
import salt from './methods/salt';
import generatePassword from './methods/generatePassword';
import validateUsername from './methods/validateUsername';
import validateEmail from './methods/validateEmail';
import verifyPassword from './methods/verifyPassword';
import randomToken from './methods/randomToken';

// Define the supported hash algorithms as a TypeScript type
type HashAlgorithm = 'SHA-256' | 'DoubleSHA-256' | 'Keccak-256';

// Define the Cleaker class
export default class Cleaker {
  // The ledger property can be of any type (replace `any` with a specific type if possible)
  private ledger: any;

  constructor(ledger: any) {
    this.ledger = ledger;
  }

  /**
   * Main hashing function with algorithm options.
   * @param data - The object or string to be hashed.
   * @param algorithm - The hashing algorithm to use.
   * @param iterations - Number of iterations (if applicable).
   * @returns The resulting hash.
   */
  static hash(
    data: object | string,
    algorithm: HashAlgorithm = 'Keccak-256',
    iterations: number = 1
  ): string {
    const dataString = JSON.stringify(data);
    let hash: string;

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

  /**
   * Methods for Cleaker
   */

  static me(options: any): any {
    return me(options);
  }

  static salt(length: number = 16): string {
    return salt(length);
  }

  static generatePassword(length: number = 12): string {
    return generatePassword(length);
  }

  static validateUsername(username: string): boolean {
    return validateUsername(username);
  }

  static validateEmail(email: string): boolean {
    return validateEmail(email);
  }

  static verifyPassword(
    password: string,
    hashedPassword: string,
    salt: string,
    iterations: number = 1000
  ): boolean {
    return verifyPassword(password, hashedPassword, salt, iterations);
  }

  static randomToken(length: number = 20): string {
    return randomToken(length);
  }
}