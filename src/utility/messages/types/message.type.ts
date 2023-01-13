export type MessageType = {
    messageType:MessageTypes,
    messageContext:string
}

export type MessageTypes = "SUCCESS" | "INFORMATION" | "ERROR"
