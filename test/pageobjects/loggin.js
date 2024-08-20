
class login{
    get usntextfield(){return $("input#username")}
    get pwdtextfield(){return $("input#password")}
    get submitbutton(){return $("//button[text()='Submit']")}

    async loginpage(usn,pwd){
       await this.usntextfield.setValue(usn)
       await this.pwdtextfield.setValue(pwd)
       await this.submitbutton.click()
       await browser.pause(3000)
    }
}
export default new login()