module.exports = function () {

    this.When(/^I Go To "([^"]*)"$/, function (url) {
        return page.homePage.performPageLoading(url);
    });

};