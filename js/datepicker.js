	(function ($) {
	"use strict";

	/**
    * Datepicker and Timepicker
    */

	$(function() {
		$('#date').datepicker({
			dateFormat : 'yy-mm-dd',
			minDate: 0,
			showOtherMonths: true,
			selectOtherMonths: true
		});

		$('#time').timepicker({
			'minTime': '5:00pm',
			'maxTime': '11:30pm',
		});
	});


}(jQuery));