require('ui/ui-stage');
require('ui/ui-animation');
require('ui/ui-element');

<scene-loading>
	<ui-stage class="active">
		<ui-animation name="fadeIn" delay="2000" duration="2000" count="1">
			<ui-element x="-1rem" y="-1rem">
				<div class="{ parent.parent.parent.styles.circle_large }"></div>
			</ui-element>
		</ui-animation>

		<ui-animation name="fadeIn" delay="1000" duration="2000" count="1">
			<ui-element x="6rem" y="6rem">
				<div class="{ parent.parent.parent.styles.circle_small }"></div>
			</ui-element>
		</ui-animation>
	</ui-stage>

	<script>
		this.styles = require('./scene-loading.css');

		this.on('mount', function(){

		});
	</script>
</scene-loading>
