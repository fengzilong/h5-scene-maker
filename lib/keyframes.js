module.exports = function( name, steps, direction ){
	var cssContent = 'keyframes ' + name;
	cssContent += '{';
	var add = 100 / steps;
	for( var i = 0; i <= steps; i++ ){
		cssContent += ( i * add ) +  '% {';
		if( direction === '-' ){
			cssContent += '-webkit-transform: translate3d(-' + ( i * add ) + '%,0,0);'
		} else if( direction === '|' ) {
			cssContent += '-webkit-transform: translate3d(0,-' + ( i * add ) + '%,0);'
		}
		cssContent += '}';
	}
	cssContent += '}';

	return '@-webkit-' + cssContent + '@' + cssContent;
};
