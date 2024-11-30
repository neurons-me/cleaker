declare module 'cleaker' {
    export default class Cleaker {
      constructor(ledger: any);
      static hash(data: any, algorithm?: string, iterations?: number): string;
      static me(options: any): any;
      static salt(length?: number): string;
      static generatePassword(length?: number): string;
      static validateUsername(username: string): boolean;
      static validateEmail(email: string): boolean;
      static verifyPassword(password: string, hashedPassword: string, salt: string, iterations?: number): boolean;
      static randomToken(length?: number): string;
    }
  }