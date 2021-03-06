import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true)
    },
    savePost() {
      var params = {
        question: this.get('question') ? this.get('question') : "",
        author: this.get('author')
      }
      this.set('addNewPost', false)
      this.sendAction('savePost', params)
    }
  }
});
