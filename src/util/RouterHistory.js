let id = 0;
let routerHistoryCache = {};

let session = window.sessionStorage;
let SESSION_HISTORY_KEY = 'router_history';
const SESSION_MAX_ID_KEY = 'max_history_id'

export default class RouterHistory {
	static id() {
		// 保存当前id，页面刷新则从sessionStorage中读取id进行累加
		let idFromSession = session[ SESSION_MAX_ID_KEY ];
		if( idFromSession ) {
			id = parseInt( idFromSession );
		}
		session[ SESSION_MAX_ID_KEY ] = id + 1;
		return id++;
	}

	static get( id ) {
		// 防止刷新页面routerHistoryCache丢失
		let cache = routerHistoryCache[ id ];
		if( cache ) {
			return cache;
		}
		let cacheFromSession = session[ SESSION_HISTORY_KEY ];
		if( cacheFromSession ) {
			cacheFromSession = JSON.parse( cacheFromSession );
			return cacheFromSession[ id ];
		}
	}

	constructor( match ) {
		// 记录生成时的顺序
		this.id = RouterHistory.id();
		// 记录生成时的时间戳
		this.timestamp = Date.now();
		// 用来寻找对应的RouterMatch实例
		this.match = match;
		this._cache();
	}

	_getCacheFromSession() {
		let cacheFromSession = session[ SESSION_HISTORY_KEY ];
		if( cacheFromSession ) {
			cacheFromSession = JSON.parse( cacheFromSession );
			return cacheFromSession;
		}
	}

	_cache() {
		let cache = this._getCacheFromSession();
		if( cache && cache[ this.id ] ) {
			// 缓存中已存在，从缓存中读取
			routerHistoryCache[ this.id ] = cache[ this.id ];
		} else {
			// 缓存中不存在，保存并记录至缓存
			routerHistoryCache[ this.id ] = {
				id: this.id,
				timestamp: this.timestamp,
				match: this.match
			};

			// 将当前路由保存至sessionStorage
			if( !cache ) {
				cache = {};
			}
			cache[ this.id ] = routerHistoryCache[ this.id ];
			session[ SESSION_HISTORY_KEY ] = JSON.stringify( cache );
		}
	}
};
