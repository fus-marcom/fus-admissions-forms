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

  $('textarea').attr('style', 'width: 100% !important');
  $('textarea').addClass('materialize-textarea');


});
