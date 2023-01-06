import { MessageType } from '../types/message.type'
export interface IMessage {
   Messages:(queryMessage:string)=> MessageType
}