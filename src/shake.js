var SHAKE_THRESHOLD = 4000;
var last_update = 0;
var x, y, z, last_x = 0,
	last_y = 0,
	last_z = 0;

function deviceMotionHandler(eventData) {
	var acceleration = eventData.accelerationIncludingGravity;
	var curTime = new Date().getTime();
	if ((curTime - last_update) > 10) {
		var diffTime = curTime - last_update;
		last_update = curTime;
		x = acceleration.x;
		y = acceleration.y;
		z = acceleration.z;
		var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

		if (speed > SHAKE_THRESHOLD) {
			location.reload();
		}
		last_x = x;
		last_y = y;
		last_z = z;
	}
}
if (window.DeviceMotionEvent) {
	window.addEventListener('devicemotion', deviceMotionHandler, false);
}
