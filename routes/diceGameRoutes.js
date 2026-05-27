import { createDiceGameEngine } from '../domain/diceGameEngine.js'
import express from 'express'
import { getAllHeroes } from '../db/heroes.js'
import { updateRunStats } from '../db/runs.js'
import { createRun } from '../db/runs.js'

const heroes = await getAllHeroes()
const engine = createDiceGameEngine(heroes);

export const diceGameRoutes = express.Router()

diceGameRoutes.get('/heroes', (req, res) => {
    return res.status(200).json({heroes: engine.getHeroes()})
})

diceGameRoutes.post('/battle/start', async (req, res) => {
    const heroId = req.body.heroId

    if (!heroId) {
        return res.status(400).json( {message: "Hero ID is required"})
    }

    if (!req.session.userId) {
        req.session.userId = 1
    }

    if (!req.session.runId) {
        req.session.runId = await createRun(req.session.userId)
    }

    const playerHero = engine.startBattle(heroId)
    playerHero.message = "Battle started. Roll to attack!"
    return res.status(200).json(playerHero)
})

diceGameRoutes.post('/battle/round', async (req, res) => {
    const round = engine.playRound()

    if (round.error) {
        return res.status(400).json({})
    }

    if (round.outcome !== 'ongoing') {
        await updateRunStats(req.session.runId, round.outcome)
    }

    return res.status(200).json(round)
})

diceGameRoutes.post('/battle/reset', (req, res) => {
    engine.resetBattle()
    return res.status(200).json({ message: "Battle reset." })
})
