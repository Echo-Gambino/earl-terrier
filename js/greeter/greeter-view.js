// greeter-view.js
//
// Description:
//   This file is the VIEW portion of greeter's MVC model
//
// Purpose:
//   Presents the MODEL and provides the UI events.
//   The CONTROLLER is attached to these events to
// handle the user interaction.
//   Displays and represents data or the interface to the web app
//   Completes its task by requesting data by the MODEL portion to
// be and determines how to display it.
//   Should almost NEVER perform computation or any manipulation of
// data in this section, all computation should be done within MODEL
//


// Outline:
// greeterView
//   displaysHour
//   displaysMinute
//   displaySecond


export class greeterView
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
		// console.log("--------\n");
		// console.log(newHour + '\n');
		// console.log(newMinute + '\n');
		// console.log(newSecond + '\n');
		this.displayHour(newHour, force);
		this.displayMinute(newMinute, force);
		this.displaySecond(newSecond, force);
	}

	displayHour(newHour, force)
	{
		var u = this.update(
			this.hourText,
			newHour,
			this.lastHour,
			force
		);

		if (u)
		{
			this.lastHour = newHour;
		}
	}

	displayMinute(newMinute, force)
	{
		var u = this.update(
			this.minText,
			newMinute,
			this.lastMinute,
			force
		);

		if (u)
		{
			this.lastMinute = newMinute;
		}
	}

	displaySecond(newSecond, force)
	{
		var u = this.update(
			this.secText,
			newSecond,
			this.lastSecond,
			force
		);

		if (u)
		{
			this.lastSecond = newSecond;
		}
	}

	update(id, newVal, oldVal, force)
	{
		var u = (Boolean(oldVal !== newVal) && Boolean(force));

		if (u)
		{
			this.display(id, newVal);
		}

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


