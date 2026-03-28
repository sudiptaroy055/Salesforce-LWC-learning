import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    carouselData= [
        {
            src: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
            header: 'First Card',
            description: 'First card description.',
            alternativeText: 'First card accessible description.',
        },
        {
            src: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg',
            header: 'First Card',
            description: 'First card description.',
            alternativeText: 'First card accessible description.',
        },
        {
            src: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg',
            header: 'First Card',
            description: 'First card description.',
            alternativeText: 'First card accessible description.',
        }
        ]

    percentage = 20
    changeHandler(event){
        this.percentage = event.target.value
    }

    handleClick(){
        this.template.querySelector('c-p2c-slider-compoment').resetSlider();
    }
}