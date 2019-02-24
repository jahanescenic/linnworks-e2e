module.exports = function () {


    this.Then(/^I Go To Api Page$/, function () {
        return page.apiPage.performApiPageAction();
    });
    this.Then(/^I Check Api Category Index Status$/, function () {
        return page.apiPage.performGetRequestToCategoryStatus();
    });
};