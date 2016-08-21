import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
       const id = params.id;
       const store = this.get('store');
       return store.getOrdersById(id);
    },

    store: Ember.inject.service('store')
});

