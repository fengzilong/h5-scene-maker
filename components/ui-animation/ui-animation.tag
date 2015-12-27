require('lib/animate.css');

<ui-animation>
	<yield />

	<script>
		// TODO: 动画序列属性，数组，由delay控制动画顺序
		// 内置一些基础动画，如fadeIn，fadeOut，zoomIn，zoomOut
		var styles = require('./ui-animation.css');
		var injectStyle = require('lib/injectStyle');

		this.tagName = 'ui-animation';
		this.animationName = this.opts.name;
		this.animationDelay = 'delay_' + this.opts.delay;
		this.animationDuration = 'duration_' + this.opts.duration;
		this.animationCount = 'count_' + this.opts.count;

		function injectDurationStyle(){
		}

		function injectDelayStyle(){
		}

		this.on('mount', function(){
			$( this.root )
				.addClass( styles[ this.animationName ] )
				.addClass( styles[ this.animationDuration ] )
				.addClass( styles[ this.animationDelay ] )
				.addClass( styles[ this.animationCount ] );
		});
	</script>
</ui-animation>
