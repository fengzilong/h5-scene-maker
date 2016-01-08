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
		this.animationDelay = this.opts.delay;
		this.animationDuration = this.opts.duration;
		this.animationCount = this.opts.count;

		function durationStyle( duration ){
			var durationCls = 'duration_' + duration;
			var styles = `
				.` + durationCls + ` {
					animation-duration: ` + parseFloat( duration ) / 1000 + `s;
					-webkit-animation-duration: ` + parseFloat( duration ) / 1000 + `s;
				}
			`;

			injectStyle( styles );

			return durationCls;
		}

		function delayStyle( delay ){
			var delayCls = 'delay_' + delay;

			var styles = `
				.` + delayCls + ` {
					animation-delay: ` + parseFloat( delay ) / 1000 + `s;
					-webkit-animation-delay: ` + parseFloat( delay ) / 1000 + `s;
				}
			`;

			injectStyle( styles );

			return delayCls;
		}

		function countStyle( count ){
			var countCls = 'count_' + count;

			var styles = `
				.` + countCls + ` {
					animation-iteration-count: ` + count + `;
					-webkit-animation-iteration-count: ` + count + `;
				}
			`;

			injectStyle( styles );

			return countCls;
		}

		this.on('mount', function(){
			$( this.root ).animo({
				animation: ['tada', 'bounceOutLeft'],
				duration: 1
			});
		});
	</script>
</ui-animation>
