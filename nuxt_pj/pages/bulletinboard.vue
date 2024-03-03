<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        
        <v-virtual-scroll
          :item-height="100"
          :height="450"
          :items="['1', '2', '3', '4', '5亞jsDCんかjssdvnlskdvlakdvlkdmvlkmvbksdblvsdmblskd', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
          class="mt-10"
        >
          <template v-slot:default="{ item }">
            <v-card>
                
                <v-card-text>
                    <p>Item {{ item }}</p>
                </v-card-text>
                
            </v-card>
          </template>
        </v-virtual-scroll>

        
            <v-form
                ref="form"
                class="mt-15"
                v-model="valid"
                lazy-validation
                >
                
                    <v-row>
                        <v-col
                        cols="11"
                        >
                            <v-textarea
                            outlined
                            name="input-7-4"
                            label="Comment...."
                            rows="2"
                            auto-grow
                            class="w-50"
                            >
                        
                            </v-textarea>
                        </v-col>

                        <v-col
                        cols="1"
                        >
                            <v-btn
                                class="mx-2"
                                fab
                                color="teal"
                            >
                                <v-icon>
                                    mdi-comment-processing-outline
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                
                
            </v-form>
                
         

      </v-col>
      
      
    </v-row>
</template>

<script>
  export default {
    name: 'BulletinBoardPage',
    
  }
</script>




  