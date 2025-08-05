<template>
  <div class="about">
    <div class="about__container">
        <h1 class="about__title">About</h1>
        <p class="about__content">about content</p>
        <button class="about__button" @click="goToHome">Go to Home</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AboutView',
    methods: {
        goToHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">
.about {
    &__container {
        text-align: center;
        padding: 2rem;
        background-color: #dcdfd3;
        border-radius: 1rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    }
    &__title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    &__content {
        margin-bottom: 1rem;
    }
    &__button {
        padding: 0.5rem 1rem;
        background-color: #42b983;
        color: #fff;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }
}
</style>

