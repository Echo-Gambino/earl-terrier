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

function modulo(x, mod)
{
	if (x >= mod)
	{
		x = x - mod;
	}

	return x;
}

export class greeterModel
{
	constructor()
	{
		this.date = new Date();

		this.hour = 0;
		this.minute = 0;
		this.second = 0;

		this.hour = this.date.getHours();
		this.minute = this.date.getMinutes();
		this.second = this.date.getSeconds();
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

}




