// greeter-controller.js
// 
// Description:
//   This file is the CONTROLLER portion of greeter's MVC model.
// 
// Purpose:
//   Controller responds to user actions and invokes
// changes on the model.
//   Handles events that occurs within the web app.
//   Completes actions by calling functions to its
// VIEW and/or MODEL counterparts to perform an action.
//

// Outline:
// greeterController
//   initClock()
//   haltClock()
//   

import { greeterModel } from './greeter-model.js';
import { greeterView } from './greeter-view.js';

export class greeterController
{
	constructor(gModel, gView)
	{
		this._gModel = gModel;
		this._gView = gView;
		this._haltClock = false;
		this._animate;
	}

	initClock()
	{
		this._haltClock = false;
		this.tick();
	}

	haltClock()
	{
		this._haltClock = true;
	}

	tick()
	{
		this._gView.displayAll(
			this._gModel.getHour(),
			this._gModel.getMinute(),
			this._gModel.getSecond(),
			true
		);

		this._gModel.increment();

		if (!this._haltClock)
		{
			this._animate = setTimeout(
				// Note: .bind(this) is critical to
				// make this.tick() work correctly, if not
				// then it will render all objects stored 
				// within the class useless.
				// Another way would be:
				// var substitute = this;
				// substitute.tick()
				function() 
				{ 
					this.tick() 
				}.bind(this),
				// Set timer to 1000
				1000
			);
		}
	}

}


