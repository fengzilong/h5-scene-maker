var R_PX = /^\d+px$/;
var R_NUM = /^\d+$/;

riot.mixin('unit', {
	unit: function( u ) {
		u = u.trim();
		var num = u;

		if( R_PX.test( u ) ){
			var matched = u.match(/\d*/);
			num = matched[0] ? matched[0] : 0;
			num = parseFloat( num );
			num = num / 16 + 'rem';
		} else if( R_NUM.test( u ) ){
			
		}

		return num;
	}
});
