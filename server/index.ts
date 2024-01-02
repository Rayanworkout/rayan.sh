import { Nitro } from 'nitropack';

// Db connector
import { connectDb } from './db/dbConn';


// https://nuxt.com/docs/guide/directory-structure/server


// This function will be called when the server starts
// I use it to connect to the database
export default async (_nitroApp: Nitro) => {
    connectDb()
}