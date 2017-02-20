console.log('w007!!!1');

// Use jQuery here
jQuery( document ).ready(function( $ ) {
  $('link[href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/smoothness/jquery-ui.css"]').appendTo('head');

  $('link[href="https://jesserweigel.github.io/fus-admissions-forms/events.css"]').appendTo('head');

  $('body').prepend(`
    <nav>
     <div class="nav-wrapper">
       <a href="#" class="brand-logo center"><img class="responsive-img" src="https://franciscan.university/img/side-nav-logo.jpg" /></a>
     </div>
    </nav>
    `);

  $('.resultTable').addClass('responsive-table striped');

  // Add class to identify pages
  const pageTitle=  $('h1').text();

  if (pageTitle === 'Event Search Results') {
    $('html').addClass('event-results');
  }

  $('input.ticketButtons-lt').next().next().hide();
  $('input.ticketButtons-lt').next().hide();
  $('input.ticketButtons-lt').after('<input class="ticket-box" type="checkbox" />');
  $('.ticket-box').after('<label />');
  //Make a loop or map to add correct for attr to labels

});
