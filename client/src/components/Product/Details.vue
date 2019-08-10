<template>
  
</template>

<script>
import { GChart } from 'vue-google-charts';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Details',
  data() {
    return {
      items: [
        {
          src:
            'https://cdn.shopify.com/s/files/1/0267/1841/products/canstockphoto12961496_1024x1024.jpg?v=1513162700'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6SOp1H83BiFlux_V0qJ71PkIQobkoigC_2gIseirmapA4vV6'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht9UfSoU60Y4SKA-68itMOhVGBtJIXLUbRBcPokQopyzwZdpA'
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxZA_CdhSVEDa3P3Zm8MKRgc6ySRAvcwg3fFkA8maViV8dwa1Dg'
        }
      ],
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      },
      people: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    };
  },
  methods: {
    ...mapActions(['getProductById'])
  },
  computed: {
    ...mapState(['product'])
  },
  mounted() {
    const id = this.$route.params.id;
    this.getProductById(id);
    console.log(this.product);
  },
  components: {
    GChart
  }
};
</script>

<style>
</style>
