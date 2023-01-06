import {MessageType,MessageTypes} from './types/message.type'
import {IMessage} from './interface/message.interface'

export class Message implements IMessage {
    readonly messageType:MessageTypes
    readonly  messageContext:string
    constructor(messageType:MessageTypes,messageContext:string){
        this.messageType = messageType
        this.messageContext = messageContext
    }
    public InformationMessage():MessageType {
        return {
            messageType:this.messageType,
            messageContext:this.messageContext
        }
    }
    public SuccessMessage():MessageType {
        return {
            messageType:this.messageType,
            messageContext:this.messageContext
        }
    };
    public ErrorMessage():MessageType {
        return {
            messageType:this.messageType,
            messageContext:this.messageContext
        }
    }
}
const m = new Message("SUCCESS", "asd")
