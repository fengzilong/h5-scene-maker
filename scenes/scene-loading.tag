require('ui/ui-stage');
require('ui/ui-animation');
require('ui/ui-element');
require('ui/ui-image');

<scene-loading>
	<ui-stage class="active">
		<ui-animation>
			<ui-element x="-1rem" y="-1rem">
				<div class="{ parent.parent.parent.styles.circle_large }"></div>
			</ui-element>
		</ui-animation>

		<ui-animation>
			<ui-element x="6rem" y="6rem">
				<div class="{ parent.parent.parent.styles.circle_small }"></div>
			</ui-element>
		</ui-animation>

		<ui-animation>
			<ui-image image="{ parent.parent.img }" steps="26"></ui-image>
		</ui-animation>
	</ui-stage>

	<script>
		this.styles = require('./scene-loading.css');
		this.img = require('image/sheep.png');

		this.on('mount', function(){

		});
	</script>
</scene-loading>
