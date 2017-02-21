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




  // Add class to identify pages
  const pageTitle=  $('h1').text();

  if (pageTitle === 'Event Search Results') {
    $('html').addClass('event-results');
  }

  ( function replaceTickets() {
    ( function addTableClasses() {
      $('.resultTable').addClass('responsive-table striped');
    })();

    function checkForTickets()
    {
        if($('.ticketPane')) {
          replaceTickets();
        } else {
          setTimeout( checkDOMChange, 100 );
        }
    }

    let $inputArrMinus = $('input.ticketButtons-lt');
    let $inputArrPlus = $('input.ticketButtons-rt');

    //Make a loop or map to add correct for attr to labels
    $inputArrPlus.map(function(i, ticketInput) {
      let ticketName = $(ticketInput).attr('name');
      let ticketMinusName = $(ticketInput).prev().prev().attr('name');
      $(ticketInput).after(`<input class="ticket-box" type="checkbox" name="ticket-box-${i}"/><label class="ticket-box-label" for="ticket-box-${i}" ticket-plus-name=${ticketName} ticket-minus-name=${ticketMinusName} />`);
    });

    //Hide default ticket icons
    $inputArrPlus.prev().prev().hide();
    $inputArrPlus.prev().remove();
    $inputArrPlus.hide();


    $('.ticket-box-label').click(function() {
      //remove check
      let boxName = $(this).attr('for');
      let box = $(`input[name="${boxName}"]`);
      if ($(box).attr('checked') === true) {
        $(box).attr('checked', '');
        //Click minus icon
        let minusIcon = $(`[name="${$(this).attr('ticket-minus-name')}"]`);
        $(minusIcon).click();
        checkForTickets();
      } else {
        $(box).attr('checked', 'checked');
        //Click plus icon
        let plusIcon = $(`[name="${$(this).attr('ticket-plus-name')}"]`);
        $(plusIcon).click();
        checkForTickets();
      }

    });
  })();

});
