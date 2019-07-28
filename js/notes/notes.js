import { notesController } from "./notes-controller.js";

export function init()
{
	var buttonAdd = document.getElementById("button-make-item");

	var notesC = new notesController();

	notesC.SetButtonAdd( buttonAdd );

	buttonAdd.onclick = function()
	{
		notesC.AddItem();
	};

	//notesC.AddItem();

}

window.onload = init;
