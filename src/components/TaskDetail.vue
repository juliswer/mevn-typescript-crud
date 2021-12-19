<template>
    <h1>Task Detail</h1>
</template>

<script lang="ts">
import { getTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: "TaskDetail",
    methods: {
        async loadTasks(id : string) {
            const res = await getTask(id)
            console.log(res);
        }
    },
    mounted() {
        if (typeof this.$route.params.id == "string") {
            this.loadTasks(this.$route.params.id)
        }
    }
})
</script>