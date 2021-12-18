import { Router } from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    res.send(tasks);
})

router.post('/tasks', async (req, res) => {
    const { title, description } = req.body

    const task = new Task({title, description})

    await task.save();

    res.json(task)
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.send(task)  
    } catch (error) {
        console.error(error)
    }
})

router.delete('/tasks/:id', (req, res) => {
    res.send('deleting a task!');
})

router.put('/tasks/:id', (req, res) => {
    res.send('updating a task!');
})

export default router