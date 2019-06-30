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
	// A constructor for the given class,
	// Automatically executes when "new <class>" is called
	constructor()
	{
	}

	// This ABSOLUTELY needs to be called as
	// GreeterController.print(...);
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

export function gx()
{
	return 8;
}

