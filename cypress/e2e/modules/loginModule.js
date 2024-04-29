import LoginPage from '../pages/loginPage';

class LoginModule {
  visitLoginPage() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  loginWithCredentials(username, password) {
    cy.pickElement(LoginPage.usernameField).type(username);
    cy.pickElement(LoginPage.passwordField).type(password);
    cy.pickElement(LoginPage.submitButton).click();
  }

  verifySuccessfulLogin() {
    cy.pickElement(LoginPage.profileName).should('be.visible');
  }

  verifyFailedLogin() {
    cy.pickElement(LoginPage.loginInvalidoAlert).should('be.visible');
  }
}

export default new LoginModule();
