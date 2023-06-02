<template>
    <MenuComponent :antipasti="antipasti" :primi="primi" :secondi="secondi" />
</template>

<script>
import { ref } from 'vue'
import MenuComponent from '../components/MenuComponent.vue'
export default {
    components: {MenuComponent},
    props: [],
    setup() {
        const antipasti = ref([
            {
                'name': 'Meatballs and Polenta',
                'description': 'A 3 meat meatball with a side of polenta and marinara sauce'
            },
            {
                'name': 'Bruschetta',
                'description': 'Toasted bread topped with olice oil and diced tomatoes'
            },
            {
                'name': 'Mozzarella Fritta',
                'description': 'Fried mozzarella served with marinara sauce'
            }
        ])

        const primi = ref([
            {
                'name': 'Spaghettini Cacio e Pepe',
                'description': 'A simple pasta dish made using spaghettini and pecorino romano'
            },
            {
                'name': 'Bucatini all\'amatriciana',
                'description': 'A pasta dish made with bucatini pasta, pecorino romano, fresh tomato sauce, and guanciale (cured pork jowl)'
            },
            {
                'name': 'Spaghetti alla Carbonara',
                'description': 'A pasta dish made with spaghetti pasta, pecorino romano, eggs, and guanciale (cured pork jowl)'
            },
        ])

        const secondi = ref([
            {
                'name': 'Chicken Piccata',
                'description': 'Breaded chicken served with a lemon caper sauce'
            },
            {
                'name': 'Chicken Parmigiana',
                'description': 'Chicken sauteed in a marinara sauce topped with parmigiano reggiano and mozzarella'
            }
        ])

        return { antipasti, primi, secondi }
    }
}
</script>

<style>

</style>