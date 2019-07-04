// greeter-view-clock.js

export class greeterViewClock
{
	constructor(hourText, minText, secText)
	{
		this.lastHour = -1;
		this.lastMinute = -1;
		this.lastSecond = -1;

		this.hourText = hourText;
		this.minText = minText;
		this.secText = secText;
	}

	displayAll(newHour, newMinute, newSecond, force)
	{
		var updated = false;
		
		updated = updated || Boolean(this.displayHour(newHour, force));
		updated = updated || Boolean(this.displayMinute(newMinute, force));
		updated = updated || Boolean(this.displaySecond(newSecond, force));
		
		return updated;
	}

	displayHour(newHour, force)
	{
		var u = this.update(
			this.hourText,
			newHour,
			this.lastHour,
			force
		);
		
		if (u) { this.lastHour = newHour; }
		
		return u;
	}
	
	displayMinute(newMinute, force)
	{
		var u = this.update(
			this.minText,
			newMinute,
			this.lastMinute,
			force
		);
		
		if (u) { this.lastMinute = newMinute; }
		
		return u;
	}
	
	displaySecond(newSecond, force)
	{
		var u = this.update(
			this.secText,
			newSecond,
			this.lastSecond,
			force
		);
		
		if (u) { this.lastSecond = newSecond; }
		
		return u;
	}
	
	update(id, newVal, oldVal, force)
	{
		var u = (Boolean(oldVal !== newVal) && Boolean(force));
		
		if (u) { this.display(id, newVal); };
		
		return u;
	}

	display(id, val)
	{
		console.log(id);
		
		if (val < 10)
		{
			val = '0' + val;
		}
		document.getElementById(id).innerHTML = val;
	}
}
