import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition() {
            this.get('controller').set('mobileNavClass', '');
        }
    }
});
