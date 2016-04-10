import route from 'riot-route';
import createRoute from 'util/createRoute';

let createPage = id => {
	const CLASS_PAGE = 'page';
	const CLASS_PAGE_CURRENT = 'page-current';

	let page = document.createElement( 'div' );
	page.classList.add( CLASS_PAGE );
	page.classList.add( CLASS_PAGE_CURRENT );
	page.setAttribute( 'page-id', history.state.id );
	document.body.appendChild( page );
	return page;
};

createRoute('/', () => {

});

export let Loading = createRoute('/loading', () => {
	return new Promise(function(resolve, reject) {
		require.ensure([], require => {
			require('./views/loading');
			riot.mount( createPage(),  'loading' );
			// setTimeout( () => route( 'game' ), 6000 );
			resolve();
		}, 'loading');
	});
});

export let Game = createRoute('/game', () => new Promise(function(resolve, reject) {
	require.ensure([], require => {
		require('./views/home');
		riot.mount( createPage(), 'home' );
		resolve();
	}, 'game');
}));

export let Result = createRoute('/result..', () => {

});

route.base( '#!' );
route.start( true );
