<ui-stage>
	<yield />

	<script>
		// TODO: animateDone事件
		var styles = require('./ui-stage.css');

		this.tagName = 'ui-stage';

		this.on('mount', function(){
			console.log( 'ui-stage mounted' );
		});
	</script>
</ui-stage>
