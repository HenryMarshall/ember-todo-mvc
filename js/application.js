window.Todos = Ember.Application.create();

// Deprecated when switched to using local-storage aware adapter
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
