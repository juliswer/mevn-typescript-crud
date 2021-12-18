import { Router } from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find()
    console.log(tasks)
    res.send('getting tasks!');
})

router.post('/tasks', (req, res) => {
    res.send('creating tasks!');
})

router.get('/tasks/:id', (req, res) => {
    res.send('getting a task!');
})

router.delete('/tasks/:id', (req, res) => {
    res.send('deleting a task!');
})

router.put('/tasks/:id', (req, res) => {
    res.send('updating a task!');
})

export default router