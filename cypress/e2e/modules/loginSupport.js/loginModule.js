import LoginPage from './loginPage';

class LoginModules {
  visitLoginPage() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  loginWithCredentials(username, password) {
    cy.get(LoginPage.usernameField).type(username);
    cy.get(LoginPage.passwordField).type(password);
    cy.get(LoginPage.submitButton).click();
  }

  verifySuccessfulLogin() {
    cy.get(LoginPage.profileName).should('be.visible');
  }

  verifyFailedLogin() {
    cy.get(LoginPage.loginInvalidoAlert).should('be.visible');
  }
}

export default new LoginModules();
