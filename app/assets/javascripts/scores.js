//= require jquery
//= require jquery_ujs
//= require tether
//= require bootstrap
//= require turbolinks
//= require_tree ./common
//= require_tree ./scores

$(document).on('turbolinks:load', function() {
  Trigger(); // ./common/trigger.js
  $('[data-toggle="tooltip"]').tooltip();
});
