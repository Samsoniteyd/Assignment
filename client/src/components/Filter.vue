<template>
    <div>
      <input v-model="filterText" type="text" placeholder="Filter">
      <ul>
        <li v-for="item in filteredList" :key="(link unavailable)">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dataList: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, ...],
        filterText: ''
      }
    },
    computed: {
      filteredList() {
        return this.dataList.filter(item => item.name.includes(this.filterText))
      }
    }
  }
  </script>