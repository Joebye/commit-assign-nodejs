import pg from 'pg';
const Client = pg.Client;

export class ClientDb {
    client;
    constructor(){
        this.client = new Client({
            user: 'postgres',
            password: 'postgres',
            database: 'postgres',
            host: 'localhost',
            port: 5433
        })
    }
}