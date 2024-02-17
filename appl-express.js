import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import {form} from './routes/form.mjs';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/addform', form);


const port = 3500;
const server = app.listen(port);
server.on('listening', ()=> console.log(`server is listening on port: ${port}`))