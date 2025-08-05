<template>
    <div>
        <h1>{{ pageTitle }}</h1>
        <ul>
            <ListItem v-for="item in list" :key="item" :item="item" />
        </ul>
    </div>
</template>

<script>
import ListItem from '@/components/learning/ListItem.vue'

export default {
    name: 'GroceryList',
    components: {
        ListItem
    },
    data() {
        return {
            list: ['pommes', 'bananes', 'cerises', 'poires', 'abricots'],
            pageTitle: 'Ma liste de courses'
        }
    }
}
</script>