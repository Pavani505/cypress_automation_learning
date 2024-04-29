import LoginModules from './modules/loginSupport.js/loginModule';

describe('LoginPage Tests using Modular Approach', () => {
  beforeEach(() => {
    LoginModules.visitLoginPage();
  });

  it('should login successfully with valid credentials', () => {
    LoginModules.loginWithCredentials('Admin', 'admin123');
    LoginModules.verifySuccessfulLogin();
  });

  it('should show error message for invalid credentials', () => {
    LoginModules.loginWithCredentials('Admin', 'admin');
    LoginModules.verifyFailedLogin();
  });
});
