import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Styled Links, Inputs & Buttons');
    controller.set('headerCopy', 'These are the most traditional element for actions on a website and just like everything else Amazium have created simple styles for all your needs.');
  },
});
