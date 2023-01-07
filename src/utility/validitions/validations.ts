export class Validitions {
    public passwordValidation(password: string, passwordRepeat: string): {} {
        if (password === "" && passwordRepeat === "") {
            return {
                type:"passEmpty",
                isValid:false
            }
        }
        else {
            if (password !== passwordRepeat) {
                return {
                    type:"noMatch",
                    isValid:false
                }
            }
            else {
                return {
                    type:"validPass",
                    isValid:true
                }
            }
        }
    }
}