class LoginPage {
    constructor() {
      this.usernameField = '//*[@name="username"]'; // xpath
      this.passwordField = '//*[@name="password"]'; // xpath
      this.submitButton = '//*[@type="submit"]';    // xpath
      this.profileName = ".oxd-userdropdown-name";  // css
      this.loginInvalidoAlert = '//*[contains(@class, "oxd-alert-content") and contains(@class, "oxd-alert-content--error")]'; // xpath
    }
  
  }
  
  export default new LoginPage();
  