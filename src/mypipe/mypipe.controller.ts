import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('mypipe')
export class MypipeController {
    @Post("custom")
    myCustomPipe(@Body("name" , new UppercasePipe())  name : string ){
        return {message : `Received name : ${name}`}
    }
}
