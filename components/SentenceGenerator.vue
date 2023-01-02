<template>
    <div>
        <button
            @click="generateSentence"
            class="sentence-text"
        >
            {{ sentence }}
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ISentence } from '~/core/interfaces/Sentence';

@Component
export default class SentenceGenerator extends Vue {
    @Prop({required: true})
    readonly sentences: ISentence

    sentence: string = ''

    mounted() {
        this.generateSentence()
    }

    generateSentence(): string {
        this.sentence = ''

        this.sentence = 'Je '
            + this.sentences.startVerbs[Math.floor(Math.random() * this.sentences.startVerbs.length)]
            + ' zo '
            + this.sentences.adverbs[Math.floor(Math.random() * this.sentences.adverbs.length)]
            + ' als de '
            + this.sentences.nouns[Math.floor(Math.random() * this.sentences.nouns.length)]
            + ' die je '
            + this.sentences.endVerbs[Math.floor(Math.random() * this.sentences.endVerbs.length)]
    }
}
</script>

<style scoped>
.sentence-text {
    @apply
    mx-4
    text-6xl text-gray-200 hover:text-white
    cursor-pointer
}
</style>