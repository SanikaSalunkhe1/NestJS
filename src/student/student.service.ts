import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id : 1 , name : "sanika" , age : 19 , gender : "female" } ,   //0 based indexing
        { id : 2 , name: "Parth" , age : 21 , gender : "male" } ,        //1
        { id : 3 , name : "Tanvi" , age : 20 , gender : "female"}        //2
    ];

    //method -> get all students
    getAllStudents(){
        return this.students;
    }

    //method -> get student by id
    getStudentById(id: number){
        const student = this.students.find((s) => s.id === id);

        if (!student) {
            throw new NotFoundException("Student not found");
        } else {
            return student;
        }
    }

    //post method -> create 
    createStudent(data : {name : string ; age : number ; gender : string}) {
        const newStudent = {
            id : Date.now() , 
            // name : data.name , 
            // age : data.age , 
            // gender : data.gender
            ...data , 
        }
        this.students.push(newStudent);
        return newStudent;
    }

    //put method -> update
    updateStudent(id : number , data : {name : string ; age : number ; gender : string}){
        // const student = this.getStudentById(id);
        const index = this.students.findIndex((s) => s.id === id);

        if( index === -1) {
            throw new NotFoundException("Student not found");
        } else {
            this.students[index] = { id , ...data };
            return this.students[index];
        }
    }


    //patch -> partially update
    partialUpdateStudent(id : number , data : Partial<{name : string ; age : number ; gender : string}>){
        const student = this.getStudentById(id);
        Object.assign(student , data);
        return student;
    }


    //delete 
    deleteStudent(id : number) {
        const index = this.students.findIndex((s) => s.id === id);

        if (index === -1 ) {
            throw new NotFoundException("Student not found");
        } 

        const deletedStudent = this.students.splice(index , 1);   //1,1
        return {student : deletedStudent[0] , message : "Student deleted successfully"};
    }
}
