// This defines the Todo model
Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

// The following was deprecated when moving to localstorage_adapter.js and
// namespaced in application.js
  // This fixture is temporary and would be replaced with server data.
  // Todos.Todo.FIXTURES = [
  //   {
  //     id: 1,
  //     title: 'Learn Ember.js',
  //     isCompleted: true
  //   },

  //   {
  //     id: 2,
  //     title: '...',
  //     isCompleted: false
  //   },

  //   {
  //     id: 3,
  //     title: 'Profit!',
  //     isCompleted: false
  //   }
  // ]