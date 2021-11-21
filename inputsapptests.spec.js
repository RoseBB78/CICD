import Inputspage from '../pageobjects/inputs.page';

describe('Inputs App', () => {
    beforeAll(async function(){
        console.log('I do before everything');
    });
    beforeEach(async function(){
        console.log('implemented it before everything');
        await Inputspage.open('inputs');
    });
    afterAll(async function(){
        console.log('I do it after all');
    });
    afterEach(async function(){
        console.log('implemented it after everything');
        await Inputspage.open('inputs');
    });
    it('ought open the inputs app', async () => {
        console.log('first test');
        await expect(Inputspage.getTitle).toHaveTextContaining('Inputs');
    });
    it('Locate subheader name', async () => {
        console.log('second test');
        await expect(Inputspage.getSubTitle).toHaveTextContaining('Number');
    });
    it('Add the value manually', async () => {
        console.log('third test'),
        await (Inputspage.includeNumberManually());
        expect (InputsPage.getNumberTextBox).toHaveTextContaining('78');
    });
});

