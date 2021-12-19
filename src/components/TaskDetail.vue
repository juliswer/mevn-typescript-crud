<template>
    <h1>Task Detail</h1>

    <form @submit.prevent="handleUpdate()">
        <input type="text" v-model="currentTask.title">

        <textarea rows="3" v-model="currentTask.description"></textarea>

        <button>update</button>
    </form>

    <button @click="handleDelete()">Delete</button>

</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: "TaskDetail",
    data() {
        return {
            currentTask: {} as Task
        }
    },
    methods: {
        async loadTask(id : string) {
            const res = await getTask(id)
            this.currentTask = res.data
        },
        async handleUpdate() {
            if (typeof this.$route.params.id === 'string') {
                const res = await updateTask(this.$route.params.id, this.currentTask)
                console.log(res);
                this.$router.push({name: 'tasks'});
            }
        },
        async handleDelete() {
            if (typeof this.$route.params.id === 'string') {
                const res = await deleteTask(this.$route.params.id)
                console.log(res);
                this.$router.push({name: 'tasks'});
            }
        }
    },
    mounted() {
        if (typeof this.$route.params.id == "string") {
            this.loadTask(this.$route.params.id)
        }
    }
})
</script>