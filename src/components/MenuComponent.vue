<template>
    <div class="menuList">
        <article>
            <div class="foodHeader">
                <h2>Antipasti</h2>
            </div>
            <br>
            <div v-for="food in antipasti" :key="food.name">
                <FoodItem :foodName="food.name" :foodDescription="food.description" />
            </div>
        </article>
        <article>
            <div class="foodHeader">
                <h2>Primi</h2>
            </div>
            <br>
            <div v-for="food in primi" :key="food.name">
                <FoodItem :foodName="food.name" :foodDescription="food.description" />
            </div>
        </article>
        <article>
            <div class="foodHeader">
                <h2>Secondi</h2>
            </div>
            <br>
            <div v-for="food in secondi" :key="food.name">
                <FoodItem :foodName="food.name" :foodDescription="food.description" />
            </div>
        </article>
    </div>
</template>

<script>
import { ref } from 'vue';
import FoodItem from './FoodItem.vue'
export default {
    components: { FoodItem },
    props: ['antipasti', 'primi', 'secondi'],
    setup(props) {
        const antipasti = ref(props.antipasti)
        const primi = ref(props.primi)
        const secondi = ref(props.secondi)

        return { antipasti, primi, secondi }
    }
}
</script>

<style>
.menuList {
    background-color: white;
    width: 80vw;
    height: auto;
    padding: 15px;
    margin: 0 auto;
}

.menuList h2 {
    font-size: 3rem;
}

.menuList h3 {
    font-size: 2rem;
}

.menuList article {
    border-bottom: 1px solid #ddd;
}

.foodHeader {
    text-align: center;
    font-family: 'Snell Roundhand', sans-serif;
}

.sectionHeader {
    filter: drop-shadow(0px 0px 2px #000);
    text-align: center;
}

.sectionHeader h1 {
    font-family: 'Snell Roundhand', sans-serif;
    color: white;
    font-size: 3rem;
}
</style>
