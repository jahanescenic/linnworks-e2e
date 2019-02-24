module.exports = function () {


    this.Then(/^I Expect To See "([^"]*)" Heading$/, function (navlabel) {
        return page.categoriesPage.performCategoriesHeadingVerification(navlabel);
    });

    this.Then(/^Go to Create New$/, function () {
        page.categoriesPage.performCreateNewAction();
        return driver.sleep(5000);
    });

    this.When(/^I Enter Category Name "([^"]*)"$/, function (categoryName) {
        page.categoriesPage.performCategoryNameInclusion(categoryName);
        page.loginPage.performSubmit();
        return driver.sleep(5000);
    });
    this.Then(/^I Expect "([^"]*)" In Category List$/, function (categoryName) {
        page.categoriesPage.performCategoryVerification(categoryName);
        return driver.sleep(5000);
    });
    this.When(/^I Edit Category "([^"]*)" to "([^"]*)"$/, function (oldCategory, newCategory) {
        page.categoriesPage.performCategoryEditClick(oldCategory);
        page.categoriesPage.performCategoryEdit(newCategory);
        page.loginPage.performSubmit();
        return driver.sleep(5000);
    });
    this.Then(/^I Delete Category "([^"]*)"$/, function (categoryname) {
        page.categoriesPage.performCategoryDelete(categoryname);
        return driver.sleep(5000);
    });

};
