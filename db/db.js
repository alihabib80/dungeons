import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// helper function to open a database connection
export const getDB = async () => { 
    return await open({
        filename: './database.db',
        driver: sqlite3.Database
    }) 
}