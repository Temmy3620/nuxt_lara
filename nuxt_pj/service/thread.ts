import axios, { AxiosResponse } from 'axios'
import { BACKEND_HOST } from './paramete'

//const backend_host: string = "http://localhost:8000"

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
            BACKEND_HOST + '/api/threads'
        )
        return data.data
    }

    async postThreadData(threadRequest: ThreadRequest) {
        await axios.post(BACKEND_HOST + '/api/threads', threadRequest)
    }
    
}