module.exports = {
    elements: {
        apipagelink: by.xpath("//app-root/div[@class='container-fluid']//app-nav-menu//a[@href='/api']"),
        categoryindexlink: by.xpath("//div[@class='wrapper']//span[2]//span[@class='opblock-summary-path']"),
        tryitoutbutton: by.xpath("//div[@class='try-out']//button[@class='btn try-out__btn']"),
        execute: by.xpath("//div[@class='wrapper']//span[2]//div[@class='opblock-body']//button[@class='btn execute opblock-control__btn']"),
        responsecode: by.xpath("//div[@class='wrapper']//span[2]//div[@class='opblock-body']//div[@class='responses-inner']/div//table[@class='responses-table']//tr[@class='response']//td[@class='col response-col_status']"),
    },


    performApiPageAction: function () {
    const apipagelink = page.apiPage.elements.apipagelink;

    return driver.wait(until.elementsLocated(apipagelink), 10000)
        .then(function () {
            return driver.findElement(apipagelink).click();
        });
    },

    performGetRequestToCategoryStatus: function () {
        driver.switchTo().frame(0);
        categoryindexlink = page.apiPage.elements.categoryindexlink;
        tryitoutbutton = page.apiPage.elements.tryitoutbutton;
        execute = page.apiPage.elements.execute;
        responsecode = page.apiPage.elements.responsecode;

        driver.wait(until.elementsLocated(categoryindexlink), 10000)
            .then(function () {
                //driver.findElement(xpathlink).getText(). then(function (text) {
                //    console.log(text)
                //});
                driver.findElement(categoryindexlink).click();
                driver.sleep(5000);
            });
        driver.wait(until.elementsLocated(tryitoutbutton), 10000)
            .then(function () {
                //driver.findElement(xpathlink).getText(). then(function (text) {
                //    console.log(text)
                //});
                driver.findElement(tryitoutbutton).click();
                driver.sleep(5000);
            });
        driver.wait(until.elementsLocated(execute), 10000)
            .then(function () {
                //driver.findElement(xpathlink).getText(). then(function (text) {
                //    console.log(text)
                //});
                driver.findElement(execute).click();
                driver.sleep(5000);
            });
        return driver.wait(until.elementsLocated(responsecode), 10000)
            .then(function () {
                driver.findElement(responsecode).getText(). then(function (text) {
                    //assert.equal(text,"200");
                    expect(text).to.equal("200");
                });
                driver.sleep(5000);
            });
    },
};