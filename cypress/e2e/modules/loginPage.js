class LoginPage {
    constructor() {
      this.usernameField = '[name="username"]';
      this.passwordField = '[name="password"]';
      this.submitButton = '[type="submit"]';
      this.profileName = '.oxd-userdropdown-name';
      this.loginInvalidoAlert = '.oxd-alert-content.oxd-alert-content--error';
    }
  
  }
  
  export default new LoginPage();
  