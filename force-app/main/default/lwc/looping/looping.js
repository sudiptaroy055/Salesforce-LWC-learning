import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    // for:each loop
    carList = ["Audi","Bmw","Mercedes","Toyota","Honda"]

    // iterator loop
    ceoList = [ 
        {   id:1,
            ceoName:"Andy Jassy", 
            companyName:"Amazon"
        },
        {   id:2,
            ceoName:"Mark Zuckerberg", 
            companyName:"Meta"
        },
        {   id:3,
            ceoName:"Sundar Pichai", 
            companyName:"google"
        },
        {   id:4,
            ceoName:"Satya Nadella", 
            companyName:"Microsoft"
        },
        {   id:5,
            ceoName:"Tim Cook", 
            companyName:"Apple"
        }
    ]
}