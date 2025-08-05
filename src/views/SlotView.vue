<template>
    <div>
        <CustomBannier>
            <template v-slot:top>
                <p class="top">top</p>
            </template>
            <template v-slot:default>
                <p class="middle">mont text</p>
            </template>
            <template v-slot:bottom>
                <p class="bottom">bottom</p>
            </template>
        </CustomBannier>
    </div>
</template>

<script>
import CustomBannier from '@/components/CustomBannier.vue';

export default {
    components: {
        CustomBannier
    }
}
</script>
<style lang="scss">
.top {
    color: red;
    text-align: center;
    font-weight: bold;
}
.middle {
    color: green;
    text-align: center;
    font-weight: bold;
}
.bottom {
    color: blue;
    text-align: center;
    font-weight: bold;
}
</style>
