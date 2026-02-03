import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel : Model<User>) {}

    async createUser() : Promise<User>{
        const user = new this.userModel({
            name : 'Saniya' , 
            address : {
                street : "123 street" , 
                city : "badlapur" , 
                state : "Maharashtra"
            }
        })
        return user.save();
    }

    async findAll() : Promise<User[]> {
        return this.userModel.find().exec();
    }
}
