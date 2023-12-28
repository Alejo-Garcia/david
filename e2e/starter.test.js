import {by, device, element} from 'detox';

const testEmail = 'test@email.com';
const testPassword = 'test123';

describe('Full', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have SignIn screen', async () => {
    await expect(element(by.id('signInScreen'))).toBeVisible();
  });

  it('should complete email and password inputs', async () => {
    await element(by.id('signInEmailInput')).tap();
    await element(by.id('signInEmailInput')).typeText(testEmail);
    await element(by.id('signInEmailInput')).tapReturnKey();
    await element(by.id('signInPasswordInput')).typeText(testPassword);
    await element(by.id('signInPasswordInput')).tapReturnKey();
  });

  it('should sign in and show CountriesList screen after', async () => {
    await element(by.id('signInButton')).tap();
    await new Promise(resolve => setTimeout(resolve, 1500));
    await expect(element(by.id('countriesListScreen'))).toBeVisible();
  });

  it('should have the countries table and be able to scroll through it', async () => {
    await expect(element(by.id('countriesListScrollView'))).toBeVisible();
    await element(by.id('countriesListScrollView')).scroll(150, 'down');
  });

  it('should navigate to the SettingsList screen and toggle all settings', async () => {
    await element(by.id('tabBarItemSettings')).tap();
    await expect(element(by.id('settingsListScreen'))).toBeVisible();
    await element(by.id('settingsListSettingPushSwitch')).tap();
    await element(by.id('settingsListSettingEmailSwitch')).tap();
    await element(by.id('settingsListSettingUsageSwitch')).tap();
  });

  it('should sign out and show SignIn screen after', async () => {
    await element(by.id('signOutButton')).tap();
    await new Promise(resolve => setTimeout(resolve, 500));
    await expect(element(by.id('signInScreen'))).toBeVisible();
  });
});
