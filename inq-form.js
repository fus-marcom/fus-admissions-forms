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
      studentTypeInput.value = 'transfer';
    } else {
      studentTypeInput.value = 'UG - Senior in HS';
    }
  });
});
