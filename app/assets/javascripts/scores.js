//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree ./common
//= require_tree ./scores

$(document).on('turbolinks:load', function() {
  Trigger(); // ./common/trigger.js
});
