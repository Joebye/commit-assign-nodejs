import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { ClientDb } from '../domain/dbpg.js';

export const listUsers = express.Router();

listUsers.get('', expressAsyncHandler(async (req, res) => {
    const clientDb = new ClientDb();
    clientDb.client.connect();
    const resData = await clientDb.client.query('SELECT username, phonenumber FROM users');
    clientDb.client.end();
    res.send(resData.rows);
    console.log(resData.rows);

}))