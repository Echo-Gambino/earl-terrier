import { transitionManager } from './transitionManager.js';

export function init()
{

	// -----
	var buttonInfoDiv = document.getElementById('button-info');
	var greeter = document.getElementById('greeter');

	var tranOverview = function(startClass, finalClass)
	{
		greeter.classList.remove(startClass);
		buttonInfoDiv.classList.remove(startClass);

		greeter.classList.add(finalClass);
		buttonInfoDiv.classList.add(finalClass);
	}

	var hideOverview = function()
	{
		tranOverview('Overview', 'Info');
	}

	var showOverview = function()
	{
		tranOverview('Info', 'Overview');
	}

	// -----
	var buttonOverviewDiv = document.getElementById('button-overview');
	
	var sectionInfo = document.getElementById('section-info');

	var tranInfo = function(startClass, finalClass)
	{
		buttonOverviewDiv.classList.remove(startClass);
		sectionInfo.classList.remove(startClass);

		buttonOverviewDiv.classList.add(finalClass);
		sectionInfo.classList.add(finalClass);
	}

	var hideInfo = function()
	{
		tranInfo('Info', 'Overview');
	}

	var showInfo = function()
	{
		tranInfo('Overview', 'Info');
	}

	var overviewToInfo = function()
	{
		hideOverview();

		showInfo();
	}

	var infoToOverview = function()
	{
		showOverview();

		hideInfo();
	}

	// -----
	var transMan = new transitionManager(
		overviewToInfo,
		infoToOverview
	);

	var buttonToInfo = document.getElementById('button-goto-info');
	transMan.SetButton_ToInfo(buttonToInfo);

	var buttonToOverview = document.getElementById('button-goto-overview');
	transMan.SetButton_ToOverview(buttonToOverview);


}

// window.onload = init;

