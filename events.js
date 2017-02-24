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

    $('head').append('<link rel="shortcut icon" href="https://franciscan.university/favicon.ico">');


  // Add class to identify pages
  const pageTitle=  $('h1').text();

  if (pageTitle === 'Event Search Results') {
    $('html').addClass('event-results');
  }

  if (pageTitle === 'Event Details and Attendees') {
    $('html').addClass('event-details');
    $('h3').parent().addClass('event-date-container');
    $('select').wrap('<div class="field_select">');
    $('.cancelBtn').parent().attr('style', 'float: right');
    $('form').eq(1).hide();
  }

  $('h1').addClass('page-title-heading');

  //fix width for event results title heading
  $('h1').parent().css('width', '100%');

  $('h1').parent().next().next().next().css({'max-width': '70%', 'margin': '16px auto' });

  $('.event-results .resultsHeader:nth-of-type(4)>div').html('Attending');

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

  function switchArrowImagesToFontIcons () {
    let $imgArrowIconsArr = $('.parentArrow');

    //Make a loop or map to add correct for attr to labels
    $imgArrowIconsArr.map(function(i, imgArrowIcon) {
      let onClickVal = $(imgArrowIcon).attr('onClick');
      let imgClasses = $(imgArrowIcon).attr('class');
      let imgSrc = $(imgArrowIcon).attr('src');
      let isOpen = false;
      if (imgSrc.indexOf('open') > 0) {
        isOpen = true;
      }

      let iconName = isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_right';

      $(imgArrowIcon).hide();

      $(imgArrowIcon).after(`<i id="arrow-icon-${i}" class="material-icons ${imgClasses}" onclick="toggleArrow('arrow-icon-${i}'); ${onClickVal}">${iconName}</i>`);
    });
  }


  switchArrowImagesToFontIcons();



  $('.finalButton').next().attr('style', 'box-shadow: none;');


});

function toggleArrow (id) {
  let thisIcon = $('#' + id);
  if ($(thisIcon).text() === 'keyboard_arrow_right') {
    $(thisIcon).text('keyboard_arrow_down');
  } else {
    $(thisIcon).text('keyboard_arrow_right');
  }
}
