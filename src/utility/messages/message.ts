import { IMessage } from './interface/message.interface'
import { MessageType } from './types/message.type'
export class Message implements IMessage {
    public Messages(queryMessage: string) {
        const validationMessage = this.validationMessage(queryMessage)
        return {
            messageContext: validationMessage
        }
    }
    private validationMessage(queryMessage: string) {
        let message: MessageType = { messageContext: "", messageType: "INFORMATION" }
        switch (queryMessage) {
            case "lsuccess":
                message = {
                    messageContext: "login success",
                    messageType: "SUCCESS"
                }
                break;
            case "noMatch":
                message = {
                    messageContext: "password not match",
                    messageType: "INFORMATION"
                }
            case "unknow":
                message = {
                    messageContext: "unknow error",
                    messageType: "ERROR"
                }
            case "logout":
                message = {
                    messageContext: "logout success",
                    messageType: "SUCCESS"
                }
            case "alreadyUser":
                message = {
                    messageContext: "Already user",
                    messageType: "INFORMATION"
                }
            default:
                return new Error("Not String").message
        }
        return message
    }
}