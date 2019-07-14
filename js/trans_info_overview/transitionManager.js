
export class transitionManager
{
	constructor(
		bTransToInfo,
		gGreeterName
	)
	{
		this._tToInfo = document.getElementById(bTransToInfo);
		this._greeter = document.getElementById(gGreeterName);

		this._tToInfo.onclick = function() 
		{ 
			this.TransitionToInfo(); 
		}.bind(this);
	}

	TransitionToInfo()
	{
		this._greeter.classList.add('Info');
		this._tToInfo.classList.add('Info');
	}

	TransitionToOverview()
	{
		this._greeter.classList.add('Overview');
	}

}


