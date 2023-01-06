import { IMessage } from './interface/message.interface'
import { MessageType } from './types/message.type'
export class Message implements IMessage {
    public Messages(queryMessage: string) {
        const validationMessage = this.validationMessage(queryMessage)
        return {
            messageContext:validationMessage
        }
    }
    private validationMessage(queryMessage: string) {
        let message = {}
        if (queryMessage) {
            if (queryMessage === "lsuccess") {
                message = {
                    context:"login success",
                    type:""
                }
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