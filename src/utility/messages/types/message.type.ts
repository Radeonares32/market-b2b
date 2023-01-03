
export type MessageType = {
    messageType:string,
    messageContext:string
}

export interface IMessage {
    InformationMessage:(message: MessageType)=> MessageType
    SuccessMessage:()=>MessageType
    ErrorMessage:()=>MessageType
}