import { getDB } from "../db/db.js";
import { heroes } from '../data/heroes.js'

const tableName = 'heroes'

async function seedTable() {
    const db = await getDB()

    await db.exec(`BEGIN TRANSACTION`)

    try {
        for (const hero of heroes) {
            const { name, attackPower, defensePower, maxHp, imageUrl } = hero
            await db.run(`
                INSERT INTO ${tableName} (name, attackPower, defencePower, maxHp, imageUrl) 
                VALUES(?, ?, ?, ?, ?)
            `, [name, attackPower, defensePower, maxHp, imageUrl])
        }
        
        await db.exec(`COMMIT`)
        console.log('INSERTING COMPLETE SUCCESSFULY.')

    } catch(err) {
        await db.exec(`ROLLBACK`)
        console.log(`ERROR: ${err}`)
    } finally {
        await db.close()
    }
}

seedTable()