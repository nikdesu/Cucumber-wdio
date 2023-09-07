const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^User is located on the (\w+) page of saucedemo website$/, async (page) => {
    await pages[page].open()
});

When(/^User click on login button$/, async () => {
    await LoginPage.btnLogin.click()
});

Then(/^User should see (.*) error message$/, async (message) => {
    await expect(LoginPage.errorMsg).toHaveText(message)
});