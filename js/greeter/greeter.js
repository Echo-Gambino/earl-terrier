import { gx, GreeterController } from './greeter-controller.js';

function init()
{
	var y = gx();

	var g = new GreeterController();
	y = g.getNine();

	printx('mn', y);
}

function printx(id, val)
{
	if (val < 10)
	{
		val = '0' + val;
	}
	document.getElementById(id).innerHTML = val;
}

window.onload = init;



















