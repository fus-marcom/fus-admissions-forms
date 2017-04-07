<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">

<link rel="stylesheet" href="https://jesserweigel.github.io/fus-admissions-forms/forms.css">

<!--
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
-->
<script src="https://franciscan.university/formagical.min.js"></script>

<script type="text/javascript">
  //Don't display on admin pages
if (window.location.pathname.search('form-builder') < 1 ) {
document.addEventListener("DOMContentLoaded", function(event) {
  var gradYearInput = document.getElementById('tfa_766');
  var studentTypeInput = document.getElementById('tfa_1216');
  var today = new Date();
  var currentYear = today.getFullYear();

    gradYearInput.type = 'number';
  document.getElementById('tfa_20').type = 'email';
  document.getElementById('tfa_84').type = 'number'; //Zip
  document.getElementById('tfa_375').type = 'tel';

  gradYearInput.addEventListener('input', function (e) {
    if (this.value < currentYear ) {
      studentTypeInput.value = 'U - Transfer';
    } else {
      studentTypeInput.value = 'U - Senior';
    }
  });
});
  jQuery( document ).ready(function( $ ) {

    $('body').prepend(`
    <nav>
     <div class="nav-wrapper">
       <a href="#" class="brand-logo center"><img class="responsive-img" src="https://franciscan.university/img/side-nav-logo.jpg" /></a>
     </div>
    </nav>
    `);

  $('head').append('<link rel="shortcut icon" href="https://franciscan.university/favicon.ico">');

  var formTitle = document.getElementById('tfa_0-T');
  var explainatoryText = document.createElement('p');
  explainatoryText.setAttribute('style', 'margin-top: -20px; margin-bottom: 24px;');
  explainatoryText.setAttribute('class', 'flow-text');
  explainatoryText.textContent = 'Please tell us a little about yourself so we can customize your inquiry experience.';

  $(formTitle).html('Admissions Inquiry');
  formTitle.parentNode.insertBefore(explainatoryText, formTitle.nextSibling);

        // Add title tag
  $('head').append('<title>' + $('.wFormTitle').text() + ' | Franciscan University of Steubenville</title>');

  $('textarea, input[type="text"]').not('input[style="display:none;"]').attr('style', 'width: 100% !important');
  $('textarea').addClass('materialize-textarea');
  $('select').parent().addClass('field_select');
          $('select[multiple]').parent().addClass('multiple-select');

});


  var metaViewport = document.createElement("meta");
  metaViewport.setAttribute('content', 'width=device-width,initial-scale=1');
  metaViewport.setAttribute('name', 'viewport');

  document.head.appendChild(metaViewport);


  //Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-5819863-15', 'auto');
  ga('send', 'pageview');

  //Formagical Init
  $(function() {
  $('#tfa_0').formagical();
  });
} else {
  document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('code-tfa_0').remove();
  });

}

</script>
