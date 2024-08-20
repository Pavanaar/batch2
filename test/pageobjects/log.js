class loggingin{
    get usntxtfield(){return $("input#username")}
    get pwdtxtfield(){return $("input#password")}
    get submitbtn(){return $("//button[text()='Submit']")}
    async loooogin(u,p) {
        await this.usntxtfield.setValue(u)
        await this.pwdtxtfield.setValue(p)
        // await this.submitbtn.click()
    }
}
export default new loggingin()