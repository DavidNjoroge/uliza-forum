import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true)
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        post: this.get('post')
      }
      this.set('addNewAnswer', false)
      this.sendAction('saveAnswer', params)
    }

  }
});
