import axios, { AxiosResponse } from 'axios'
import { BACKEND_HOST } from './paramete'

//const backend_host: string = "http://localhost:8000"

export interface BookResponse {
  id: number
  title: string
  author: string
}

export interface BookRequest {
  title: string
  author: string
}

export class BookService {
  
  async fetchBooks(): Promise<BookResponse[]> {
    const { data } = await axios.get<AxiosResponse<BookResponse[]>>(
      BACKEND_HOST + '/api/books'
    )
    return data.data
  }
  

  async postBookData(bookRequest: BookRequest) {
    await axios.post(BACKEND_HOST + '/api/books', bookRequest)
  }

  
  async fetchBook(bookId: number) {
    const { data } = await axios.get<AxiosResponse<BookResponse>>(
      BACKEND_HOST + `/api/books/${bookId}`
    )
    return data.data
  }

  putBook(bookId: number, data: BookRequest) {
    axios.put( BACKEND_HOST + `/api/books/${bookId}`, data)
  }

  async deleteBook(bookId: number) {
    await axios.delete(BACKEND_HOST + `/api/books/${bookId}`)
  }
  
}