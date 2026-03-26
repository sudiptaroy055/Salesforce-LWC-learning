import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isVissible = false;
    constructor() {
        super();
        console.log('Parent Constructor Called');
    }
    connectedCallback() {
        console.log('Parent Connected Callback Called');
    }
    renderedCallback() {
        console.log('Parent Rendered Callback Called');
    }
   
    changeHandler() {
        this.isVissible = !this.isVissible;
    }

}