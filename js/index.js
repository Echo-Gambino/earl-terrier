
import { init as greeter } from './greeter/greeter.js';
import { init as transIO } from './trans_info_overview/trans_info_overview.js';

function init()
{
	greeter();
	transIO();
}


window.onload = init;


