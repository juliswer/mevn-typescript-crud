<template>
    <div class="col-md-4 offset-md-4">

            <form @submit.prevent="handleUpdate()" class="card card-body">
                <h1 class="text-center h3 mb-3">Actualiza o elimina {{currentTask.title}}</h1>
                <input type="text" v-model="currentTask.title" class="form-control mb-3">

                <textarea rows="3" v-model="currentTask.description" class="form-control mb-3"></textarea>

                <button class="btn btn-primary">Update</button>
            </form>

            <button @click="handleDelete()" class="btn btn-danger">Delete</button>
    </div>

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
                this.$router.push("/");
            }
        },
        async handleDelete() {
            if (typeof this.$route.params.id === 'string') {
                const res = await deleteTask(this.$route.params.id)
                this.$router.push("/");
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