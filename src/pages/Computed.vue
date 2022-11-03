<template>
    <p>책을 가지고 있다:</p>
    <span>{{ publishedBooksMessage }}</span>
</template>

<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // 계산된 값을 반환하는 속성
    publishedBooksMessage() {
      // `this`는 컴포넌트 인스턴스를 가리킴
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}
</script>