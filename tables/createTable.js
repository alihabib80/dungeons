import { getDB } from "../db/db.js";

const tableName = 'users'

async function createTable() {
    const db = await getDB()
    await db.exec(`
        CREATE TABLE IF NOT EXISTS ${tableName} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        )
    `)
}
createTable()
async function removeRows(tableName) {
    const db = await getDB()

    try {
        await db.exec(`DELETE FROM ${tableName}`)
    } catch(err) {
        console.log(err)
    } finally {
        await db.close()
    }
}

