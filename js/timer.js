// calculating time remaining
function getTimeRemaining(endtime) {
    'use strict';
    var t, seconds, minutes, hours, days;
	t = Date.parse(endtime) - Date.parse(new Date()); // creating a variable t to hold time remaining
	// Date.parse() converts a time string into a value in milliseconds
	// the remaining codes converts the time to seconds, min, hours, days
	seconds = Math.floor((t / 1000) % 60);
	minutes = Math.floor((t / 1000 / 60) % 60);
	hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}
		
function initializeClock(id, endtime) {
    'use strict';
    var clock, daysSpan, hoursSpan, minutesSpan, secondsSpan;
	clock = document.getElementById(id);
	daysSpan = clock.querySelector('.days');
	hoursSpan = clock.querySelector('.hours');
	minutesSpan = clock.querySelector('.minutes');
	secondsSpan = clock.querySelector('.seconds');
	
	function updateClock() {
		var t = getTimeRemaining(endtime);
	
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
	
		if (t.total <= 0) {
            clearInterval(timeinterval);
		}
	}
	
	var timeinterval = setInterval(updateClock, 1000);
}
	
var deadline = 'August 4 2018 23:59:59 GMT-06:00'; // setting a valid end date	
initializeClock('clockdiv', deadline);	
updateClock();