import  path from 'path';
// Import the 'express' module
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './config/routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';



// Create an Express application
const app: Application = express();

//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//application router
app.use('/api/v1',router)


// Set the port number for the server

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Hello, This Ahad Hossaion Aiman form Bangladesh!');
});


app.all('*',notFound)
app.use(globalErrorHandler)


// Start the server and listen on the specified port



export default app