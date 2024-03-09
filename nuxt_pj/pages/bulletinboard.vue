<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        
        <!--
        <v-virtual-scroll
          :item-height="150"
          :height="450"
          :items="['1', '2', '3', '4', '5亞jsDCんかjssdvnlskdvlakdvlkdmvlkmvbksdblvsdmblskd', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']"
          class="mt-10"
        >
        -->
        
        
        <v-virtual-scroll
          :item-height="150"
          :height="450"
          :items="threads"
          class="mt-10"
        >
        
          <template v-slot:default="{ item }">
            <v-card>
                
                <v-card-text>
                        <!--<div>user</div>-->
                        <p class="text-h6 text--primary">
                          {{ item.thread }}
                        </p>
                        <div>{{ item.created_at }}</div>
                </v-card-text>

                
            </v-card>
          </template>
        </v-virtual-scroll>

        
            <v-form
                ref="form"
                class="mt-15"
                lazy-validation
                >
                
                    <v-row>
                        <v-col
                        cols="11"
                        >
                            <v-textarea
                            v-model="comment"
                            outlined
                            name="input-7-4"
                            label="Comment...."
                            rows="2"
                            auto-grow
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
                                @click="onClickAdd"
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

<script setup lang="ts">
    import Vue,{ ref } from 'vue'
    import { ThreadService, ThreadResponse } from '@/service/thread'

    type Thread = ThreadResponse

    
    
    //type threadService = ThreadService
    const threadService = new ThreadService()
    const threads = ref<Thread[]>([]);
    
    async function asyncData()
    {
        const data = await threadService.fetchThreads()
        console.log(data)
        threads.value = data
        //list.value = threads
        return {
            threads,
        }
    }
    asyncData()
        

    
    //console.log(list)
    //const threads = threadService.fetchThreads()
    //console.log(threads)


    const comment = ref('')

    async function onClickAdd() {

        await threadService.postThreadData({ thread: comment.value })
        console.log(comment.value)
        threads.value = await threadService.fetchThreads()
        comment.value = ""
    }

</script>




  