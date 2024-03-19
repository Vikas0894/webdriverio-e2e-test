export const browserMaximise = async (): Promise<void> => {
    await browser.pause(1000);
    await browser.maximizeWindow();
};