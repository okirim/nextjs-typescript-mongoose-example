import {scrypt, randomBytes} from 'crypto';
import {promisify} from 'util';
import {AppError} from "../exceptions/AppError";

const crypt = promisify(scrypt);

export class Password {

    public static async hash(password: string): Promise<string> {
        try {
            const salt = randomBytes(8).toString('hex');
            const buffer = (await crypt(password, salt, 64)) as Buffer;
            return `${buffer.toString('hex')}.${salt}`;
        } catch (e) {
            throw new AppError(e.message)
        }
    }

    public static async compare(password: string, inputPassword: string): Promise<boolean> {
        try {
            const [hashedPassword, salt] = password.split('.');
            const inputPasswordHashed = await Password.hashToCompare(inputPassword, salt);
            return inputPasswordHashed === hashedPassword;
        } catch (e) {
            throw new AppError(e.message)
        }
    }

    protected static async hashToCompare(password: string, salt: string): Promise<string> {
        try {
            const buffer = (await crypt(password, salt, 64)) as Buffer;
            return buffer.toString('hex');
        } catch (e) {
            throw new AppError(e.message)
        }
    }
}