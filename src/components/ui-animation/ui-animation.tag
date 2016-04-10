import styles from './ui-animation.css';
import injectStyle from 'util/injectStyle';

<ui-animation>
	<yield />

	<script>
		// TODO: 传入动画序列类实例，由delay控制动画顺序
		// TODO: privode onEnd callback

		this.name = this.opts.name;
		this.delay = this.opts.delay;
		this.duration = this.opts.duration;
		this.count = this.opts.count;
		if( this.opts.count && this.opts.count.toUpperCase() === 'MAX' ) {
			this.count = 'infinite';
		} else if( typeof this.count === 'undefined' ) {
			this.count = 1;
		}

		this.on('mount', function() {
			var $root = $( this.root );

			$root.find('ui-image').animo({
				animation: [ this.name ],
				duration: this.duration || 1,
				delay: this.delay || 0,
				iterate: this.count,
				keep: true
			}, function() {
				
			});
		});
	</script>
</ui-animation>
