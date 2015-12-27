<ui-element>
	<yield />

	<script>
		var self = this;

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

			var style = self.root.style;

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
