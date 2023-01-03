import { IMessage ,MessageType} from './types/message.type'

export class Message implements IMessage {
    InformationMessage: (message: MessageType) => MessageType;
    SuccessMessage: (message: MessageType) => MessageType;
    ErrorMessage: (message: MessageType) => MessageType;
}