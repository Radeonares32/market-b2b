/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class UserService {
    private _name?;
    private _surname?;
    private _email?;
    private _password?;
    private _image?;
    private _isAdmin?;
    private _cardName?;
    private _cardLastName?;
    private _cardNumber?;
    private _cardCvv?;
    constructor(name?: string, surname?: string, email?: string, password?: string, image?: string, isAdmin?: boolean, cardName?: string, cardLastName?: string, cardNumber?: number, cardCvv?: number);
    find(): Promise<(import("mongoose").Document<unknown, any, import("../../models/user/types/user.types").User> & import("../../models/user/types/user.types").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    sign(hash: string): Promise<(import("mongoose").Document<unknown, any, import("../../models/user/types/user.types").User> & import("../../models/user/types/user.types").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    create(): Promise<void>;
}
