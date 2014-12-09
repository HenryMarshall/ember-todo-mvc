Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    this.route('active');
    this.route('completed')
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
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  // The renderTemplate method lets us reuse the index template
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller})
  }
});

// This seems very not DRY...
Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller})
  }
});