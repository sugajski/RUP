const { element } = require("detox");

describe('UserDetailsTest', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('Download 5 user identites', async () => {
        await element(by.id("numberButton5")).tap();
        await expect(element(by.id("userRow4"))).toBeVisible();
    });

    it('Tap 3rd row from the list', async () => {
        await element(by.id("userRow2")).tap();
    });

    it('Check if age detail exists', async () => {
        await expect(element(by.id("ageSection"))).toBeVisible();
    });

    it('Go back to the Welcome screen', async () => {
        await element(by.id("backButton")).tap();
        await element(by.id("backButton")).tap();
        await expect(element(by.id("welcomeScreenTitle"))).toBeVisible();
    });
});
