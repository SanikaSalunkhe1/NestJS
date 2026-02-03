import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')    //Decorator
export class UserController {
    // @Get()   //this docorator provide metadata to above method
    // getUser(){  //method
    //     return "User data fetched successfully.!";  //will displayed on user route
    // }

    constructor(private readonly userService : UserService) {}

    @Post()
    createUser(){
        return this.userService.createUser();
    }

    @Get()
    getAllUsers(){
        return this.userService.findAll();
    }
}
