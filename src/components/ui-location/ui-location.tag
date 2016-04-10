import styles from './ui-location.less';

<ui-location>
	<yield />

	<script>
		this.styles = styles;

		let locate = () => {
			var x = this.opts.x;
			var y = this.opts.y;

			if( typeof x === 'undefined' && typeof y === 'undefined' ){
				return;
			}

			var style = this.root.style;

			if( typeof x !== 'undefined'){
				style.marginLeft = x;
			}

			if( typeof y !== 'undefined' ){
				style.marginTop = y;
			}
		};

		this.on('mount', function(){
			locate();
		});
	</script>
</ui-location>
