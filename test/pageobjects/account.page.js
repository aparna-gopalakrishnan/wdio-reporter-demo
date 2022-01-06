

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeMessage() {
        return $('#account-account > div.page-header > div > p');
    }
}

module.exports = new AccountPage();
