import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schemas';
import { Model } from 'mongoose';
import { Library } from './schemas/library.schemas';


@Injectable()
export class LibraryService {
    //inject module
    constructor(
        @InjectModel(Book.name) private bookModel : Model<Book>,
        @InjectModel(Library.name) private LibratyModel : Model<Library>
    ){}

    async createLibrary() : Promise<Library>{
        const book1 = await this.bookModel.create({
            title : "Js ki champion" , author : "Sanika bhai" ,
        })

        const book2 = await this.bookModel.create({
            title : "Nodejs ki champion" , author : "Sanika salunkhe" ,
        })

        const library = new this.LibratyModel({
            name : "Central library" , 
            books : [book1._id , book2._id]  //we can access through their ids
        })

        return library.save();
    }

    //method
    async getLibraries() : Promise<Library[]>{
        return this.LibratyModel.find().populate("books");        //populate used for getting the whole data, it is not supposed to be get only book data bt also their library detail too  

    }
}
