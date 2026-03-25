import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    userName = ['Sudip', 'Rahul', 'Raj', 'Rakesh']
    fetchDetailHandler(){
        const heading = this.template.querySelector('h1')
        heading.style.border = '1px solid red'
        heading.style.color = 'blue'
        heading.style.fontSize = '30px' 
        console.log(heading.innerText)
        
        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(element => {
            console.log(element.innerText)
            element.setAttribute('title', element.innerText)
        })       
    }
}