<template>
    <h3>{{ foodName }}</h3>
    <p>{{ foodDescription }}</p>
    <br>
</template>

<script>
import { ref } from 'vue'
export default {
    components: {},
    props: ['foodName', 'foodDescription'],
    steup(props) {
        const foodName = ref(props.foodName)
        const foodDescription = ref(props.foodDescription)
        
        return { foodName, foodDescription }
    }
}
</script>

<style>

</style>