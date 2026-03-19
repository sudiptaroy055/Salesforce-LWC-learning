import { LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {

    // Data Binding
    fullname = 'Sudip';
    greeting = 'Hello';

    changeHandler(event){
        this.greeting = event.target.value;
    }
    // @track binding
    @track address={
        city:'Kolkata',
        state:'West Bengal',
        country:'India'
    }

    trackHandler(event){
        this.address.city = event.target.value;
    }

    // getter example
     users = ["Sudip", "Suman", "Sourav", "Rahul"]
     num1 = 10;
     num2 = 20;

     get firstUser(){
         return this.users[0];
        //  return this.users[0].toUpperCase();
        }
        changeFirstUser(){
            this.users[0] = "Ajay";
        }
     get sum(){
         return this.num1 + this.num2;
     }
}