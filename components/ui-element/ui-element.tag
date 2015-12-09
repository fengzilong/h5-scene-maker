<ui-element>
	<style scoped>
		:scope {
			position: absolute;
			-webkit-transform: translate3d(-50%, -50%, 0);
			text-align: center;
			left: 50%;
			top: 50%;
		}
	</style>

	<yield />

	<script>
		// TODO 提供scale属性，用于控制内部元素的缩放。使用transform: scale实现，有视觉稿的情况下用不到该属性

		var self = this;

		// TODO 自动添加rem单位
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
