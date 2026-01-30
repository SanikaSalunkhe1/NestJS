import { Controller, Get } from '@nestjs/common';

@Controller('user')    //Decorator
export class UserController {
    @Get()   //this docorator provide metadata to above method
    getUser(){  //method
        return "User data fetched successfully.!";  //will displayed on user route
    }
}
