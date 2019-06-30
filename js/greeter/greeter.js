import { greeterController } from './greeter-controller.js';
import { greeterModel } from './greeter-model.js';
import { greeterView } from './greeter-view.js';

function init()
{
	var model = new greeterModel();
	var view = new greeterView('hr', 'mn', 'sc');
	var controller = new greeterController(model, view);

	controller.initClock();
}

window.onload = init;



















