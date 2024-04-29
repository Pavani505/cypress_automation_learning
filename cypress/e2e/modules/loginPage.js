class LoginPage {
    constructor() {
      this.usernameField = '//*[@name="username"]';
      this.passwordField = '//*[@name="password"]';
      this.submitButton = '//*[@type="submit"]';
      this.profileName = '//*[@class="oxd-userdropdown-name"]';
      this.loginInvalidoAlert = '//*[contains(@class, "oxd-alert-content") and contains(@class, "oxd-alert-content--error")]';
    }
  
  }
  
  export default new LoginPage();
  