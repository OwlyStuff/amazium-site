import Ember from 'ember';

export default Ember.Controller.extend({
    mobileNavClass: '',

    actions: {
        toggleMobileNav: function() {
            if (this.get('mobileNavClass') === '') {
                this.set('mobileNavClass', 'menu_open');
            } else {
                this.set('mobileNavClass', '');
            }
        }
    }
});
