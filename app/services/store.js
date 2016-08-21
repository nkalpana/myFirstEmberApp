import Ember from 'ember';

export default Ember.Service.extend({

    getOrderById(id) {
      const orders = this.getOrders();
      return orders.findBy('id', id);
    }, 
    getOrders() {
       return [{ id: 1, first_name: "Kalpana", last_name: "Natarajan"},
               { id: 2, first_name: "Anand", last_name: "Natraj"},
               { id: 3, first_name: "Pakku", last_name: "Gowda"},
               { id: 4, first_name: "Deepti", last_name: "Umarani"},
               { id: 5, first_name: "Miku",  last_name: "Abhijit"}, 
               { id: 6, first_name: "Abhijit", last_name: "Bhaiya"} ];
    }
});
