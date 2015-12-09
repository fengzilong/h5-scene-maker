require('ui/ui-stage');
require('ui/ui-element');
require('ui/ui-animation');

<scene-loading>
	<ui-stage class="active">
		<ui-animation name="fadeOut" delay="2000" duration="2000" count="1">
			<ui-element x="-1rem" y="-1rem">
				<div style="width: 9rem;height: 9rem;border-radius: 50%;background-color: #DDD;">

				</div>
			</ui-element>

			<ui-element x="6rem" y="6rem">
				<div style="width: 6rem;height: 6rem;border-radius: 50%;background-color: #DDD;">

				</div>
			</ui-element>
		</ui-animation>
	</ui-stage>

	<script>

		this.on('mount', function(){
			console.log('mounted');
		});
	</script>
</scene-loading>
