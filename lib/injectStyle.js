module.exports = function( textContent ){
	var tmp = document.createElement('style');
	tmp.type = 'text/css';
	tmp.textContent = textContent;
	document.head.appendChild( tmp );
};
