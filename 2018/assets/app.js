	(function() {

		if (window.addtocalendar)
			if (typeof window.addtocalendar.start == "function") return;
		if (window.ifaddtocalendar == undefined) {
			window.ifaddtocalendar = 1;
			var d = document,
				s = d.createElement('script'),
				g = 'getElementsByTagName';
			s.type = 'text/javascript';
			s.charset = 'UTF-8';
			s.async = true;
			s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://addtocalendar.com/atc/1.5/atc.min.js';
			var h = d[g]('body')[0];
			h.appendChild(s);
		}

		let countdown = document.getElementById('knb-countdown');
		let clock = {
			days: {
				tens: countdown.querySelector("span.days span.tens"),
				ones: countdown.querySelector("span.days span.ones")
			},
			hours: {
				tens: countdown.querySelector("span.hours span.tens"),
				ones: countdown.querySelector("span.hours span.ones")
			},
			minutes: {
				tens: countdown.querySelector("span.minutes span.tens"),
				ones: countdown.querySelector("span.minutes span.ones")
			},
			seconds: {
				tens: countdown.querySelector("span.seconds span.tens"),
				ones: countdown.querySelector("span.seconds span.ones")
			}
		};
		let secondsLeft = Math.floor((new Date("November 17, 2019 18:00:00")).getTime() / 1000) - Math.floor((new Date()).getTime() / 1000);

		setInterval(function() {
			secondsLeft = secondsLeft > 1 ? secondsLeft - 1 : 0;

			let day = Math.floor(secondsLeft / (60 * 60 * 24));
			let dayString = day.toString().split('');
			clock.days.ones.innerText = dayString.pop();
			clock.days.tens.innerText = dayString.pop();

			let hour = (Math.floor((secondsLeft % 24) / (60 * 60)));
			let hourString = hour.toString().split('');
			clock.hours.ones.innerText = hourString.pop();
			clock.hours.tens.innerText = hourString.pop() || '0';

			let minute = (Math.floor((secondsLeft % (60 * 24)) / (60)));
			let minuteString = minute.toString().split('');
			clock.minutes.ones.innerText = minuteString.pop();
			clock.minutes.tens.innerText = minuteString.pop() || '0';

			let second = (Math.floor((secondsLeft) % (60)));
			let secondString = second.toString().split('');
			clock.seconds.ones.innerText = secondString.pop();
			clock.seconds.tens.innerText = secondString.pop() || '0';
		}, 1000);

	})();
