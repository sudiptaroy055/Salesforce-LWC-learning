import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname = 'Sudip';
    greeting = 'Hello';

    changeHandler(event){
        this.greeting = event.target.value;
    }

    address={
        city:'Kolkata',
        state:'West Bengal',
        country:'India'
    }

    trackHandler(event){
        this.address.city = event.target.value;
    }
}