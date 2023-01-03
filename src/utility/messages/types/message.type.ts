enum MessageEnum {
    Information,
    Success,
    Error
}
export type MessageType = {
    messageType:MessageEnum,
    messageContext:string
}

export interface IMessage {
    InformationMessage:()=>MessageType
    SuccessMessage:()=>MessageType
    ErrorMessage:()=>MessageType
}