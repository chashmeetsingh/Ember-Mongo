import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  isShowing: false,
  actions: {
    toggleLogo() {
      if (!this.get('isShowing')) {
        $('#uwin-img').show();
        this.set('isShowing', true);
        $('#toggleButton').text("Hide Logo");
      } else {
        $('#uwin-img').hide();
        this.set('isShowing', false);
        $('#toggleButton').text("Show Logo");
      }
    }
  }
});
