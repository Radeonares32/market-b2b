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
        if (queryMessage) {
            if (queryMessage === "lsuccess") {
                message = {
                    messageContext: "login success",
                    messageType: "SUCCESS"
                }
            }
            else if (queryMessage === "noMatch") {
                message = {
                    messageContext: "password not match",
                    messageType: "INFORMATION"
                }
            }
            else if (queryMessage === "unknow") {
                message = {
                    messageContext: "unknow error",
                    messageType: "ERROR"
                }
            }
            else if (queryMessage === "logout") {
                message = {
                    messageContext: "logout success",
                    messageType: "SUCCESS"
                }
            }
            else if (queryMessage === "alreadyUser") {
                message = {
                    messageContext: "Already user",
                    messageType: "INFORMATION"
                } 
            }
        }
        else {
            return new Error("Not String").message
        }
        return message
    }
}