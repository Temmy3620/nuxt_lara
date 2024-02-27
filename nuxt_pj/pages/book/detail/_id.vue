<template>
    <div>
      <h2>詳細</h2>
      <input v-model="book.title" type="text" />
      <input v-model="book.author" type="text" />
      <button @click="onClickEdit">修正</button>
      <nuxt-link :to="{ name: 'index' }"><p>Book List</p></nuxt-link>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import { BookService, BookResponse } from '@/service/book'
  
  type Book = BookResponse

  const bookService = new BookService();
  
  interface DataType {
    book: Book
  }
  
  export default Vue.extend({
    async asyncData({ route }) {
      const bookId = Number(route.params.id)
      const book = await bookService.fetchBook(bookId)
      return {
        book,
      }
    },
    data(): DataType {
      return {
        book: {
          id: 0,
          title: '',
          author: '',
        },
      }
    },
    methods: {
       onClickEdit() {
        const bookId = Number(this.$route.params.id)
        bookService.putBook(bookId, this.book)
        this.$router.push({ name: 'index' })
      }
    }
  })
  </script>