$(document).ready(function() {
    $("#date_of_birth").datepicker({ dateFormat: "dd-mm-yy", changeYear: true, yearRange: "1900", changeMonth: true });
	$("#date_of_admission").datepicker({ dateFormat: "yy-mm-dd", changeYear: true, yearRange: "1900", changeMonth: true });
	$("#filter_date_from").datepicker({ dateFormat: "yy-mm-dd", changeYear: true, yearRange: "1900", changeMonth: true });
	$("#filter_date_to").datepicker({ dateFormat: "yy-mm-dd", changeYear: true, yearRange: "1900", changeMonth: true });
   // $("#returning").datepicker();
});