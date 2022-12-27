import { Given, Then, When } from "@wdio/cucumber-framework";
import { assertEqual } from "../../helper/assert/assert-equal";
import { browserOpenUrl } from "../../helper/browser/browser-open-url";
import { loginPage } from "../../page-object/login-page";

Given(/^I am on product store home$/, async () => {
    await browserOpenUrl('https://www.demoblaze.com/');
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
    if(!9) throw Error(`Invalid number Provided:9`)
    let num=await $$('//div[@class="col-lg-4 col-md-6 mb-4"]');
    assertEqual(num.length,9,'Product number is not matched')
});