import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    contactPhone() {
      $('#label').text("Office Phone");
      $("#info").text("+1 (999) 999 - 3422");
    },
    contactEmail() {
      $("#label").text("Office Email");
      $("#info").text("randomEmail@uwindsor.ca");
    }
  }
});
