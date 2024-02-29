<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        
        <v-virtual-scroll
          :item-height="100"
          :height="600"
          :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
        >
          <template v-slot:default="{ item }">
            <v-card class="mb-3">
                <v-card-text>
                  <p>
                    Item {{ item }}
                  </p>
                </v-card-text>
            </v-card>
          </template>
        </v-virtual-scroll>

        <v-col cols="12" sm="11" md="11" class="mt-10 mb-10"></v-col>

        <v-card class="fixed-card">
            <v-container>
                <v-row>

                    

                    
                  
                </v-row>
            </v-container>
        </v-card>
      </v-col>
      
      
    </v-row>
</template>

<script>
  export default {
    name: 'BulletinBoardPage',
    
  }
</script>

<style scoped>
.fixed-card {
  position: absolute;
  bottom: calc(0px); /* ウィンドウの縦方向の中央から100px上に配置 */
  left: calc(0px); /* ウィンドウの横方向の中央から150px左に配置 */
  width: 100vw; /* 幅を指定 */
  height: 150px;
  z-index: 80;
}
</style>


  