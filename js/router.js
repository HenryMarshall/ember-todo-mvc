Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

// This lets us iterate over {{#each todo in model}}
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
