import { getDB } from "../db/db.js";

async function alterCol(oldName, newName) {
    const db = await getDB()

    try {
        await db.exec(`
            ALTER TABLE heroes
            RENAME COLUMN ${oldName} TO ${newName}
        `)
        console.log('Column name changed successfuly.')
    } catch(err) {
        console.log(err)
    } finally {
        await db.close()
    }

}

alterCol('defencePower', 'defensePower')