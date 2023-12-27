import crypto from 'crypto';

export const GenerateSalt = () => crypto.randomBytes(128).toString('base64');

export const PasswordHasher = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/'))
        .update(process.env.SECRET).digest('hex');
}

export const RandomStringGenerator = (leftlength: number, rightlength: number) => {

    let idBuilder: string = '';

    const inChatOptions: string = 'abcdefghijklmnopqrstuvwxyz';
    const inNumberOptions: string = '0123456789';

    for (let i = 0; i < leftlength; i++) {

        idBuilder += inChatOptions.charAt(Math.floor(Math.random() * inChatOptions.length));

    }

    for (let i = 0; i < rightlength; i++) {

        idBuilder += inNumberOptions.charAt(Math.floor(Math.random() * inNumberOptions.length));

    }

    return idBuilder;
}

export const PasswordEquality = (password: string, realpassword: string, salt: string) => {

    const hashCredential = PasswordHasher(salt, password);
    return (realpassword === hashCredential) ? true : false;
}