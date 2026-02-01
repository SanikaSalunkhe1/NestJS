import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;

@Schema({ timestamps : true }) //createdAt & updatedAt fields .  //Prop-> property
export class Student{
    @Prop({ required : true })
    name : string;

    @Prop({required : true })
    age : number;

    @Prop()
    email?: string; 
}

export const StudentSchema = SchemaFactory.createForClass(Student);