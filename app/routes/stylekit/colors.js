import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Colors');
    controller.set('headerCopy', 'Amazium comes with a collection of colors form Positive to Negative colors.');
  },
});
