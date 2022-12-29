import { Given, Then, When } from "@wdio/cucumber-framework";
import { timeouts } from "../config/timeouts-config";
import { browserOpenUrl } from "../support/browser/browser-open-url";
import { browserPause } from "../support/browser/browser-pause";
import { browserSwitchToWindow } from "../support/browser/browser-switch-to-handle";

let actiTimeIncPage: any;
let homeWindow: any;

Given(/^Open the actitime application in maximise window$/, async () => {
    await browserOpenUrl('https://demo.actitime.com/login.do');
    await browser.maximizeWindow();
});

When(/^I click on actiTIME Inc link on login page$/, async () => {
    actiTimeIncPage = await browser.getTitle();
    console.log(actiTimeIncPage);

    await (await $('//a[@target="_blank"]')).click();
    await browserPause(timeouts.large)
});

When(/^I switch to login page$/, async () => {
    let parentWindow = await browser.getWindowHandle();
    await browserSwitchToWindow(parentWindow);
});

Then(/^I expect home page should be Displayed$/, async () => {
    await (await $('//a[@id="logoutLink"]')).waitForClickable();
    homeWindow = await browser.getWindowHandle();
});
//new
Then(/^I click second top menu button prevent panels hiding on home page$/, async () => {
    await (await $('(//div[@class="menu_icon"])[2]')).click();
    await browserPause(timeouts.medium)
});

Then(/^I click on Integration with actiPLANS in prevent panels page$/, async () => {
    await (await $('//a[contains(.,"Integration with actiPLANS")]')).click();
    await browserPause(timeouts.medium)
});

When(/^I switch to the home page$/, async () => {
    await browser.switchToWindow(homeWindow);
    await browserPause(timeouts.medium)
});

Then(/^I expect home page page is displayed$/, async () => {
    await (await $('//a[@id="logoutLink"]')).waitForClickable();
    homeWindow = await browser.getWindowHandle();
});
