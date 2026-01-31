import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    //method
    getCategories(){
        return ["mobile" , "laptop" , "tv"];
    }
}
