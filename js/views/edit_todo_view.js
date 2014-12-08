// This creates an auto-focusing TextField.
Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

// This registers our extension as a Handlebars helper.
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);