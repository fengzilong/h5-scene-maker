import styles from './loading.less';
import sheep from 'image/sheep.png';
import earth from 'image/earth.png';
import banner from 'image/banner.png';
import person from 'image/person.png';

<loading>
	<ui-stage class="active" style="background:-webkit-gradient(linear, left top, left bottom, from(#F2312F), to(#AD0000));">
		<ui-animation name="spinner" duration="29" count="MAX">
			<ui-location y="24rem">
				<ui-image image="{ parent.parent.parent.earth }"></ui-image>
			</ui-location>
		</ui-animation>

		<ui-animation name="bounceIn" duration=".9">
			<ui-location y="-3rem">
				<ui-image image="{ parent.parent.parent.banner }"></ui-image>
			</ui-location>
		</ui-animation>

		<ui-animation name="bounceInUp" duration="1.4">
			<ui-location x="4rem" y="-7.6rem">
				<div style="width: 4.693333333333333rem;height: 7rem;overflow: hidden;padding-top: 4rem;">
					<ui-image image="{ parent.parent.parent.person }"></ui-image>
				</div>
			</ui-location>
		</ui-animation>

		<ui-animation>
			<ui-location y="7rem">
				<ui-image style="" image="{ parent.parent.parent.sheep }" frames="26"></ui-image>
			</ui-location>
		</ui-animation>
	</ui-stage>

	<script>
		this.styles = styles;
		this.sheep = sheep;
		this.earth = earth;
		this.banner = banner;
		this.person = person;
	</script>
</loading>
