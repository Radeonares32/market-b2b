import { IMessage } from './interface/message.interface'

export class Message implements IMessage {
    public Messages(queryMessage: string) {
        const validationMessage = this.validationMessage(queryMessage)
        return {
            messageContext:validationMessage
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