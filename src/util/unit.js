const R_PX = /^\d+px$/;
const R_NUM = /^\d+$/;
const DIVIDE = 46.875;

let unit = function( u ) {
	u = ( u + '' ).trim();
	let num = u;

	if( R_PX.test( u ) ){
		let matched = u.match(/\d*/);
		num = matched[0] ? matched[0] : 0;
		num = parseFloat( num );
		num = num / DIVIDE;
	} else if( R_NUM.test( u ) ){
		num = num / DIVIDE;
	}

	return num;
};

export default unit;
