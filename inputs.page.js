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

    setInpuntsValuebyIndex(index){
        return this.getInputs.selectByIndex(index);
    }

    currentSelected(){
        return $('#inputs option[selected="selected"]');
    }
}
export default new Inputspage();

