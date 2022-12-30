export interface User extends Payment {
    name: string,
    surname: string,
    email:string,
    password:string,
    image:string
}
interface Payment {
    cardNumber:number,
    cardName:string,
    cardLastName:string,
    cardCvv:number
}