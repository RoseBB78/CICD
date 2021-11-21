import Page from './page';

class Inputspage extends Page {
    
     get getTitle() {
        return $('h3');
    }

    get getNumber() {
        return $('p');
    }

    get gettextfield() {
        return $('input[type=number]');
    }

    addNumber(){
        const input = $('#content > div > div > div > input[type=number]');
        return input.setValue("43");
    }

    currentInput(){
        return $('#content > div > div > div > input[type=number]');
    }
}
export default new Inputspage();

