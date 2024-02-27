import axios, { AxiosResponse } from 'axios'

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
      '/api/books'
    )
    return data.data
  }

  async postBookData(bookRequest: BookRequest) {
    await axios.post('/api/books', bookRequest)
  }

  async fetchBook(bookId: number) {
    const { data } = await axios.get<AxiosResponse<BookResponse>>(
      `/api/books/${bookId}`
    )
    return data.data
  }

  putBook(bookId: number, data: BookRequest) {
    axios.put(`/api/books/${bookId}`, data)
  }

  async deleteBook(bookId: number) {
    await axios.delete(`/api/books/${bookId}`)
  }
}