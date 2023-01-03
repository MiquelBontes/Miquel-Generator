<template>
    <div class="flex h-full justify-center items-center">
        <name-generator :names="names"/>
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
    names: IName = MiquelNames
}
</script>
