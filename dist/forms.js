'use strict';

jQuery(document).ready(function ($) {

  $('body').prepend('\n    <nav>\n     <div class="nav-wrapper">\n       <a href="#" class="brand-logo center"><img class="responsive-img" src="https://franciscan.university/img/side-nav-logo.jpg" /></a>\n     </div>\n    </nav>\n    ');

  //
  //Remove this before going live!!!!!
  $('.wFormTitle').html('Admissions Inquiry');
  //!!!!!!!!!!!!!!!!
  //

  $('head').append('<link rel="shortcut icon" href="https://franciscan.university/favicon.ico">');

  $('textarea, input[type="text"]').not('input[style="display:none;"]').attr('style', 'width: 100% !important');
  $('textarea').addClass('materialize-textarea');
  $('select').parent().addClass('field_select');
  $('select[multiple]').parent().addClass('multiple-select');
});