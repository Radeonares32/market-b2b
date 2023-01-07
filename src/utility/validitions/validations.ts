export class Validitions {
    public passwordValidation(password: string, passwordRepeat: string): boolean {
        if (password === "" && passwordRepeat === "") {
            return false
        }
        else {
            if (password !== passwordRepeat) {
                return false
            }
            else {
                return true
            }
        }
    }
}