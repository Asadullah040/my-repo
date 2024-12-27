const mongoose = require('mongoose')
const person = require('./../model/person')
const express = require('express')

const routes = express.Router()

routes.get('/', async (req, res) => {
    try {
        const data = await person.find()
        console.log('data feched')
        res.status(201).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

routes.post('/', async (req, res) => {
    try {
        const data = req.body
        const personDatasave = new person(data)
        const response = await personDatasave.save()
        console.log('data saved')
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

routes.put('/:id', async (req, res) => {
    try {
        const personID = req.params.id
        const data = req.body
        const response = await person.findByIdAndUpdate(personID, data, {
            new: true,
            runValidators: true
        })
        if (!response) {
            res.status(404).json('person data not found')
        }
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

routes.delete('/:id', async (req, res) => {
    try {
        const personid = req.params.id
        const response = await person.findByIdAndDelete(personid)
        if (!response) {
            res.status(404).json('person data not found')
        }
        console.log('data delete')
        res.status(200).json({ err: 'person data deleted' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

module.exports = routes
