<template>
    <form @submit.prevent="handleSubmit">
        <label>Name</label>
        <input type="text" v-model="name" required>

        <label>Address</label>
        <input type="text" v-model="address" required>
        <label>Address 2</label>
        <input type="text" v-model="address2" required>

        <label>Zip Code</label>
        <input type="text" v-model="zip" required>

        <label>City</label>
        <input type="text" v-model="city" required>

        <label>State</label>
        <input type="text" v-model="State" required>

        <label>Order</label>
        <select v-model="food">
            <option value="Meatballs and Polenta">Meatballs and Polenta</option>
            <option value="Bruschetta">Bruschetta</option>
            <option value="Mozzarella Fritta">Mozzarella Fritta</option>
            <option value="Spaghettini Cacio e Pepe">Spaghettini Cacio e Pepe</option>
            <option value="Bucatini all'amatriciana">Bucatini all'amatriciana</option>
            <option value="Spaghetti alla Carbonara">Spaghetti alla Carbonara</option>
            <option value="Chicken Piccata">Chicken Piccata</option>
            <option value="Chicken Parmigiana">Chicken Parmigiana</option>
        </select>
        <button type="button" class="foodButton" @click="handleFoodClick()">Add Item</button>
        <br>
        <div class="pill-wrapper">
            <div class="pill" v-for="(item, index) in order" :key="index">
                <span style="color: gray">
                    <span @click.prevent="deleteFood(index)" class="closePill">X</span>
                    {{ item }}
                </span>
            </div>
        </div>

        <br>
        <br>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import { ref } from 'vue';
export default {
    components: { },
    props: [],
    setup() {
        const order = ref([])
        const food = ref("Meatballs and Polenta")

        const handleFoodClick = () =>
        {
            order.value.push(food.value)
            order.value.sort();
        }

        const deleteFood = (toDel) =>
        {
            /*
            order.value = order.value.filter((item) => {
                return toDel !== item
            })
            */
            order.value.splice(toDel, 1);
            order.value.sort();
        }

        const handleSubmit = () =>
        {
            console.log("submitting food");
        }

        return {
            order,
            food,
            handleFoodClick,
            deleteFood,
            handleSubmit,
        }

    }
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }
    .foodButton
    {
        background: gray;
    }
    .submit {
        text-align: center;
    }
    .pill {
        display: inline-block;
        margin: 10px 10px 0 0;
        color: black;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
        cursor: pointer;
    }
    .pill-wrapper {
        display: flex;
        flex-direction: column;
    }
    .error {
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
    .closePill
    {
        color: black;
        padding: .5rem;
    }
</style>
