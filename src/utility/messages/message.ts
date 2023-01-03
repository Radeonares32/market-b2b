import { IMessage,MessageType } from './types/message.type'

export class Message implements IMessage {
    private messageType:string
    private messageContext:string
    constructor(messageType:string,messageContext:string){
        this.messageType = messageType
        this.messageContext = messageContext
    }
    public InformationMessage() {
        return {
            messageType:this.messageType,
            messageContext:this.messageContext
        }
    }
    public SuccessMessage: () => MessageType;
    public ErrorMessage: () => MessageType;

}

const x = new Message()
const y = x.InformationMessage({messageType:"",messageContext:""})