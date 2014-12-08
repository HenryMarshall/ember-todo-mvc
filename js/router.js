Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    // Additional child routes will go here later
  });
});

// This lets us iterate over {{#each todo in model}}
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
})