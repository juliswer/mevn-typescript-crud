<template>
    <h1>Task list</h1>
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task'
import { getTask } from '@/services/TaskService'
import { defineComponent} from 'vue'


export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
        async loadTasks() {
            const res = await getTask()
            this.tasks = res.data
        }
    },
    mounted() {
        this.loadTasks()
    }
})
</script>