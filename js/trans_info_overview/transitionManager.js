
export class transitionManager
{
	constructor(
		overviewToInfo,
		infoToOverview
	)
	{
		this._overviewToInfo = overviewToInfo;
		this._infoToOverview = infoToOverview;
	}

	SetButton_ToInfo(button)
	{
		button.onclick = function()
		{
			this._overviewToInfo();
		}.bind(this);
	}

	SetButton_ToOverview(button)
	{
		button.onclick = function()
		{
			this._infoToOverview();
		}.bind(this);
	}

}


