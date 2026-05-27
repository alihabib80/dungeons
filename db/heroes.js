import { getDB } from "./db.js";

export async function getAllHeroes() {
    const db = await getDB()
    return await db.all(`SELECT * FROM heroes`)
}