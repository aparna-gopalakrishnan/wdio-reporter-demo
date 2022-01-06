

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#input-email');
    }

    get inputPassword() {
        return $('#input-password');
    }

    get loginBtn() {
        return $('button[type="submit"]');
    }

    get enterPin() {
        return $('#input-pin');
    }

    get submitPin() {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    async enterPinToCompleteLogin(pin) {
        await this.enterPin.setValue(pin);
        await this.submitPin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
