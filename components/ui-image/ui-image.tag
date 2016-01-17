<ui-image>
	<!-- static -->
	<img if="{ steps === 1 }" src="{ image.src || 'about:blank;' }" style="width: { unit( image.width ) };height: { unit( image.height ) };" />

	<!-- sprite sheet -->
	<div if="{ steps > 1 }" style="{ wrapperStyle }">
		<img src="{ image.src || 'about:blank;' }" style="{ imgStyle }" />
	</div>

	<script>
		/*
		 * image: object, contains src && width && height, use image-loader
		 * direction: string, '-' 或 '|'
		 * steps: number, default 1
		 * duration: number, defualt 1 if steps is valid
		 */

		var injectStyle = require('lib/injectStyle');

		this.mixin('unit');
		this.tagName = 'ui-image';
		this.styles = require('./ui-image.css');
		this.wrapperStyle = '';
		this.imgStyle = '';

		this.on('update', function(){
			// 当opts变化时，更新css
			// 如果steps <= 1, 当做静态图像处理，否则当做sprite处理
			this.image = this.opts.image || {};
			this.direction = this.opts.direction || '-';
			this.duration = this.opts.duration || '1';
			if( typeof this.opts.steps !== 'undefined' ){
				this.steps = parseInt( this.opts.steps ) || 1;
			} else {
				this.steps = 1;
			}

			this.wrapperStyle = '';
			if( this.direction === '-' ) {
				this.wrapperStyle += 'width: ' + this.unit( this.image.width ) / this.steps + 'rem;';
				this.wrapperStyle += 'height: ' + this.unit( this.image.height ) + 'rem;';
			} else if( this.direction === '|' ) {
				this.wrapperStyle += 'width: ' + this.unit( this.image.width ) + 'rem;';
				this.wrapperStyle += 'height: ' + this.unit( this.image.height ) / this.steps + 'rem;';
			}
			this.wrapperStyle += 'position: absolute;-webkit-transform: translate3d(-50%, -50%, 0);text-align: center;left: 50%;top: 50%;overflow:hidden;';

			var spriteAnimationName = require('lib/id')('sprite_');

			this.imgStyle = '';
			this.imgStyle += 'width: auto;height: ' + this.unit( this.image.height ) + 'rem;overflow:hidden;';
			this.imgStyle += '-webkit-animation: ' + spriteAnimationName + ' .4s steps(1) 0s infinite;animation: ' + spriteAnimationName + ' .4s steps(1) 0s infinite;';

			var spriteAnimationCss = require( 'lib/keyframes' )( spriteAnimationName, this.steps, '-' );

			injectStyle( spriteAnimationCss );

			console.log( spriteAnimationName );
		});
	</script>
</ui-image>
