<template>
  <div>
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
    <v-layout row justify-center mt-2>
      <v-flex xs10>
        <v-carousel height=350 interval=3000>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      items: [
        {
          src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMWFhUWFRUYFhYVFxUXFxUVFhUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHR8tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS03Lf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA/EAABAwMBBQYEBQIEBQUAAAABAAIRAwQhMQUSQVFhBhMicYGRMqGx8AcUUsHRQuEVI2LxM1NykqIWF0PC4v/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgIDAQADAAAAAAAAAAECESExElEDE0FhMnGB/9oADAMBAAIRAxEAPwDX2iIMCGW1QBTVL4DitLlIwwxtEHOEIbeVgFUq7SnAKrvJOVlfk9Np8Ps41crouSFAWlTW9uXarK2tphI6ajnFXra15p7aIaOqnoUyUjN3I0U7QeSlZTjMLlUE9EyNZTJVhlI81SbWqNMDIU9Oq46pbPS0ykealpvcOKgFTqpmeSqZJuK5Tu+BVplYFDc8lzfIVzP2i4ehcFdQtl2RwVqjc88LSZSossWklwOldTIkkkkAkkkkAkkkkAlxdXEBxJJJAcXHLq45BK7kl1ySotPJnbUPBVal8TxQQXSnt3bxC47uuyanTTbOE5Ku1KuYCoW9XdbCt2jN45QF20olyIhobhcpsDG4T7akSZKae0tC2nVEadAN1TGndGFKxrjwTB7ROAFx9ILrwW8MIfcXwmErdCTaw6m1R7g5quGvPQesqzStQdSSp2vWjDWaNFKyqToCuVbOII9fJEKTAAnJU2xV7x2kFPotJOdFPVMBV6dSNeKfRfi6KQjChrtgSpadRCtvbUZT3WF3iccAa41Mcle4jVcuL4sEz6ArH9ou39elilA6loPsjd9Ua8eF+eWF5x23Zuw7WD6JzIri2OwPxM0bctPV2PmF6DszatK4bvUnhw6L5gpVidVdt9s1aJ3qVRzDzaSP91Uz9puHp9QJLwzst+KVyx8XB75mmjQ4dQQM+q9h2Ftmnd0xVpTHJwggq97T/sSSSSQCXF1cQHCkkkgOLjl1ccgkDkknarionzzQoEots6jBT6dCAr1jS4ri27dLdKiSQtFs+2AElDrK3nKNtZjHBOFkTyCVZomcaBZ/aXaS3oYc6TxDRMJ+yu1FvX/4bjPJwP10VI21FEDzRCiglC7nOCr9C8BGD+37plV95VGtRaHb0Dr5KY1wVUua+EsjxXmMCjrYyobKtLfJR3VwOaW+D1ymqV/v9ky1uZEcsITb1TU0OOPy0Tn0HgywgnkcSPsqfK9q8YOl4IhD7skcPJU/zT2HxiPmPf8AlXGXDXiD99U+y1p2zvg4arO9srQO8Z5YPkila2LTIn/qH7j2VprQ4Q8AyNdU5zxReOY8tsNqvqtIpSHMJBE/F1A4hAdubQdVllTBHyWs7a9lH27heWQDS2XPHBw5bo4R6rP3tdl9SNem3drUx/m0zggc41gqpNIuXlGMbWIMTCkfVkQo9q0p8TcKlRrEGCq0nYns8+No5kD5r23sPfGg9lMSWVDETx4ELwyxP+Yzq4L3T8PbcPqb/wDy25/6nafJVE3p6TK6ot9c3laEspSot5LeQNpJSlRbyW+mNpE1yZvpj3o0NuOOUlA6okmTyKoUW2ZbYlDbagXuC01tbHDR6rhjvqxaU4CodqtrC2okgw52BzHWEW2jWFCg+rAO40nJjQLwva/aOpcPLqmp0HIcAFpIxtR3W0S8k6nnjKt9nK28/BM8QPvRBXqazrllUEGAdesKkvW7fbQpsDRGMY5/uUFr7cuA4vYQQMQYEniBGeWizexrl1e4a1oONSNI6orTtjdXot6JIZRBD3AbwnBdPqostumksk29C7LX9VzIqHgDxgT5lWr+7LjusyTx4AcZTraxFNoY3WBJiPWDp7pzaI39wep6DUlKz8GN52IW53aYnz5aqg8GoSJxxPTkPRN2xfhgMmAOeMDqoLS7/wAsOB+LM+f38krrpWMva7WrtpthoAjghrttAGC4eqA7X2y81W0abd5zgSTwaJj3zooxsOmZdVO+Y4+QyBw4qVSNUNpNI+Ie4QqttQsqtAEsfPiB+EjIB8xJQ/Y2yaT6pYGDw5M+vLErYUdhW+JYMafYTm6VsiazvJEGDorYjglTsaYEAeypVA6m8g6H4Tz6Hqr6RxehKpSBEHj94XjXa/YTtn3QuaIPcvMVAJIh2CHYj3K9koVZCodpNmNuKD6ZEy0gaHPDCucs7NV897YohtRzR8My0dDkIRdW2JGoWj2pZkvcD/xacNe3MkDRwCFV2wMhVOkXtRsKvjaTzX0D+Ert6hUdzeBPk0L58YzIjmve/wAEnzbVW8ng+7f7K52m9PQklNuJbipOkK4p9xc3EDSFcU+4ubiBpCmPVncUb2JgOccpKR7MpIJidk2kN3ijuz7ecqK2ogw0cEbpUgAuTGOvLJifxJ3zRZRYSA8kuifEGiYPr9F4rtCyLTnXK9+7YWj3NbUbkUzJbzB1gry7tnaMNLvKeup4yOR8lcRWJY4xCjDyXJrqsJ1u2RvHj9FUibWl2HdG3tK9wI3nHcYeRMafNbz8JbAC3Nczv1DJJYB/2viT7rzq/c78vbW4/reXwOJJ3RIH8L3TY1r3dKnTgANa0QGsEY0Abp7KelX0uFup99Qm02bgLnan6cuqsmnjn98EG2vWIwJwOGeCi+2mPPAXtm2dcv7lujiN7oOvtCI19mFrA1sCBEcBGNER2TbilT3j8ZHi/jRNr3YJ1HlxU2cKmXpgre0rMvCarfDuwwzg5yOh09loqoH3hSbUuRE8s/NQVKwcCRylT/F6/UPZ+kKZqu1L6k+Q3QAPqtBTvPvqs5QuJnOhOI+nTCs27X1nESWsGCW4c48RPBqJRcfbRMu+o9416K0azHiHEe4wsntTaVOyA3aLnuPBgBMc3Od/uruxe1VC5b4W5B3XNcBvMPJwJ/ZaTplYNMDhxB5RGVKyvByMFV6N5SAlu6AekfJPNyx4IHvBA+eqXR3lg/xM2NuvZe0xgENqxGWE6nmvPtp2gBIbpw8jkL3G4YKjH0XjUEaA4I6rxvaFqWOfSIywlv7j9lthWGcBKVqCYXvn4T7O7my3iINRxdn9MAD6Lxjs3s591XbSYMSC8/pbOfVfRuzYaxrBo0AD0wr42jnS/KUpsrkqiOlKU2VyUDZ8rkpsrkoB8pjnJpcmucglZ5ykmPOUkyCdljii29hAdkVpaI0RthwuedOjLtDWbK8r7a2opvqNjDwXN6A4cPcyvVq2i86/EukdxjxwJBPmP7Jfp/jxJtMufu/6kWrUd1pQ8MIqEjmUSuX7zPULWMq0nZ6z729s4P8AQDyjcB06yvaxjBJXlX4e2e9dtcc91RHkHO4e0r0s1hvYx9/eiytaycp728DR9yUGDHVHSWlrZEuMDAIP7IrSotHidkqyy6YBwjrj5KNWtNydKN3ejQEnlDXH6BA7q7efhoPdn4nFrPYRM+YRHtB2nt7Zu89wgmAG5cTy3ZVLZPaFlxIDHtPAPG6SOaMoML/Ga2rtZ7daLmnMAmZM8wcjVFdmvc6mxxH9Iz6K/ty2bUo1ARMAub5jKAbHvJot0x4SPKQPlCzvFbS7XnVAHOHkR6gj/wCqMbMrAU6cfpCxt9fFtYif/jEe55eam2Ft0bndnD2E4I1adI++CIWQr2z2syhRNR2pgAR9wdcrxujtao2s6rRduZJgSJE6EDVbrtk/vmObwyefiAkEey84awhh+8ArfCOfPto6faNxP+ZcP4Q0OdExp4RGEa2d2yfTMsqd40atcSTHSVlNmWVn3D3V6lTvi4NpMYGxBBJe4kzAiI6hUnUNx0sOJ9xotL8fCJnd6e9bN7SUqxouYQe8BHLIExHNBvxK2YQG3LNCN1/7E+uF5tsO4dRuKTxJhwMN47w4D1XvDqgrW+W6tEyPkQsv8Wn+TN/hNYhtCpVLYc95EniABp0mV6JRdCHbOaA1oAAAAwEQq6Jy/qbPxebVXe9VOi7CTqkLbHKVjljpa71cNVVDVXO9VpXO9XDVVPvVw1UtjS0aqYaqqurJneo2ekjqmUlWNRJT5K8We2PdboAJWit70Fef0bg7uEe2HdjVxyufHJ0ZYtQ8ys92l2eK1JzOMSPMaIxTryMKC6AhXWceBX1mGudiCDBHVMtbeS1v+r6L0btjsAVhvt8Lxx59CsVY0DTLi8eJoI9ThXMppNxu3on4a2cU6tXi58T0aI/lGHVx+YLf0tnlnyTuy1r3NnTboS2T5uyZPqsb2l2p+Tud+SW1NdPi6cffkscmuEEe13a9tsQwEd44aAaZ1J4eSwt12quMltzE8BAjyACze2NpmrUfVOS4ndnMAdFBsi3ZWqgV6ppUzO88AOLRGoaSJ+q0xwTlmK7M2i78w2pVeHuHw78EAnpp7L1nZt4xwD5E8eBB5HovB6nEtkhpwSMxwnK2PZLaxAguMg5njyypzxP469Uq15a7H9Lvocys/wBnrFopieOT1npxUG0NowzdGtQhoydCCXHrAnopzeNpiAeEcVlY2lE69CkDvQJ68vsoHtPZlOod5kseJ8TdI1O8EPv9utbq7QQIVSl2gYcA5zMYn1TmItUdrCoAWvEH6g+SzlzSh+7Eh0GBM51/la67qd4IBH1P8qgdiueQIMjIIE+Uq8brtnlNgLAaY3HtOuDGvkruzbU1XQBjmcCRmFbvKFSkd2rPTiPMIfWujgB3sfuPRasv4MbPDBdtjLGnEDgMc9f5XseyLtlSkdzOIOvtleRdj7berNHGMmJBnmvVLRjmauhp0AEe6xt3dtZNY6HLR0AJ9W6kwhla43WzPBB6O1ZdqlldQSbrZ0qylflZ+hfola3gKWOZ5YLYYl3akpulPIXTLuMLwr92ud2rELkIJWNJMNNWyE1zUaCiWpKRwSU6Vt5jaVMLrblzThDLK8CvtqAlc0dVanYm1Ru51RIXoOSsU9pGWlMtNqvaYPJXMvxncP1taj2vHArzu52HXNV7nt3WbznTIO8J8LRBRa82i8AGnJcdY0VJ236wxVpyOJnIR5Dxek7McHUGQP6R9Oi83/FSwcWBwHwmZW87L3AfRABBjSOKFds7YPouDogAn0hV6qfceLWJY1tRr2ySzwdHgjdJ6aqpb3DWunQ8j9FcrWMt3gTgxzBHBcYA0deRAPyI6LSXbO42L9nSYKL3VBAdgTrHQeqAWtyaLzr96FFw51WGtaTwgCJ6mB80TZ2XJd3lSJOo/unlosdq2x7p9R++7RoIbPAHU+asbX2oQ2G6nQcycKa7a2k0gAADU8dSFnqF4HVN9xO60YOfcLPGbrTLLUWbfZYeN+q8kk+k8RHNdrWVHDR4XkYjpmSqNjdDeq7vw/EJ58fdcrVnO3alOZEjOsED5YW/DDlcoXbqLt2ocY3XcD0PJbnYe0WFvxSYgadD5cTqsXRsHGnv1zJM7ojACodwWGWPLTwIMA88cVnl8bTH5Hqd/Sp1mw4Tr+wWNutgta87onPhjIMnIdHBUdm9oKtPD5I5icjy/hHrfa7KokHOJmdf7R81nZY1lxoh2Y2b3F1Dh4S1pBHlyXotRzdySAs5Z3TKtOk/G+3wu/bylEdtXgbRHMqYd5Dds3giB8lnLa4O96qV1c1CoqluQQU8puFjeWisqxIRS1rkFALCpCIiqZXNZqumXbV2V2irKgKydo5EmXJC3w+TXbDP499Di4hlPaCsUr4O6LafJKxuFi2uOTA9Nc9XtGkbgkmF6SnatPCXMLdE6neOBRmpZSqz7MBc0rqsEbCpvhFrbZLfiePIaShWxTTonfqOE6tYTw5kLRUtqtqOJxusA0/UdAOqrSLVe6oEDwsAHBAfy5rTuidQYWp2pdRSJOJB14YQzsHHdunJL35jrz+9EvA/LhZ7EXRouNu9pE5aToRxA5o/t7Z7arC1wkEaIX2rDW0HVm4dSG808nD9lNY7bL6LTUAa8tEgnjpgrSdMredsHW7NvD3yP8sDkdQOHpwQSvZ02EktyJAxjIxiMffVeq3u0qVCjmPESTkAknpPi915ltG4L6veQAAfCJOBnMSI9UtWK8txa2DbhuS0cJnkOXP0Vzau22UqcmBqIzJzy5rLXu1wcU5jIJIAQmo/eMulzpwTMSrmPtncli8vnXB8UtZOBnxec8P5V2xa0CC0QcQhluyC06mYH37olTGOU/KOPmtceGeXKarslgBFJzSHmTI8QAmAOA1OQqey7NoJneIa4yAAcTrHl9UXq7jGCP0ifv3QmxumsqVORI+/r7qk8iN9XdoWw3hGn3hCrmmNRMR6jyWoqV6TmCG6jJJmM4gDgOqD3dMAHkZEopwKaDgAgxpI4cQrNrRPljBaeHWOCrmjHwngP7KxRe/ljHFZra7s3ejeh0DrPsI5Ih2x2q3dYGkEEcFjrZ5BkcNRwn08kWq0e8YAefT7IWVknLWbvCbZFyEZrvBagdts2BhSVLeoBiVP2Y1X15ResbqHQVpA3TqvP21HteC4YkI/X21JbuzAUXHa5W1oswAFcurdzGFwzAkjn5IPsq+G8HHSJUt72la2SdNFUxiblVrZlw2oN4HVFXMx14LAbFuyLl+7ik4b0cieS1Lb8PY4A5Ax5+aqYpuQjTvg6WaEcFQobQe2ruPy06eSx+2a1dxDm+GpucDr59UU2ITVazWRrOoPGOYRzBx+tnqkomCBCStOoxLqA5KtWtQrLr3nHuFRuK0id6B0lckrq0BVLE1rg5nu2gdAdT7y1HqTQykaQPijDjoXEanoP2Qi22obeq4tZvh+p4ro7RsBdTfpPhcRAgj5rp3uOa7l0l2yypRa5heXCA5oOdddfRWNh7SfStRuM3nkhrG8CXHjHqVVbcUntc3fDvDiTPhHJOfe06bWNo1WghrciDumCCfPJ90RVvAk7av5i2NKt4XPFSm/zBgOA1iVnb3bz6Ttyo0FsNA/0uJ//K7c7Qt6YJL5cSMzJcSZLiecygO17ptQNwTLg7AJMDegf+QVTVZXjoeFd1ffqFxIEgCBw1MuOfPqUAva8ncLiBniI1wMK/ZX7BSMSSGxBgcZy3hHohI8bXGAXg84AHIDgnILeCc1jMZJPPKpuqcgrBuYJDxBUL6jdWqkH0myATwJP36K7Tq414IZRLieSsl2J6Z/dPYOvrkkQD9hUm0HDPEjTiRlMFXed0HzU765kdPRHY0kt7sjEwiL6stBOeg+sIDX1nRct9oFuHZCRiNQumefzTnXECI16fuq/wCfYYjVQOu54/f2UUQYt7iGTxJ+i1PZ+2L6e+efpHMLJ7F2dUruA3XbnWQF6vsrZm6wNIAEBc/yXfDo+Oa5VqNlhWf8PMDCv/lSGjdzonsE4JI6Ef2WXi18gW62Y1wgt9kKq7Jc1pDVsu7J0OI1CRsT5yibh8VgRf1aY3KjSANHAKVt4yrS3QYJnVbGrs6eHyVKpsGmdW/JaT5P4yvx/wBZnZt8xtJoc4AsLm65LZkfVFWbRpBpO8IPCdVYb2Zo5PdhO/8ASlI53B7J/Z/C+sJttpU+cnew2Z16ra9nrYjxu1Og4AfyhNtsCmyIbnyWi2f4fDwTxyLLCr+Ek7HJdVo5ebm0OAT54JjpyT/8ImC1pI6738hFe54AwPJTNouLpJ4R6LntdElCLfs8d7xNAnmf91ffsYRoCeEBEQw/qKcWnmjY0CUdmbhLjTbPVslo8wVVu7NjyCW0S3SSwO+R/lHHWId/UYUDdnTgzHCEbPUCf8MtWfBTZvdGNEeRhMudnNIAAcIwOQ/8Ub/w2Phn1UooOH9ilujWLMt7LURL3s3+gA064yqN72St3Za19Mn/AJcfNpEeq3bRjIK44D9Kflknxnp5tU7DPiWVjzh7QSfYhVW9j7jd+KnnnjHllei1LPeky5vSVMAcAxEKvsyhfVjXmbext2dO7jmd4x1TP/b+7qa1Gx/pB+hhem1Hhp1wrNvc4AbCPtyL6cXmrfwzeBmqfSB/Kc38NDE77vMH+y9Ne88T8lXYw6z/AAl9mXs58c9PPGfh0CJl55hxghTH8MWwTI/7nfxlehNYf1KRzHHBcQOhR9mR+GLzVv4dUxqCegccIrZ9h6VOHd2McSP3K29RgIxr7KGS3U/wl5Zezkk6gNQ2Y1mN0HpB06c1epW73f0lvtp0zKnrtLhqfRct2vGhPzP1RDtW2WsgDUYyQQZ8ynNoZ0MDyz6cVYoOMZU7mHoqqFV9Mx4QPfh0wmQ6OP1V3cBzAU1JiNDegynOC4OH3zylAn4x5SiL7Qdfcpv5Mck9UtxAyn9ypm0wkLflhP7rCOQruogHonU6WkFSto8wntAS0Nuhh5pKUQkrTtn20FKGqBtZSNrLHbbVPLV1rF1plSILlH3CdTYAnKOMoJOGgKKq0HRS02qTcCei2od05MqPeOCIucqlV0osipaD13unOFH3g4ou+mCqlSyCitIrt3YUtB44Jv5VSMt4U72rhb3JTN0JrGuK7+XcFXjtG9OVHclzeKaRC538KNKSS6Fym8nVPp3zRqm1L5vBWn/i1QpyrAag/wCf5KalfEpylcRZ7cYTKNU6FVheKWk8lXGdml5pUjXhVgpGhXE1Ya5PBCrBykaFSUjgubqaQutS0NlCULspb6R7cSXN9JBswFPTSSWLZeppxSSTTTHqJuqSSQizTT3JJKiV6qrpJKKuEUgkkpUjKe1JJEFTUVLU0XUltOmWXYVcaqlVSSWd7a4qVRQsKSSS1uir1JJJBVZponb6LqS1xY5rDVIEklaHWKZJJXGdRlJdSSBKN6SSRxxJJJBv/9k="
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6SOp1H83BiFlux_V0qJ71PkIQobkoigC_2gIseirmapA4vV6"
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht9UfSoU60Y4SKA-68itMOhVGBtJIXLUbRBcPokQopyzwZdpA"
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxZA_CdhSVEDa3P3Zm8MKRgc6ySRAvcwg3fFkA8maViV8dwa1Dg"
        }
      ]
    };
  }
};
</script>

<style>
</style>
