module.exports = {
    elements: {
        headingclass: by.css("app-fetch-category h1"),
        createnewlink: by.xpath("//app-fetch-category/p/a[@href=\"/add-category\"]"),
        categorynameinput: by.xpath("//input[@type='text']"),
        submit: by.xpath("//button[@type='submit']")
    },

    performCategoriesHeadingVerification: function (navlabel) {
        const headingclass = page.categoriesPage.elements.headingclass;

        return driver.wait(until.elementsLocated(headingclass), 10000)
            .then(function () {
                driver.findElement(headingclass).getText().then(function (text) {
                    expect(text).to.equal(navlabel);
                });
            });
    },

    performCreateNewAction: function () {
        const createnewlink = page.categoriesPage.elements.createnewlink;

        return driver.wait(until.elementsLocated(createnewlink), 10000)
            .then(function () {
                driver.findElement(createnewlink).click();
            });
    },

    performCategoryNameInclusion: function (categoryname) {
        const categorynameinput = page.categoriesPage.elements.categorynameinput;

        return driver.wait(until.elementsLocated(categorynameinput), 10000)
            .then(function () {
                return driver.findElement(categorynameinput).sendKeys(categoryname);
            });
    },

    performCategoryVerification: function (categoryname) {
        const findcategory = by.xpath("//table[@class='table']/tbody//td[text()='"+categoryname+"']");
        expect(driver.findElement(findcategory));
    },

    performCategoryEditClick: function (categoryname) {
        const editcategorylink = by.xpath("//table[@class='table']/tbody/tr[contains(.,'"+categoryname+"')]/td[4]/a[contains(.,'Edit')]");
        return driver.wait(until.elementsLocated(editcategorylink), 10000)
            .then(function () {
                return driver.findElement(editcategorylink).click();
            });
    },

    performCategoryEdit: function (categoryname) {
        const categorynameinput = page.categoriesPage.elements.categorynameinput;
        return driver.wait(until.elementsLocated(categorynameinput), 10000)
            .then(function () {
                driver.findElement(categorynameinput).clear();
                return driver.findElement(categorynameinput).sendKeys(categoryname);
            });
    },

    performCategoryDelete: function (categoryname) {
        const deletecategorylink = by.xpath("//table[@class='table']/tbody/tr[contains(.,'"+categoryname+"')]/td[4]/a[contains(.,'Delete')]");
        return driver.wait(until.elementsLocated(deletecategorylink), 10000)
            .then(function () {
                driver.findElement(deletecategorylink).click();
                driver.switchTo().alert().accept();
            });
    },

};