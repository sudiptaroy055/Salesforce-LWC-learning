import { LightningElement, track } from 'lwc';

export default class StudentManager extends LightningElement {

    // Two-way binding properties
    firstName = '';
    lastName = '';
    marks = 0;

    // @track array with key-value pairs
    @track students = [
        { id: 1, fullName: 'Sudip Mondal',  marks: 75, grade: 'A' },
        { id: 2, fullName: 'Rahul Das',     marks: 40, grade: 'F' },
        { id: 3, fullName: 'Priya Sharma',  marks: 88, grade: 'A+' },
        { id: 4, fullName: 'Amit Roy',      marks: 32, grade: 'F' },
    ];

    // ---- Getters ----

    // Dynamically computes full name
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // Dynamically computes grade based on marks
    get grade() {
        if (this.marks >= 90) return 'A+';
        if (this.marks >= 75) return 'A';
        if (this.marks >= 60) return 'B';
        if (this.marks >= 45) return 'C';
        if (this.marks >= 33) return 'D';
        return 'F';
    }

    // Filters only passed students
    get passedStudents() {
        return this.students.filter(s => s.marks >= 33);
    }

    // Filters only failed students
    get failedStudents() {
        return this.students.filter(s => s.marks < 33);
    }

    // ---- Handlers ----

    handleFirstName(event) {
        this.firstName = event.target.value;
    }

    handleLastName(event) {
        this.lastName = event.target.value;
    }

    handleMarks(event) {
        this.marks = event.target.value;
    }

    // Adds new student to @track array
    addStudent() {
        if (!this.firstName || !this.lastName) return;

        const newStudent = {
            id: this.students.length + 1,
            fullName: this.fullName,
            marks: Number(this.marks),
            grade: this.grade
        };

        this.students = [...this.students, newStudent]; // ✅ reassign to trigger re-render
    }
}