import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('advertise');
  this.route('apps');
  this.route('labs');
  this.route('privacy');
});

export default Router;
