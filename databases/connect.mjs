import mongoose from 'mongoose';
import { reportConnection , DOTENV} from '../var.mjs';

export default function connectDatabase () {
    return mongoose.connect(DOTENV.DB_URI , {} )
        .then (function () {    
            reportConnection.message = `Connect to database: ${DOTENV.DB_URI}`;
            reportConnection.status = true;
            console.log({report : reportConnection.status});
        })
        .catch( function (error) {
            reportConnection.message = `Failed Connect to database: ${DOTENV.DB_URI}`;
            reportConnection.status = false;
            console.log({report : reportConnection.status , error : error.message});
        });
};