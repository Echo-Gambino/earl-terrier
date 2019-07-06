// greeter-model-message.js

function readLine(text, startIndex)
{
	if (startIndex >= text.length) 
	{
		throw new "(startIndex >= text.length) "
			+ "IN <function> readLine(...)";
	}

	var line = "";
	var index = startIndex;

	for (index = 0; index < text.length; index++)
	{
		if (text[index] === "\n") {break;}

		line += text[index];
	}

	return line;
}


function parseForUsername(text)
{
	// current convention of username is to be in the first line of the whole text
	var firstLine = readLine(text, 0);

	return firstLine;
}

function isString(variable)
{
	var typeIsString;

	typeIsString = Boolean(typeof variable === 'string' || variable instanceof String)

	return typeIsString;
}

export class greeterModelMessage
{
	constructor()
	{
		this.DEFAULT_NAME = "User";

		this.username = this.DEFAULT_NAME;
	}

	getUsernameFromText(text)
	{
		var username = parseForUsername(text);

		return username;
	}

	getUsername()
	{
		return this.username;
	}

	setUsername(username)
	{
		if (!isString(username))
		{
			throw new "(username not String) "
				+ "IN if (!isString(username)) {...} "
				+ "<- <function> getUsernmeFromText(...)"
				+ "<- <class> greeterModelMessage(...)";
		}

		this.username = username;
	}

}

