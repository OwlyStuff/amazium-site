import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Prototype');
    controller.set('headerCopy', 'Here you can see some of the things weve been playing around with that might one day be a part of Amazium\'s core.');
  },
});
