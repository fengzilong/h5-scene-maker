require('lib/animo.js')
require('lib/animo.css')

<ui-animation>
	<yield />

	<script>
		// TODO: 动画序列属性，数组，由delay控制动画顺序
		// 内置一些基础动画，如fadeIn，fadeOut，zoomIn，zoomOut
		var styles = require('./ui-animation.css');
		var injectStyle = require('lib/injectStyle');

		this.tagName = 'ui-animation';
		this.animationName = this.opts.name;
		this.animationDelay = this.opts.delay;
		this.animationDuration = this.opts.duration;
		this.animationCount = this.opts.count;

		this.on('mount', function(){
			var $root = $( this.root );

			$root.animo({
				animation: ['tada', 'bounceOutLeft'],
				duration: 1
			});
		});
	</script>
</ui-animation>
