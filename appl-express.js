import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import {form} from './routes/form.mjs';
import { listUsers } from './routes/listUsers.mjs';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/addform', form);
app.use('/listusers', listUsers);


const port = 3500;
const server = app.listen(port);
server.on('listening', ()=> console.log(`server is listening on port: ${port}`))