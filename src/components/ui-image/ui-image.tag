import uniqueId from 'util/id';
import unit from 'util/unit';
import styles from './ui-image.less';

<ui-image>
	<!-- static or sprite sheet -->
	<div class="{ styles.wrapper }" style="{ wrapperStyle }">
		<img src="{ image.src || 'about:blank;' }" style="{ imgStyle }" />
	</div>

	<script>
		/*
		 * image: object, contains src && width && height, use image-loader
		 * direction: string, '-' 或 '|'
		 * frames: number, default 1
		 * duration: number, defualt 1 if frames is valid
		 * TODO: scale: number, default 1, scale image
		 */

		var injectStyle = require('util/injectStyle');

		this.styles = styles;
		this.wrapperStyle = '';
		this.imgStyle = '';

		this.on('update', function(){
			// 当opts变化时，更新css
			// 如果frames <= 1, 当做静态图像处理，否则当做sprite处理
			this.image = this.opts.image || {};
			this.direction = this.opts.direction || '-';
			this.duration = this.opts.duration || '1';

			if( typeof this.opts.frames !== 'undefined' ){
				this.frames = parseInt( this.opts.frames ) || 1;
			} else {
				this.frames = 1;
			}

			if( this.direction === '-' ) {
				this.wrapperStyle = `width: ${unit( this.image.width ) / this.frames}rem;height: ${unit( this.image.height )}rem;`;
			} else if( this.direction === '|' ) {
				this.wrapperStyle = `width: ${unit( this.image.width )}rem;height: ${unit( this.image.height ) / this.frames}rem;`;
			}

			if( this.frames === 1 ) {
				this.imgStyle = `width: ${ unit( this.image.width ) }rem;height: ${ unit( this.image.height ) }rem`;
			} else if( this.frames > 1 ) {
				let spriteAnimationName = uniqueId('sprite_');
				this.imgStyle = `width: auto;height: ${unit( this.image.height )}rem;overflow:hidden;-webkit-animation:${spriteAnimationName} .4s steps(1) 0s infinite;animation: ${spriteAnimationName} .4s steps(1) 0s infinite;`;

				let spriteAnimationCss = require( 'util/keyframes' )( spriteAnimationName, this.frames, '-' );

				injectStyle( spriteAnimationCss );
			}
		});
	</script>
</ui-image>
