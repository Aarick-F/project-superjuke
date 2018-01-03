// DRAWS PLAYER1

var radius = 60;
var numSegments = Math.floor(radius / 3 + 2);

var spawn = view.center;

var naked = false;

var player1 = new Path({
	strokeColor: "#FFF",
	strokeWidth: 5,
	shadowColor: "#0FF",
	shadowBlur: 30,
	shadowOffset: new Point(0, 0),
	closed: true
});


for(var i = 0; i < numSegments; i++) {
	player1.add(spawn + new Point({
        angle: 360 / numSegments * i,
        length: 60
	}));
}

player1.smooth();
console.log("player segments length: " + player1.segments.length);

//----------MAIN----------
// SIMPLE MOVEMENTS FOR NOW, IMPROVEMENTS TO MOMENTUM TO COME LATER

function onFrame() {

    // MOVEMENT IS DONE ONE POINT AT A TIME, HOPEFULLY TO MAKE COLLISION DETECTION EASIER LATER

	if(Key.isDown('w')) {
		for(var i = 0; i < player1.segments.length; i++) {
			player1.segments[i].point.y -= 3;
		}
	}
	if(Key.isDown('s')) {
		for(var i = 0; i < player1.segments.length; i++) {
			player1.segments[i].point.y += 3;
		}
	}
	if(Key.isDown('a')) {
		for(var i = 0; i < player1.segments.length; i++) {
			player1.segments[i].point.x -= 3;
		}
	}
	if(Key.isDown('d')) {
		for(var i = 0; i < player1.segments.length; i++) {
			player1.segments[i].point.x += 3;
		}
	}

	// ON CLICK, SHOW POINTS
	tool.onMouseDown = function(event) {
        if(naked === false) {
        	naked = true;
        	player1.selected = true;
        } else {
        	naked = false;
        	player1.selected = false;
        }
	}
}



