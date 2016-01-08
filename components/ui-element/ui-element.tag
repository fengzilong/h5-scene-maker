<ui-element>
	<div class="{ styles.center }">
		<div name="offset">
			<yield />
		</div>
	</div>

	<script>
		var self = this;
		this.styles = require('./ui-element.css');

		// TODO: scale属性
		// TODO: 单位转换

		this.tagName = 'ui-element';
		this.x = this.opts.x;
		this.y = this.opts.y;

		function locate(){
			var x = self.x;
			var y = self.y;

			if( typeof x === 'undefined' && typeof y === 'undefined' ){
				return;
			}

			var style = self.offset.style;

			if( typeof x !== 'undefined'){
				style[ 'margin-top' ] = y;
			}

			if( typeof y !== 'undefined' ){
				style[ 'margin-left' ] = x;
			}
		};

		this.on('mount', function(){
			locate();
		});
	</script>
</ui-element>
