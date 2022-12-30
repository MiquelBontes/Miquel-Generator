<template>
    <div class="h-screen">
        <div class="flex h-full justify-center items-center">
            <name-generator :name-parts="nameParts"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IName from '~/core/interfaces/Name';
import NameGenerator from '~/components/NameGenerator.vue';
import { MiquelNames } from '~/core/exports/names/MiquelNames';

@Component({
    components: {NameGenerator}
})
export default class MiquelNameIndex extends Vue {
    nameParts: IName = MiquelNames
}
</script>
