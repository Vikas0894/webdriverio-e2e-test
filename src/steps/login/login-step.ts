import { Given, Then, When } from "@wdio/cucumber-framework";
import { timeouts } from "../../config/timeouts-config";
import { browserOpenUrl } from "../../support/browser/browser-open-url";
import logger from "../../support/logger";


export let validCredential: any = {
    username: 'trainee',
    password: 'trainee',
};

Given(/^Open the actitime application$/, async () => {
    logger.info(`execution started`)
    await browserOpenUrl('https://demo.actitime.com/login.do');
});

Then(/^I expect login page is displayed$/, async () => {
    await $('//input[@id="username"]').waitForDisplayed();
    await $('//input[@name="pwd"]').waitForDisplayed();
    await $('//a[@id="loginButton"]').waitForClickable();
    await browser.pause(timeouts.small);
});

When(/^I enter the valid username and password$/, async () => {
    await $('//input[@id="username"]').setValue(validCredential.username);
    await $('//input[@name="pwd"]').setValue(validCredential.password);
    await $('//a[@id="loginButton"]').click();
    await browser.pause(timeouts.small);
});

Then(/^I expect home page should be displayed$/, async () => {
    await browser.keys('Enter');
    //await $('//div[@id="logo_aT"]').waitForDisplayed();
    await $('//a[@id="logoutLink"]').waitForClickable();
    await browser.pause(timeouts.small);
});