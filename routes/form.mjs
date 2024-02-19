import express from "express";
import expressAsyncHandler from "express-async-handler";
import { ClientDb } from "../domain/dbpg.js";

export const form = express.Router();

form.post('', expressAsyncHandler(async(req, res) => {
    
    const {username, phonenumber, password} = req.body;    
    const clientDb = new ClientDb();
    clientDb.client.connect();
    const values = [username, phonenumber, password];
    const query = "INSERT INTO users (userName, phoneNumber, password) VALUES ($1, $2, $3)"
    const resData = await clientDb.client.query(query, values);
    clientDb.client.end();
    res.send(resData);
    
}))