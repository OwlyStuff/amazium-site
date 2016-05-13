import Ember from 'ember';
import ScrollToTop from '../mixins/scroll-to-top';

export default Ember.Route.extend(ScrollToTop, {
  setupController(controller) {
    controller.set('headerTitle', 'Owly Slider');
    controller.set('headerCopy', 'This awesome slideshow was made by <a href="https://github.com/shahrukhomar">Shahrukh Omar</a> and is so simple it hurts. Just remeber to include the owly-slider.js file to your webpage and the stylesheet owly-slider.css.');
  },
});
