<template>
    <div class="flex h-full justify-center items-center">
        <button
            @click=""
            class="sentence-text"
        >
            Dit is een test
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MiquelSentenceIndex extends Vue {

}
</script>

<style scoped>
.sentence-text {
    @apply
    text-6xl text-gray-200 hover:text-white
    cursor-pointer
}
</style>