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
    console.log('run replaceTickets');

    function addTableClasses() {
      $('.resultTable').addClass('responsive-table striped');
    }
    addTableClasses();

    function checkForTickets()
    {
        if($('.ticketPane').length > 0) {
          console.log('ticketPane exists');
          replaceTickets();
        } else {
          console.log('checking');
          setTimeout( checkForTickets, 100 );
        }
    }

    let $inputArrMinus = $('input.ticketButtons-lt');
    let $inputArrPlus = $('input.ticketButtons-rt');

    //Make a loop or map to add correct for attr to labels
    $inputArrPlus.map(function(i, ticketInput) {
      let ticketName = $(ticketInput).attr('name');
      let ticketMinusName = $(ticketInput).prev().prev().attr('name');

      if (ticketMinusName !== undefined) {
        $(ticketInput).after(`<input class="ticket-box" type="checkbox" name="ticket-box-${i}" checked="checked"/><label class="ticket-box-label" for="ticket-box-${i}" ticket-plus-name=${ticketName} />`);
      } else {
          $(ticketInput).after(`<input class="ticket-box" type="checkbox" name="ticket-box-${i}"/><label class="ticket-box-label" for="ticket-box-${i}" ticket-plus-name=${ticketName} ticket-minus-name=${ticketMinusName} />`);
      }
    });

    //Hide default ticket icons
    $inputArrPlus.prev().prev().hide();
    $inputArrPlus.prev().remove();
    $('.ticketPane').remove();
    $inputArrPlus.hide();


    $('.ticket-box-label').click(function() {
      //remove check
      let boxName = $(this).attr('for');
      let box = $(`input[name="${boxName}"]`);
      if ($(box).attr('checked') === true) {
        $(box).attr('checked', '');
        //Click minus icon
        let minusIcon = $(box).prev().prev();
        $('.ticketPane').remove();
        checkForTickets();
        console.log(minusIcon);
        $(minusIcon).click();

      } else {
        $(box).attr('checked', 'checked');
        //Click plus icon
        let plusIcon = $(`[name="${$(this).attr('ticket-plus-name')}"]`);
        $('.ticketPane').remove();
        checkForTickets();
        $(plusIcon).click();

      }

    });
  })();

});
