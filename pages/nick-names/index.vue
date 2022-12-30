<template>
    <div class="h-screen">
        <div class="flex h-full justify-center items-center">
            <name-generator :name-parts="nameParts"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NameGenerator from '~/components/NameGenerator.vue';
import IName from '~/core/interfaces/Name';
import { NickNames } from '~/core/exports/names/NickNames';

@Component({
    components: {NameGenerator}
})
export default class NickNameIndex extends Vue {
    nameParts: IName = NickNames
}
</script>
