import { Given, Then, When } from "@wdio/cucumber-framework";
import { timeouts } from "../config/timeouts-config";
import { assertEqual } from "../support/assert/assert-equal";
import { browserOpenUrl } from "../support/browser/browser-open-url";
import { browserPause } from "../support/browser/browser-pause";


export let dob: any = {
    day: 3,
    month: 'Jun',
    year: '2004'
};
Given(/^Open the facebook page$/, async () => {
    await browserOpenUrl('https://www.facebook.com');
    await browser.maximizeWindow();
    await browserPause(timeouts.large);
});

Then(/^I expect Login Page is displayed$/, async () => {
    await browser.pause(5000);
    await $('//img[@src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"]').waitForDisplayed();
});

When(/^I click Create new account button$/, async () => {
    await (await $('//a[.="Create New Account"]')).click();
    await browser.pause(timeouts.medium)
});

Then(/^I expect signup page should be displayed$/, async () => {
    await (await $('//div[text()="Sign Up"]')).waitForDisplayed();
});

When(/^I select dob on signup page$/, async () => {
    await (await $('//select[@name="birthday_day"]')).selectByIndex(dob.day);
    await (await $('//select[@name="birthday_month"]')).selectByVisibleText(dob.month);
    await (await $('//select[@name="birthday_year"]')).selectByVisibleText(dob.year);
    await browser.pause(timeouts.large);
});

Then(/^I expect date matched with enter date$/, async () => {
   let dayMatcher= await (await $('//option[.="4"]')).getText();
   let monthMatcher= await (await $('//option[.="Jun"]')).getText();
   let yearMatcher= await (await $('//option[@value="2004"]')).getText();
   let dob= dayMatcher+' '+monthMatcher+' '+yearMatcher;
   await assertEqual('4 Jun 2004',dob,'dob is not matched with enter dob')
});

When(/^I check female checkbox in signup page$/, async () => {
    await (await $('//input[@value="1"]')).click();
    await browser.pause(timeouts.small);
});

Then(/^I expected to female is selected$/, async () => {
    let checkbox= await (await $('//label[.="Female"]')).getText();
    assertEqual('Female',checkbox,'female checkbox is not selected')
 });

