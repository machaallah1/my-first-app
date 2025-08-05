<template>
    <div class="learn">
        <GroceryList />
    </div>
</template>

<script>
import GroceryList from '@/components/GroceryList.vue';

export default {
    components: {
        GroceryList
    }
}
</script>

<style lang="scss">
.learn {
    text-align: center;
    color: #2c3e50;
    background-color: #dcdfd3;
    border-radius: 1rem;
    padding: 1rem;
}
</style>
