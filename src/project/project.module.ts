import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project, ProjectSchema } from './schemas/project.schema';
import { Developer, DeveloperSchema } from './schemas/developer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [
    MongooseModule.forFeature([
      { name : Project.name , schema : ProjectSchema } , 
      { name : Developer.name , schema : DeveloperSchema }
    ])
  ] , 
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
