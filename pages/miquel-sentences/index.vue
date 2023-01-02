<template>
    <div class="flex h-full justify-center items-center">
        <sentence-generator :sentences="sentences"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SentenceGenerator from '~/components/SentenceGenerator.vue';
import { ISentence } from '~/core/interfaces/Sentence';
import { MiquelSentences } from '~/core/exports/sentences/MiquelSentences';

@Component({
    components: {SentenceGenerator}
})
export default class MiquelSentenceIndex extends Vue {
    sentences: ISentence = MiquelSentences
}
</script>

<style scoped>

</style>