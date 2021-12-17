import { Router } from 'express'
const router = Router()

router.get('/tasks', (req, res) => {
    res.send('Hello world');
})

router.post('/tasks', (req, res) => {
    res.send('Hello world');
})

router.get('/tasks/:id', (req, res) => {
    res.send('Hello world');
})

router.delete('/tasks/:id', (req, res) => {
    res.send('Hello world');
})

router.put('/tasks/:id', (req, res) => {
    res.send('Hello world');
})

export default router