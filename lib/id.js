module.exports = function( prefix ){
	prefix = prefix || 'prefix';
	return String(Math.random() + Math.random()).replace(/\d\.\d{4}/, prefix);
};
