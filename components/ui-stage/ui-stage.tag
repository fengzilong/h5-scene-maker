<ui-stage>
	<style scoped>
		:scope {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	</style>

	<yield />

	<script>
		var styles = require('./ui-stage.css');

		this.tagName = 'ui-stage';

		this.on('mount', function(){
			console.log( 'ui-stage mounted' );
		});
	</script>
</ui-stage>
