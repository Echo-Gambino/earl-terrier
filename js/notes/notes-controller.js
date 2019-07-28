

export class notesController
{
	constructor()
	{
	}

	SetButtonAdd( button )
	{
		console.log("Added Button");

		button.onClick = function()
		{
			console.log("Set up add item");
			this.AddItem();
		}.bind(this);

		/*
		button.onClick = function()
		{
			this.AddItem();
		}.bind(this);
		*/
	}

	AddItem()
	{
		console.log("Adding Item");

		var hdrText = "This is a new Item!";
		var bdyText = ""
		+ "This is something\n"
		+ "amazing!\n"
		+ "Third line...";

		var divItem = document.createElement("div");

		var divItemHdr = this.GenHdr(hdrText);

		var divItemBdy = this.GenBdy(bdyText);

		var divItemGtr = this.GenGtr();

		divItem.appendChild(divItemHdr);

		divItem.appendChild(document.createElement("hr"));

		divItem.appendChild(divItemBdy);

		divItem.appendChild(divItemGtr);

		divItem.classList.add("notes-item-container");

		var container = document.getElementById("notes-container");

		container.appendChild(divItem);

	}

	GenHdr( txtHeader )
	{
		var divItemHdr = document.createElement("div");

		var eH3 = document.createElement("h3");

		var eText = document.createTextNode( txtHeader );

		eH3.appendChild(eText);

		divItemHdr.appendChild(eH3);

		divItemHdr.classList.add("notes-item-header");

		return divItemHdr;
	}

	GenBdy( txtBody )
	{
		var divItemBdy = document.createElement("div");

		var eP = document.createElement("p");

		var textList = txtBody.split(/\r?\n/);

		for (var i = 0; i < textList.length; i++)
		{
			eP.appendChild( document.createTextNode(textList[i]) );

			eP.appendChild( document.createElement("br") );
		}

		divItemBdy.appendChild(eP);

		divItemBdy.classList.add("notes-item-body");

		return divItemBdy;
	}

	GenGtr()
	{
		var divItemGtr = document.createElement("div");

		divItemGtr.classList.add("notes-item-gutter");

		return divItemGtr;
	}

}


