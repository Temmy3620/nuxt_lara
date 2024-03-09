import axios, { AxiosResponse } from 'axios'

export interface ThreadResponse {
    id: number
    created_at: string
    thread: string
}

export interface ThreadRequest {
    thread: string
}

export class ThreadService {
    
    async fetchThreads(): Promise<ThreadResponse[]> {
        const { data } = await axios.get<AxiosResponse<ThreadResponse[]>>(
        '/api/threads'
        )
        return data.data
    }

    async postThreadData(threadRequest: ThreadRequest) {
        await axios.post('/api/threads', threadRequest)
    }
    
}