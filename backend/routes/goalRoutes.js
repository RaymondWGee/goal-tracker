// importing
const express = require('express')
const router = express.Router()

const { getGoals } = require('../controllers/goalController')

// retrieve goal
router.get('/', getGoals)

// create goal
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create Goals' })
})

// update goal
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update Goals ${req.params.id}` })
})

// delete goal
router.delete('/', (req, res) => {
    res.status(200).json({ message: `Delete Goals ${req.params.id}` })
})

module.exports = router