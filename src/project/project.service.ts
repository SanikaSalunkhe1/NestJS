import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';
import { Developer } from './schemas/developer.schema';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private projectModel : Model<Project> , 
        @InjectModel(Developer.name) private developerModel : Model<Developer> ,
    ) {}

    async seed() : Promise<{ dev1: Developer; dev2: Developer}> {
        // TODO: Implement seed method
        const [projectA , projectB] = await Promise.all([
            this.projectModel.create({ title : "Nest js" }) , 
            this.projectModel.create({ title : "Mongo Analytics" })
        ]);
        const [dev1, dev2] = await Promise.all([
            this.developerModel.create({ name: "Developer 1" , projects : [projectA._id , projectB._id]}),
            this.developerModel.create({ name: "Developer 2" , projects : [projectA._id ]})
        ]);
        return { dev1, dev2 };
    }
}
