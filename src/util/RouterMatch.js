import route from 'riot-route';
import RouterHistory from './RouterHistory';
import animate, { DIRECTION } from './page-animate';

export const back = () => {
	history.back();
};

let routerMatchCache = {};
// TODO: use routerHistoryManager instead of routerHistory
let routerHistory = [];
export default class RouterMatch {
	static get( match ) {
		return routerMatchCache[ match ];
	}

	constructor( match, mountfn ) {
		this.match = match;
		// TODO: config
		this.hooks = {
			backEnter( from, to ) {
				animate( from, to, DIRECTION.LEFT_TO_RIGHT );
			},
			enter( from, to ) {
				animate( from, to, DIRECTION.RIGHT_TO_LEFT );
			},
		};
		this._cache();

		route( match, ( ...args ) => {
			this._logAsRouterHistory( match );
			if( typeof mountfn === 'function' ) {
				let promise = mountfn( ...args );
				if( !( promise instanceof Promise ) ) {
					promise = Promise.resolve();
				}
				promise
					.then(() => {
						let len = routerHistory.length;
						let last = routerHistory[ len - 2 ];
						let current = routerHistory[ len - 1 ];

						if( last && current ) {
							let currentMatch = RouterMatch.get( current.match );

							if( last.id < current.id ) {
								console.debug( `${match} enter` );
								currentMatch.hooks.enter(
									document.querySelector( `[page-id="${last.id}"]` ),
									document.querySelector( `[page-id="${current.id}"]` )
								);
							} else {
								console.debug( `${match} back-enter` );
								currentMatch.hooks.backEnter(
									document.querySelector( `[page-id="${last.id}"]` ),
									document.querySelector( `[page-id="${current.id}"]` )
								);
							}
						}
					});
			}
		} );
	}

	_logAsRouterHistory( match ) {
		// 不涉及动画的route，以@开头，不作为转场的参考
		//#!@portal
		if( match.indexOf( '/@' ) !== 0 ) {
			// 不存在history.state，则认为是新页，构造新的RouterHistory实例
			if( !history.state ) {
				let rh = new RouterHistory( match );
				history.replaceState( { id: rh.id }, null, null );
			}

			console.debug( 'id', history.state.id );

			routerHistory.push( RouterHistory.get( history.state.id ) );
		}
	}

	_cache() {
		routerMatchCache[ this.match ] = this;
	}

	hook( { enter, backEnter } ) {
		if( enter ) {
			this.hooks.enter = enter;
		}

		if( backEnter ) {
			this.hooks.backEnter = backEnter;
		}
	}

};
