<template>
    <div>
      <h2>{{ $t("list") }}</h2>
      <ul v-for="(book, i) in books" :key="i">
        <li>{{ book.title }}</li>
        <nuxt-link :to="{ name: 'book-detail-id', params: { id: book.id } }"
          ><button>詳細</button>
        </nuxt-link>
        <button @click="onClickDelete(book.id)">削除</button>
      </ul>
      
      <h3>新規追加</h3>
      <input v-model="form.title" type="text" placeholder="title" /><br />
      <input v-model="form.author" type="text" placeholder="author" /><br />
      <button @click="onClickAdd">追加</button>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import { BookService, BookResponse } from '@/service/book'
  //import { BookService } from '@/service/book'
  
  interface Form {
    title: string
    author: string
  }
  
  type Book = BookResponse

  const bookService = new BookService()
  
  interface DataType {
    form: Form
    books: Book[]
  }
  
  export default Vue.extend({
    async asyncData() {
      const books = await bookService.fetchBooks()
      console.log(books)
      return {
        books,
      }
    },
    data(): DataType {
      return {
        form: { title: '', author: '' },
        books: [],
      }
    },
    methods: {
      async onClickAdd() {
        await bookService.postBookData({ ...this.form })
        this.books = await bookService.fetchBooks()
        this.form = { title: '', author: '' }
      },
      async onClickDelete(bookId: number) {
        await bookService.deleteBook(bookId)
        this.books = await bookService.fetchBooks()
      },
    },
  })
  </script>