Todos.TodoController = Ember.ObjectController.extend({

  isCompleted: function(key, value) {
    var model = this.get('model');

    // Property being used as a getter
    if (value === undefined) {
      return model.get('isCompleted');
    }
    // Property being used as a setter
    else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});