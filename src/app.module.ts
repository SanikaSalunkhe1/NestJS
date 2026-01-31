import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeController } from './employee/employee.controller';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MypipeController } from './mypipe/mypipe.controller';
import { UserRoleController } from './user-role/user-role.controller';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, EmployeeController, MypipeController, UserRoleController],
  providers: [AppService, ProductService],
})
export class AppModule {}
