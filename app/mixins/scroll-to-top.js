import Ember from 'ember';

export default Ember.Mixin.create({
    activate() {
        window.scrollTo(0,0);
    }
});
