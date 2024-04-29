import LoginModule from './modules/loginSupport.js/loginModule';

describe('LoginPage Tests using Modular Approach', () => {
  beforeEach(() => {
    LoginModule.visitLoginPage();
  });

  it('should login successfully with valid credentials', () => {
    LoginModule.loginWithCredentials('Admin', 'admin123');
    LoginModule.verifySuccessfulLogin();
  });

  it('should show error message for invalid credentials', () => {
    LoginModule.loginWithCredentials('Admin', 'admin');
    LoginModule.verifyFailedLogin();
  });
});
