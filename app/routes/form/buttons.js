import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Buttons');
    controller.set('headerCopy', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
  },
});
