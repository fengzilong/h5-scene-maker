export const DIRECTION = {
	'LEFT_TO_RIGHT': 0,
	'RIGHT_TO_LEFT': 1,
	'BOTTOM_TO_TOP': 2,
	'TOP_TO_BOTTOM': 3
};

const raf = window.requestAnimationFrame;

let animate = ( $from, $to, direction, callback ) => {
	if( typeof direction === 'undefined' ){
		direction = DIRECTION.RIGHT_TO_LEFT;
	}

	let classAnime = [
		'page-from-center-to-left',
		'page-from-center-to-right',
		'page-from-right-to-center',
		'page-from-left-to-center',
		'page-from-bottom-to-top',
		'page-from-top-to-bottom',
		'page-no-anime'
	];
	let classForFrom = '';
	let classForTo = '';

	switch( direction ) {
		case DIRECTION.RIGHT_TO_LEFT:
			classForFrom = 'page-from-center-to-left';
			classForTo = 'page-from-right-to-center';
			break;
		case DIRECTION.LEFT_TO_RIGHT:
			classForFrom = 'page-from-center-to-right';
			classForTo = 'page-from-left-to-center';
			break;
		case DIRECTION.BOTTOM_TO_TOP:
			// 底下的page需要保持可见
			classForFrom = 'page-current';
			classForTo = 'page-from-bottom-to-top';
			break;
		case DIRECTION.TOP_TO_BOTTOM:
			// 底下的page需要保持可见
			classForFrom = 'page-from-top-to-bottom';
			classForTo = 'page-current';
			break;
		default:
			classForFrom = 'page-from-center-to-left';
			classForTo = 'page-from-right-to-center';
			break;
	}

	classAnime.forEach( v => {
		$to.classList.remove( v );
	} );

	classAnime.forEach( v => {
		$from.classList.remove( v );
	} );

	raf(() => {
		$to.classList.add( classForTo );
		$from.classList.add( classForFrom );
	});

	let hasAnimationEndCalled = false;
	let onAnimationEnd = e => {
		$from.removeEventListener('webkitAnimationEnd', onAnimationEnd, false);
		$to.removeEventListener('webkitAnimationEnd', onAnimationEnd, false);

		classAnime.forEach( v => {
			$from.classList.remove( v );
			$to.classList.remove( v );
		} );

		// 切换page-current
		document.body.removeChild( $from );
		// $from.classList.remove( 'page-current' );
		$to.classList.add( 'page-current' );

		if( !hasAnimationEndCalled ) {
			hasAnimationEndCalled = true
			callback && callback();
		}
	};

	$from.addEventListener('webkitAnimationEnd', onAnimationEnd, false);
	$to.addEventListener('webkitAnimationEnd', onAnimationEnd, false);
}

export default animate;
