import { Server } from 'http';
import mongoose from "mongoose"
import seedSuperAdmin from "./DB";
import app from './app';
import config from './config';
import { Server as SocketIo } from "socket.io";


let server: Server; 

async function main(){
    try {
        await mongoose.connect(config.databaseURL as string);
        seedSuperAdmin();
        server = app.listen(config.port, () => {
            console.log(`Server is running on ${config.port}`);
        })
        const io = new SocketIo(server,{
          cors: {
             origin:"*",
          },
      });
      (global as any).io = io;
    } catch (error) {
        console.log(error);
        
    }
}

main();





process.on('unhandledRejection', (err) => {
    console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
    if (server) {
      server.close(() => {
        process.exit(1);
      });
    }
    process.exit(1);
  });
  
  process.on('uncaughtException', () => {
    console.log(`😈 uncaughtException is detected , shutting down ...`);
    process.exit(1);
  });