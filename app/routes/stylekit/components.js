import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Components');
    controller.set('headerCopy', 'Simple styling on some of the less used elements of a website have been taken into consideration like tables and message blocks.');
  },
});
