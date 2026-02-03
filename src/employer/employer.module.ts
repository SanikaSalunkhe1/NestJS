import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee , EmployeeSchema } from './schemas/employee.schema';
import { Profile , ProfileSchema } from './schemas/profile.schema';


@Module({
  imports : [
    MongooseModule.forFeature([
      { name : "Employee" , schema : EmployeeSchema } ,
      { name : "Profile" , schema : ProfileSchema } ,
    ])
  ] ,
  providers: [EmployerService],
  controllers: [EmployerController]
})
export class EmployerModule {}
