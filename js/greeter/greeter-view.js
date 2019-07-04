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
import { greeterViewClock } from './greeter-view-clock.js';

export class greeterView
{
	constructor(clock, message)
	{
		this.clock = clock;
		this.message = message;
	}
	
	displayAll(newHour, newMinute, newSecond, force)
	{
		var updatedHr = this.displayHour(newHour, force);
		var updatedMn = this.displayMinute(newMinute, force);
		var updatedSc = this.displaySecond(newSecond, force);
		
		if (updatedHr) this.updateViewMessage(newHour);
		
		return (updatedHr || updatedMn || updatedSc);
	}

	displayHour(newHour, force)
	{
		return this.clock.displayHour(newHour, force);
	}

	displayMinute(newMinute, force)
	{
		return this.clock.displayMinute(newMinute, force);
	}

	displaySecond(newSecond, force)
	{
		return this.clock.displaySecond(newSecond, force);
	}
	
	updateViewMessage(hour)
	{
		var numHour = parseInt(hour, 10);
		
		if (this.isMorning(numHour))
		{
			this.message.setTimeMorning();
		}
		else if (this.isAfternoon(numHour))
		{
			this.message.setTimeAfternoon();
		}
		else if (this.isEvening(numHour))
		{
			this.message.setTimeEvening();
		}
	}
	
	isMorning(hour)
	{
		var bool = Boolean((3 <= hour) && (hour <= 11));
		return bool;
	}
	
	isAfternoon(hour)
	{
		var bool = Boolean((12 <= hour) && (hour <= 16));
		return bool;
	}
	
	isEvening(hour)
	{
		var bool = Boolean((17 <= hour) && (hour <= 24)) || Boolean((0 <= hour) && (hour <= 2));
		return bool;
	}
	
}


