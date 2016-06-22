import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'The Amazium Grid');
    controller.set('headerCopy', 'With Amaziums default 12-column responsive layout you can create almost any layout you can think of.');
  },
});
