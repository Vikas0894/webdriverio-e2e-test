import { Given, Then, When } from "@wdio/cucumber-framework";
import { loginPage } from "../../pages/login-page";
import { assertEqual } from "../../support/assert/assert-equal";
import { browserOpenUrl } from "../../support/browser/browser-open-url";
import logger from "../../support/logger";


Given(/^I am on product store home$/, async () => {
    //@ts-ignore
    await browserOpenUrl(browser.config.app);
    logger.info(`execution started`)
});

Then(/^I expect product store home page is displayed$/, async () => {
    await loginPage.waitForPage();
});

When(/^I enetr username and password on login page$/, async () => {
    await loginPage.fillUnAndPwd();
});

Then(/^I verify the user$/, async () => {
    await loginPage.VerifyHomePage();
});

Then(/^I verify Number Of Product on home page$/, async () => {
    if(!9) throw Error(`Invalid number Provided:${9}`)
    let num=await $$('//div[@class="col-lg-4 col-md-6 mb-4"]');
    assertEqual(num.length,9,'Product number is not matched')
    logger.info(`execution completed`)
});