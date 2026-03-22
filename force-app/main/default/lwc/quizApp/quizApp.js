import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selectedAnswers = {}; //for storing selected answers
    totalCorrectAnswer = 0; //to show the number of correct answers
    isSubmitted = false; //to show the result
    myQuestions = [
    {
        id: "Question1",
        question: "Which of the following is not a template loop in LWC?",
        answers: {
            a: "for:each",
            b: "iterator",
            c: "map loop"
        },
        correctAnswer: "c"
    },
    {
        id: "Question2",
        question: "Which decorator is used to expose a property to parent component in LWC?",
        answers: {
            a: "@track",
            b: "@api",
            c: "@wire"
        },
        correctAnswer: "b"
    },
    {
        id: "Question3",
        question: "Which of the following is the correct syntax for data binding in LWC?",
        answers: {
            a: "{! property }",
            b: "{{ property }}",
            c: "{ property }"
        },
        correctAnswer: "c"
    },
    {
        id: "Question4",
        question: "Which lifecycle hook is called when a component is inserted into the DOM?",
        answers: {
            a: "constructor()",
            b: "connectedCallback()",
            c: "renderedCallback()"
        },
        correctAnswer: "b"
    },
    {
        id: "Question5",
        question: "Which decorator is used to call Apex methods in LWC?",
        answers: {
            a: "@api",
            b: "@track",
            c: "@wire"
        },
        correctAnswer: "c"
    },
    // {
    //     id: "Question6",
    //     question: "What is the minimum test coverage required to deploy Apex class in Salesforce?",
    //     answers: {
    //         a: "50%",
    //         b: "75%",
    //         c: "100%"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     id: "Question7",
    //     question: "Which keyword is used to make an Apex method accessible from LWC?",
    //     answers: {
    //         a: "@AuraEnabled",
    //         b: "@LWCEnabled",
    //         c: "@Invocable"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     id: "Question8",
    //     question: "Which of the following is used for conditional rendering in LWC?",
    //     answers: {
    //         a: "if:show",
    //         b: "if:true",
    //         c: "v.isVisible"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     id: "Question9",
    //     question: "Which standard Salesforce object stores person records?",
    //     answers: {
    //         a: "Lead",
    //         b: "User",
    //         c: "Contact"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     id: "Question10",
    //     question: "Which method is used to handle errors in a Promise in JavaScript?",
    //     answers: {
    //         a: ".catch()",
    //         b: ".error()",
    //         c: ".fail()"
    //     },
    //     correctAnswer: "a"
    // }
];
    // change handler gets the selected answer from the template
    changeHandler(event){
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const {name,value}=event.target;

        this.selectedAnswers={...this.selectedAnswers, [name]:value};};
    // applying dynamic styling to the result
    get isScored(){
        return `slds-text-heading_large ${this.myQuestions.length === this.totalCorrectAnswer? 
                'slds-text-color_success' : 'slds-text-color_error'}`;    
    }
    get allNotSelected(){
        return Object.keys(this.selectedAnswers).length !== this.myQuestions.length;
    }
    // from submit handler
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestions.filter(question=>this.selectedAnswers[question.id] === question.correctAnswer);
             this.totalCorrectAnswer = correct.length;
             this.isSubmitted=true;
             console.log(this.totalCorrectAnswer);
        }
    // from reset handler
    resetHandler(event){
        this.selectedAnswers={};
        this.totalCorrectAnswer=0;
        this.isSubmitted=false;
    }
}