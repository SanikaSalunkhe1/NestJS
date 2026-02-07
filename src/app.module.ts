import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env/env.service';
import { EnvController } from './env/env.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { UserModule } from './user/user.module';
import { EmployerModule } from './employer/employer.module';
import { ProductsModule } from './products/products.module';
import { LibraryModule } from './library/library.module';
import { ProjectModule } from './project/project.module';

@Module({
  // imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule , ConfigModule.forRoot({ isGlobal : true })],
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule , ConfigModule.forRoot() , MongooseModule.forRoot(process.env.DATABASE_URL || 'mongodb://localhost:27017/nestjs'), StudentsModule, UserModule, EmployerModule, ProductsModule, LibraryModule, ProjectModule],
  controllers: [AppController, ProductController, EmployeeController, MypipeController, UserRoleController, ExceptionController, DatabaseController, EnvController],
  providers: [AppService, ProductService, DatabaseService, EnvService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
