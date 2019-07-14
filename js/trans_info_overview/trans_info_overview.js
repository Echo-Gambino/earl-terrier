import { transitionManager } from './transitionManager.js';

export function init()
{

	var transMan = new transitionManager(
		'button-info','greeter'
	);

	var button = document.getElementById('button-goto-info');

	button.onclick = function()
	{
		transMan.TransitionToInfo();
	}

}

// window.onload = init;

