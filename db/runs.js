import { getDB } from "./db.js";

export async function createRun(userId) {
    const db = await getDB()

    try {
        const result = await db.run(`
            INSERT INTO runs (user_id, created_at) VALUES(?, ?)    
        `, [userId, new Date(Date.now())])

        return result.lastID
    } catch(err) {
        console.log(err)
    } finally {
        await db.close()
    }
}

export async function updateRunStats(runId, outcome) {
    const db = await getDB()
    console.log('RunID:', runId)
    try {
        if (outcome === 'draw') {
            await db.run(`UPDATE runs
                SET total_battles = total_battles + 1
                WHERE id = ?`, [runId]
            )
            console.log('draw executed')
        } else if (outcome === 'player_win') {
            await db.run(`UPDATE runs
                SET total_battles = total_battles + 1, wins = wins + 1
                WHERE id = ?`, [runId]
            )
            console.log(await db.get(`SELECT * FROM runs WHERE id = ?`, [runId]))
            console.log('wins executed')
        } else if (outcome === 'player_loss') {
            await db.run(`UPDATE runs
                SET total_battles = total_battles + 1, losses = losses + 1
                WHERE id = ?`, [runId]
            )
            console.log('losses executed')
        }
        // console.log('runId:', runId)
    } catch(err) {
        console.log(err)
    } finally {
        await db.close()
    }
}