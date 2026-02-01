import { Injectable , OnModuleInit , OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit(){
        this.isConnected = true;
        console.log("Database is connected");
    }

    onApplicationShutdown(signal : string){
        this.isConnected = false;
        console.log(`Database is disconnected due to app shutdown. Signal : ${signal}`);
    }

    getStatus(){
        return this.isConnected ? "Connected" : "Disconnected";
    }
}

