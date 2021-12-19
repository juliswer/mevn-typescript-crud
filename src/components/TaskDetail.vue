<template>
    <h1>Task Detail</h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: "TaskDetail",
    mounted() {
        console.log(this.$route.params.id);
    }
})
</script>