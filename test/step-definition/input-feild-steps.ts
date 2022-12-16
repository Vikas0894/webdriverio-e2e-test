import { Given, Then, When } from "@wdio/cucumber-framework";
import { timeouts } from "../../config/timeouts-config";
import { assertEqual } from "../helper/assert/assert-equal";
import { browserOpenUrl } from "../helper/browser/browser-open-url";
import { validCredential } from "./demo-step";

Given(/^Open the actitime application in maximise window$/, async () => {
    await browserOpenUrl('https://demo.actitime.com/login.do');
    await browser.maximizeWindow();
});

When(/^I enter the username$/, async () => {
    await $('//input[@id="username"]').setValue(validCredential.username);
    await browser.pause(timeouts.large);
});

When(/^I clear the un input feild$/, async () => {
    await (await $('//input[@id="username"]')).clearValue();
    await browser.pause(timeouts.large);
});

Then(/^I expect input feild is empty$/, async () => {
    let ele = await (await $('//input[@id="username"]')).getText();
    console.log('text',ele);
    await assertEqual('', ele, 'username input field is not empty');
    await browser.pause(timeouts.large);
});

Then(/^I enter the username slowly$/, async () => {
    let ele = await (await $('//input[@id="username"]'));
    await ele.click();
    for (let i = 0; i < (validCredential.username).length; i++) {
        await ele.keys((validCredential.username).charAt(i));
    }
    await browser.pause(timeouts.large);
});

