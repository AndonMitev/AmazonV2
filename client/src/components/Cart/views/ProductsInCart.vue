<template>
    <h2>My products</h2>
</template>

<script>
export default {
    name: 'ProductsInCart',
    props: ['productsInCart'],
    mounted() {
        // console.log(this.productsInCart);
    }
}
</script>