export type MessageType = {
    messageType:string,
    messageContext:string
}

export interface IMessage {
    InformationMessage:(message:MessageType)=>MessageType
    SuccessMessage:(message:MessageType)=>MessageType
    ErrorMessage:(message:MessageType)=>MessageType
}