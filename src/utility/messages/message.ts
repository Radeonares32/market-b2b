import { IMessage } from './interface/message.interface'
import { MessageType, MessageTypes } from './types/message.type'


export class Message implements IMessage {
    constructor(readonly messageType: MessageTypes) {
        this.messageType = messageType
    }
    public Messages(queryMessage: string): MessageType {
        const validationMessage = this.validationMessage(queryMessage)
        return {
            messageContext:validationMessage,
            messageType: this.messageType
        }
    }
    private validationMessage(queryMessage: string) {
        let message: string = ""
        if (queryMessage) {
            if (queryMessage === "lsuccess") {
                message = "login success"
            }
            else if (queryMessage === "noMatch") {
                message = "password not match"
            }
            else if (queryMessage === "unknow") {
                message = "unknow error"
            }
            else if (queryMessage === "logout") {
                message = "logout success"
            }
        }
        else {
            return new Error("Not String").message
        }
        return message
    }
}