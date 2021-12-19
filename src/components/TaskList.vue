<template>
    <h1>Task list</h1>
</template>

<script lang="ts">
import { getTask } from '@/services/TaskService'
import { defineComponent} from 'vue'


export default defineComponent({
    methods: {
        async loadTasks() {
            const res = await getTask()
            console.log(res);
        }
    },
    mounted() {
        this.loadTasks()
    }
})
</script>