module.exports = {
    elements: {
        //enterPassButtonForStaging: by.id("wp-submit"),
    },
    performPageLoading: function (url) {
        return driver.get(url);
    },
};