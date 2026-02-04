import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LibrarySchema } from './schemas/library.schemas';
import { BookShema } from './schemas/book.schemas';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name : "Library" , schema : LibrarySchema } , 
      { name : "Book" , schema : BookShema }
    ])
  ],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
