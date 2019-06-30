// greeter-controller.js
// 
// Description:
//   This file is the CONTROLLER portion of greeter's MVC model.
// 
// Purpose:
//   Handles events that occurs within the web app.
//   Completes actions by calling functions to its
// VIEW and/or MODEL counterparts to perform an action.
//

export class GreeterController
{
	constructor()
	{
	}

	static print(id, val)
	{
		if (val < 10)
		{
			val = '0' + val;
		}
		document.getElementById(id).innerHTML = val;
	}

	getNine()
	{
		return 9;
	}

}

export function gc()
{
	var g = new GreeterController();
	return g;
}

export function gx()
{
	return 8;
}

