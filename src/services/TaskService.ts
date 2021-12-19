import axios from './axios'
import {Task} from '@/interfaces/Task'

export const getTask = async () => await axios.get('/tasks')

export const createTask = async (task: Task) => await axios.post('/tasks', task)