<template>
    <div></div>
</template>
<script>
    import { cityGuess} from '@/api/getData'
    export default {
    
        data() {
            return {
                geohash: ''
            }
        },
        async beforeMount() {
            if(this.$route.query.geohash) {
                this.geohash = this.$route.query.geohash
                console.log(this.geohash)
            } else {
                const data = await cityGuess();
                console.log(data);
                this.geohash = `${data.latitude},${data.longitude}`
               
            }
           
        },
    }
</script>
<style>

</style>