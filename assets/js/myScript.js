function Player(type) {
	if(type === "dom") {

		// ATTRIBUTES
		this.type = type;
		this.radius = 80;
		this.length = 80;
		this.speed = 2;
		this.spawn = view.center;
		this.numSegments = Math.floor(this.radius / 3 + 2);

		// DRAWING THE SHAPE
        this.path = new Path({
        	strokeColor: "rgba(255, 0, 0, 0.5)",
    		fillColor: "rgba(255, 0, 0, 0.1)",
    		strokeWidth: 5,
    		shadowColor: "rgba(255, 255, 255, 1)",
    		shadowBlur: 30,
    		shadowOffset: new Point(0, 0),
    		closed: true
        });

	} else if(type === "sub") {

		// ATTRIBUTES
		this.type = type;
		this.radius = 15;
		this.length = 15;
		this.speed = 3;
		this.spawn = view.center;
		this.numSegments = Math.floor(this.radius / 3 + 2);

		// DRAWING THE SHAPE
		this.path = new Path({
			strokeColor: "rgba(0, 255, 255, 1)",
    		strokeWidth: 3,
    		shadowColor: "rgb(0, 255, 255)",
    		shadowBlur: 20,
    		shadowOffset: new Point(0, 0),
    		closed: true
		});
	}

	for(var i = 0; i < this.numSegments; i++) {
    	this.path.add(this.spawn + new Point({
    		angle: 360 / this.numSegments * i,
    		length: this.length
    	}));
    }
}

Player.prototype = {

	// LISTENS FOR MOVEMENT
	playerMove: function() {
		if(this.type === "dom") {
			if(Key.isDown('w')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.y -= this.speed;
				}
			}
			if(Key.isDown('s')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.y += this.speed;
				}
			}
			if(Key.isDown('a')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.x -= this.speed;
				}
			}
			if(Key.isDown('d')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.x += this.speed;
				}
			}
		} else if(this.type === "sub") {
			if(Key.isDown('up')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.y -= this.speed;
				}
			}
			if(Key.isDown('down')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.y += this.speed;
				}
			}
			if(Key.isDown('left')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.x -= this.speed;
				}
			}
			if(Key.isDown('right')) {
				for(var i = 0; i < this.path.segments.length; i++) {
					this.path.segments[i].point.x += this.speed;
				}
			}
		}
	}
}


//----------MAIN----------
var player1 = new Player("dom");
var player2 = new Player("sub");

player1.path.smooth();
player2.path.smooth();

var naked = false;

function onFrame() {

	// CREATES PLAYERS AND LISTENS FOR KEY EVENTS
	player1.playerMove();
	player2.playerMove();


    // SHOWS PATHS
	tool.onMouseDown = function(event) {
        if(naked === false) {
        	naked = true;
        	player1.path.selected = true;
        	player2.path.selected = true;
        } else {
        	naked = false;
        	player1.path.selected = false;
        	player2.path.selected = false;
        }
	}
}

console.log(PaperScope.get(0));
console.log(PaperScope.get(1));
console.log(PaperScope.get(2));
