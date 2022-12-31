export declare const encrypt: (password: string) => Promise<string>;
export declare const decrypt: (password: string, hash: string) => Promise<boolean>;
