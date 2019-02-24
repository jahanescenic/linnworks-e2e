module.exports = {
    elements: {
        tokenarea: by.css("input[id='token']"),
        loginpagelink: by.xpath("//app-root/div[@class='container-fluid']//app-nav-menu//a[@href=\"/login\"]"),
        submit: by.xpath("//button[@type='submit']")
    },
    performTokenInclusion: function (token) {
        const tokenarea = page.loginPage.elements.tokenarea;

        return driver.wait(until.elementsLocated(tokenarea), 10000)
            .then(function () {
                return driver.findElement(tokenarea).sendKeys(token);
            });
    },
    performLoginPageAction: function () {
        const loginpagelink = page.loginPage.elements.loginpagelink;

        return driver.wait(until.elementsLocated(loginpagelink), 10000)
            .then(function () {
                return driver.findElement(loginpagelink).click();
            });
    },
    performSubmit: function (){
        const submitbutton = page.loginPage.elements.submit;
        debugger;
        return driver.wait(until.elementsLocated(submitbutton), 10000)
            .then(function () {
                return driver.findElement(submitbutton).click();
            });
        /*return driver.wait(until.presenc(submitbutton), 10000)
            .then(function () {
                return driver.findElement(submitbutton).click();
            });*/
    },
};