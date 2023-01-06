import { MessageType } from '../types/message.type'
export interface IMessage {
    InformationMessage:()=> MessageType
    SuccessMessage:()=>MessageType
    ErrorMessage:()=>MessageType
}