<template>
  <div>
    <v-layout row mt-2 justify-center>
      <v-flex xs10 mb-5>
        <v-carousel height="350" interval="3000">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-5 mt-5>
      <v-flex xs12 sm12 md4 mr-5>
        <v-img
          src="https://cdn.shopify.com/s/files/1/0267/1841/products/canstockphoto12961496_1024x1024.jpg?v=1513162700"
          height="400px"
        />
      </v-flex>
      <v-flex xs12 sm12 md6 ml-5>
        <div class="text-sm-center">
          <div>
            <span class="title" mb-3>Good dog Good dog Good</span>
          </div>
          <!-- <p class="caption font-weight-bold">Test user</p> -->
          <v-layout class="row" mt-4>
            <v-flex md3>
              <v-rating></v-rating>
            </v-flex>
            <v-flex mt-2 offset-xs1 class="text-md-center">
              <span>758 customer review</span>
            </v-flex>
            <v-flex mt-2 class="text-md-center">
              <span>758 customer likes</span>
            </v-flex>
          </v-layout>
          <v-layout class="row" mt-4>
            <v-flex md3 mt-2>
              <span>Price: 35.50$</span>
            </v-flex>
            <v-flex mt-2 offset-xs1 class="text-md-center">
              <span>Quantity: 420</span>
            </v-flex>
            <v-flex mt-2 class="text-md-center">
              <span>State: new</span>
            </v-flex>
          </v-layout>
          <v-layout mt-5>
            <v-flex col-sm-12 class="text-sm-center">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim cupiditate reprehenderit sit voluptatibus quod minima natus, laudantium nulla, illo facere reiciendis dolore tenetur exercitationem deleniti, minus accusantium dolores dignissimos.</div>
            </v-flex>
          </v-layout>
          <v-layout mt-5 row justify-space-around>
            <v-flex md-4>
              <v-btn round color="blue">
                <v-icon left>done</v-icon>
                <span>Buy</span>
              </v-btn>
            </v-flex>
            <v-flex md-4>
              <v-btn round color="red" depressed>
                <v-icon left>shopping_cart</v-icon>
                <span>Add to cart</span>
              </v-btn>
            </v-flex>
            <v-flex md-4>
              <v-btn round color="teal">
                <v-icon left>keyboard_backspace</v-icon>
                <span>Back</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>
    <v-layout mt-5 row wrap>
      <v-flex>
        <h3 class="text--sm-center">Prices over time</h3>
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout mt-5 row wrap>
      <v-flex>
        <h3>Comments</h3>
        <v-list two-line>
          <template v-for="(item, index) in people">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-tile v-else :key="item.title" avatar @click>
              <v-list-tile-avatar>
                <img :src="item.avatar" />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout mt-5 row wrap justify-end>
      <v-flex xs12>
        <v-textarea name="input-7-1" label="Message..."></v-textarea>
      </v-flex>
      <v-flex xs12>
        <div>
          <v-btn reverse color="primary">Send</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';

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
  components: {
    GChart
  }
};
</script>

<style>
</style>
