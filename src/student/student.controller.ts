import { Controller , Get, Param, Post , Body, Put, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @Get()
    getAll(){
        return this.studentService.getAllStudents();
    }

    @Get(":id")
    // getById(id : number){
    //     return this.studentService.getStudentById(id);
    // }
    getById(@Param("id") id : string){
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    // create(data : {name : string ; age : number ; gender : string}){
    //     return this.studentService.createStudent(data);
    // }

    create(@Body() data : {name : string ; age : number ; gender : string}){
        return this.studentService.createStudent(data);
    }

    @Put(":id")
    update(@Param("id")  id: string , @Body() data : { name : string ; age : number ; gender : string}){
        return this.studentService.updateStudent(Number(id) , data);
    }

    @Patch(":id")
    partialUpdate(@Param("id") id : string , @Body() data : Partial<{name : string ; age : number ; gender : string}>){
        return this.studentService.partialUpdateStudent(Number(id) , data);
    }


    @Delete(":id")
    delete(@Param("id") id : string){
        return this.studentService.deleteStudent(Number(id));
    }

}
