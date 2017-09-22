import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params) {
      this.sendAction('update', post, params)

    },
    delete(post) {
      if (confirm('are you sure you want to delete the post')) {
        this.sendAction('destroyPost', post)
      }
    }
  }
});
