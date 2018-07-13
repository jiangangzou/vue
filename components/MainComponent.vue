<template>
<div>Main
    <Cilck-Component v-for="i in 5" :key="i" :index="i"></Cilck-Component>
    <ShowComponent>

    </ShowComponent>
</div>
</template>
<script>
    import CilckComponent from './click.vue';
    import ShowComponent from './show.vue'
    export default {
        components: {
            CilckComponent,
            ShowComponent
        }
    }
</script>
<style>

</style>