
jQuery( document ).ready(function( $ ) {

  $('body').prepend(`
    <nav>
     <div class="nav-wrapper">
       <a href="#" class="brand-logo center"><img class="responsive-img" src="https://franciscan.university/img/side-nav-logo.jpg" /></a>
     </div>
    </nav>
    `);

  //
  //Remove this before going live!!!!!
  $('.wFormTitle').html('Admissions Inquiry');
  //!!!!!!!!!!!!!!!!
  //

  $('head').append('<link rel="shortcut icon" href="https://franciscan.university/favicon.ico">');

  $('textarea, input[type="text"]').not('input[style="display:none;"]').attr('style', 'width: 100% !important');
  $('textarea').addClass('materialize-textarea');
  $('select').parent().addClass('field_select');


});
