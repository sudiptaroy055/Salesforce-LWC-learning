import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible=false;
    handlerClick(){
        this.isVisible=true;
    }

    name
    chageHandler(event){
        this.name = event.target.value;
    }
    get helloMethod(){
        return this.name === 'hello';
    }
}