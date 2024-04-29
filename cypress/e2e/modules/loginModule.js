import LoginPage from '../pages/loginPage';

class LoginModule {
  visitLoginPage() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  loginWithCredentials(username, password) {
    cy.xpath(LoginPage.usernameField).type(username);
    cy.xpath(LoginPage.passwordField).type(password);
    cy.xpath(LoginPage.submitButton).click();
  }

  verifySuccessfulLogin() {
    cy.xpath(LoginPage.profileName).should('be.visible');
  }

  verifyFailedLogin() {
    cy.xpath(LoginPage.loginInvalidoAlert).should('be.visible');
  }
}

export default new LoginModule();
