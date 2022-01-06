const LoginPage = require('../pageobjects/login.page');
const AccountPage = require('../pageobjects/account.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('testabc@test.com', 'testme123');
        await LoginPage.enterPinToCompleteLogin('1100');
        await expect(AccountPage.welcomeMessage).toHaveTextContaining(
            'Welcome to OpenCar!');
    });
});
