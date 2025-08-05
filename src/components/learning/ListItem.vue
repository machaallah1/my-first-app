<template>
    <div class="list-item">
        <input class="list-item__checkbox" type="checkbox" v-model="isPurchased" />
        <label class="list-item__label">{{ item }}</label>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        item: String
    },
    data() {
        return {
            isPurchased: false
        }
    }
}
</script>

<style lang="scss">
.list-item {
    display: flex;
    justify-content:flex-start;
    align-items: center;
    gap: 1rem;
    color: #2c3e50;
    background-color: #dcdfd3;
    border-radius: 1rem;
}
.list-item__checkbox {
    width: 20px;
    height: 20px;
}
.list-item__label {
    font-size: 1.5rem;
}
</style>