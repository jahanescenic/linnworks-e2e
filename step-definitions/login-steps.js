module.exports = function () {

    this.When(/^I Go To Login Page$/, function () {
        return page.loginPage.performLoginPageAction()
    });

    this.When(/^I Login With "([^"]*)"$/, function (token) {
        page.loginPage.performTokenInclusion(token);
        //driver.sleep(5000);
        page.loginPage.performSubmit();
        return driver.sleep(5000);
    });
};