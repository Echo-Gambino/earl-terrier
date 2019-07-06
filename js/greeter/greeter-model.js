// greeter-model.js 
//
// Description:
//   This file is the MODEL portion of greeter's MVC model.
//
// Purpose:
//   Model stores items and notifies observers about changes
//   Contains all the data (data structures, internal models, etc)
//   Contains the functions called CRUD tasks.
//     * Create
//     * Read
//     * Update
//     * Delete
//   Computation (should?) be done on this section 
// OR use a seperate file to handle it as utility function
//

// Outline:
// greeterModel
//   increment <-- (general purpose, automatic incrementation of all values)
//
//   incrementSecond
//   incrementMinute
//   incrementHour
//
//   getSecond
//   getMinute
//   getHour
//
//   setSecond
//   setMinute
//   setHour
//

import { greeterModelMessage } from './greeter-model-message.js';

function modulo(x, mod)
{
	if (x >= mod)
	{
		x = x - mod;
	}

	return x;
}

function readFile(file) 
{
	var text = "";

	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if (rawFile.readyState === 4)
		{
			if (rawFile.status === 200 || rawFile.status === 0)
			{
				text = rawFile.responseText;
			}
		}
	
	}
	rawFile.send(null);

	return text;
}

function isString(variable)
{
	var typeIsString;

	typeIsString = Boolean(typeof variable === 'string' || variable instanceof String)

	return typeIsString;
}

export class greeterModel
{
	constructor(modelMessage)
	{
		this.mMessage = modelMessage;

		this.date = new Date();

		this.hour = 0;
		this.minute = 0;
		this.second = 0;

		this.hour = this.date.getHours();
		this.minute = this.date.getMinutes();
		this.second = this.date.getSeconds();

		this.username = "User";
	}

	increment()
	{
		this.incrementSecond();
		if (this.second == 0)
		{
			this.incrementMinute();
			if (this.minute == 0)
			{
				this.incrementHour();
			}
		}
	}

	incrementHour()
	{
		this.hour = modulo((this.hour + 1), 60);
	}

	incrementMinute()
	{
		this.minute = modulo((this.minute + 1), 60);
	}

	incrementSecond()
	{
		this.second = modulo((this.second + 1), 60);
	}

	tryLoadUsername()
	{
		var text = readFile("./config/config.txt");

		var username = this.mMessage.getUsernameFromText(text);

		if (!isString(username))
		{
			return false;
		}

		this.mMessage.setUsername(username);

		return true;
	}

	getHour()
	{
		return this.hour;
	}
	
	getMinute()
	{
		return this.minute;
	}

	getSecond()
	{
		return this.second;
	}

	getUsername()
	{
		return this.mMessage.getUsername();
	}

	setHour(hour)
	{
		this.hour = hour;
	}

	setMinute(minute)
	{
		this.minute = minute;
	}

	setSecond(second)
	{
		this.second = second;
	}

	setUsername(username)
	{
		this.mMessage.setUsername(username);
	}

}




