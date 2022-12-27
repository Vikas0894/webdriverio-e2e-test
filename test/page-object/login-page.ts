import { timeouts } from "../../config/timeouts-config";
import { ButtonControl } from "../base-controls/button-control";
import { ElementControl } from "../base-controls/element-control";
import { InputControl } from "../base-controls/input-control";
import { validCredential } from "../helper/get-csv-data";

class LoginPage {
    protected async getLoginLinkEl(): Promise<ButtonControl> {
        return new ButtonControl(await $('//a[@id="login2"]'));
    };

    protected async getUsernameInputEl(): Promise<InputControl> {
        return new InputControl(await $('//input[@id="loginusername"]'));
    };

    protected async getPasswordInputEl(): Promise<InputControl> {
        return new InputControl(await $('//input[@id="loginpassword"]'));
    };

    protected async getLoginBtnEl(): Promise<ButtonControl> {
        return new ButtonControl(await $('//button[@onclick="logIn()"]'));
    };

    protected async getUserVerificationEl(): Promise<ElementControl> {
        return new ElementControl(await $('//a[@id="nameofuser"]'));
    };

    protected async getTitleEl(): Promise<ElementControl> {
        return new ElementControl(await $('//a[@id="nava"]'));
    };

    /**
     * Logic
     */
    public async waitForPage(): Promise<void> {
        await (await this.getTitleEl()).waitForDisplayed(timeouts.medium, 'Title is not displayed');
    }

    public async fillUnAndPwd(): Promise<void> {
        await (await this.getLoginLinkEl()).click();
        await (await this.getUsernameInputEl()).setValue(validCredential.username);
        await (await this.getPasswordInputEl()).setValue(validCredential.password);
        await (await this.getLoginBtnEl()).click();
    }

    public async VerifyHomePage(): Promise<void> {
        await (await this.getUserVerificationEl()).expectToBeDisplayed('Welcome text is not displayed');
    }
}
export const loginPage = new LoginPage();
