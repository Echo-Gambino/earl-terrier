import { greeterController } from './greeter-controller.js';
import { greeterModel } from './greeter-model.js';
import { greeterView } from './greeter-view.js';

import { greeterViewClock } from './greeter-view-clock.js';
import { greeterViewMessage } from './greeter-view-message.js'

function init()
{
	var model = new greeterModel();
	
	var viewClock = new greeterViewClock('hr', 'mn', 'sc');
	var viewMessage = new greeterViewMessage('msg-time', 'msg-name');
	
	var view = new greeterView(viewClock, viewMessage);
	
	var controller = new greeterController(model, view);
	
	controller.initClock();
}

window.onload = init;



















