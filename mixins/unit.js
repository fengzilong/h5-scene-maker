var R_PX = /^\d+px$/;
var R_NUM = /^\d+$/;
var DIVIDE = 40;

riot.mixin('unit', {
	unit: function( u ) {
		u = ( u + '' ).trim();
		var num = u;

		if( R_PX.test( u ) ){
			var matched = u.match(/\d*/);
			num = matched[0] ? matched[0] : 0;
			num = parseFloat( num );
			num = num / DIVIDE;
		} else if( R_NUM.test( u ) ){
			num = num / DIVIDE;
		}

		return num;
	}
});
