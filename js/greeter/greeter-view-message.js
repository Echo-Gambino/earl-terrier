// greeter-view-message.js

export class greeterViewMessage
{
	constructor(timeText, nameText)
	{
		this.timeText = timeText;
		this.nameText = nameText;
		
		this.morningMsg = "Good Morning";
		this.afternoonMsg = "Good Afternoon";
		this.eveningMsg = "Good Evening";
	}
	
	setTimeMorning()
	{
		document.getElementById(this.timeText).innerHTML = this.morningMsg;
	}
	
	setTimeAfternoon()
	{
		document.getElementById(this.timeText).innerHTML = this.afternoonMsg;
	}
	
	setTimeEvening()
	{
		document.getElementById(this.timeText).innerHTML = this.eveningMsg;
	}
	
	setTimeCustom(time)
	{
		document.getElementById(this.timeText).innerHTML = time;
	}
	
	setName(username)
	{
		document.getElementById(this.nameText).innerHTML = username;
	}
	
	
}
