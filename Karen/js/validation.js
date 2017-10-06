$(document).ready(function() {
    $('#campo').keyup(function() {
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
});


$(document).ready(function() {
    $('#valor_1').keyup(function() {
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
});


$(function () {
               $('#datepicker').datepicker({
                 format: "yyyy",
     startView: "year",
     minViewMode: "year",
     minDate: 0
          });
           });
