import { greeterController } from './greeter-controller.js';
import { greeterModel } from './greeter-model.js';
import { greeterView } from './greeter-view.js';

import { greeterModelMessage } from './greeter-model-message.js';

import { greeterViewClock } from './greeter-view-clock.js';
import { greeterViewMessage } from './greeter-view-message.js';

export function init()
{
	var modelMessage = new greeterModelMessage();
	var model = new greeterModel(modelMessage);
	
	var viewClock = new greeterViewClock('hr', 'mn', 'sc');
	var viewMessage = new greeterViewMessage('msg-time', 'msg-name');
	
	var view = new greeterView(viewClock, viewMessage);
	
	var controller = new greeterController(model, view);

	controller.loadUsername();
	controller.initClock();
}



















