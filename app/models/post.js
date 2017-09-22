import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  question: DS.attr(),
  author: DS.attr(),
  content: DS.attr()

});
