import KeyPressesPage from '../pageobjects/keyPresses.page';

describe('My key presses App', () => {
    beforeEach(async function(){
        KeyPressesPage.open('key_presses');
    })
    it('should be able to tell what key is pressed last', async () => {
        await KeyPressesPage.typeValue('L');
        expect(KeyPressesPage.getInput).toHaveTextContaining('You entered: A');
    })
})