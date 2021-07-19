Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove when Complete </button>\
      </li>\
    ',
    props: ['title']
  })
  
  new Vue({
    el: '#todo-list',
    data: {
      newTodoText: '',
      todos: [],
      nextTodoId: 1
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
