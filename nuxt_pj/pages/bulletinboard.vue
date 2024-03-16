<template>
    
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="12">
        
        <v-virtual-scroll
          :item-height="120"
          :height="450"
          :items="threads"
          class="mt-10"
        >
        
          <template v-slot:default="{ item }">
            
            <v-banner
              single-line
            >
                <v-list-item two-line class="pl-0">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.thread }}</v-list-item-title>
                        <v-row>
                            <v-col
                            cols="auto"
                            class="d-flex align-end mr-auto"
                            >
                            <v-list-item-subtitle>
                                {{ moment(item.created_at).format('YYYY/MM/DD HH:mm:ss') }}
                            </v-list-item-subtitle>
                            </v-col>
                            <v-col cols="auto">
                            
                            <v-btn
                                icon
                                color="gray"
                                @click="onClickDelete(item.id)"
                            >
                                <v-icon>mdi-trash-can-outline</v-icon>
                            </v-btn>
                            

                            </v-col>
                        </v-row>
                        
                    </v-list-item-content>
                </v-list-item>
            </v-banner>
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
    import moment from 'moment'
    

    

    type Thread = ThreadResponse

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

    const comment = ref('')

    async function onClickAdd() {
        if(comment.value.trim().length == 0){
            return
        }
        await threadService.postThreadData({ thread: comment.value })
        console.log(comment.value)
        threads.value = await threadService.fetchThreads()
        comment.value = ""
    }

    async function onClickDelete(threadId: number) {
        if(confirm( $t("delete_confirm") )){
            await threadService.deleteThread(threadId)
            threads.value = await threadService.fetchThreads()
        }
        
    }

</script>




  