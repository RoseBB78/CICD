import LoginPage from  '../pageobjects/login.page';
import AuthPage from  '../pageobjects/auth.page';
import DropdownPage from '../pageobjects/auth.page';
import LoginPage from  '../pageobjects/login.page';
import AuthPage from  '../pageobjects/auth.page';
import FormLogin from '../pageobjects/formLogin.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin', 'admin');
        await expect(AuthPage.getTitle).toBeExisting();
        await expect(AuthPage.getTitle).toHaveTextContaining('Basic Auth');
    });
});
describe('My Dropdown App',() =>{
    it('Should open the dropdown app',async() =>{
        await DropdownPage.open('drowpdown');
        await expect(DropdownPage.getTitle).toHaveTextContaining('Drowpdown List');
    });
});

describe('My Login application', () => {
    it('should login with valid credentials at digest login', async () => {
        await LoginPage.login('admin', 'admin');
        await expect(AuthPage.getTitle).toBeExisting();
        await expect(AuthPage.getTitle).toHaveTextContaining('Basic Auth');
    });
});
describe('My form Login application', () => {
    it('should login using correct credentials at form login', async () => {
        FormLogin.open('login');
        FormLogin.login('tomsmith', 'SuperSecretPassword');
        expect(SecurePage.title).toHaveTextContaining('Secure Area');
    });
});
