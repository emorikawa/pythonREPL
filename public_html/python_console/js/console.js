function include(filename)
{
	var head = document.getElementsByTagName('head')[0];
	
	script = document.createElement('script');
	script.src = filename;
	script.type = 'text/javascript';
	
	head.appendChild(script)
}

include('js/htmlEncode.js');
include('js/sh_main.min.js');
include('js/sh_python.min.js');
include('js/console_logic.js');