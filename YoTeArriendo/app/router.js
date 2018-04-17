import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route-inicio', {path: '/inicio'});
  this.route('route-tours', {path: '/tours'});
  this.route('route-hotel', {path: '/hotels'});
  this.route('route-cities', {path: '/cities'});
  this.route('route-countries', {path:'/countries'});
  this.route('route-profile', {path:'/profile'});
});

export default Router;
