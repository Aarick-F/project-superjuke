paper.install(window);

function Player(type) {
	if(type === "dom") {
		// ATTRIBUTES
		this.type = type;
		this.radius = 80;
		this.length = 80;
		this.speed = 2;
		this.spawn = new Point(view.center);
		this.numSegments = Math.floor(this.radius / 3 + 2);
		this.sidePoints = []; // NOT YET USED

		// DRAWING THE SHAPE
        this.path = new Path({
        	strokeColor: "rgba(255, 255, 255, 1)",
    		strokeWidth: 5,
    		shadowColor: "rgba(255, 0, 255, 1)",
    		shadowBlur: 25,
    		shadowOffset: new Point(0, 0),
    		closed: true
        });

	} else if(type === "sub") {
        // ATTRIBUTES
		this.type = type;
		this.radius = 15;
		this.length = 15;
		this.speed = 3;
		this.spawn = new Point(view.center);
		this.numSegments = Math.floor(this.radius / 3 + 2);
		this.sidePoints = []; // NOT YET USED

		// DRAWING THE SHAPE
		this.path = new Path({
			strokeColor: "rgba(0, 255, 255, 1)",
    		strokeWidth: 3,
    		shadowColor: "rgb(0, 255, 255)",
    		shadowBlur: 20,
    		closed: true
		});
	}

	for(var i = 0; i < this.numSegments; i++) {
    	this.path.add(new Point({
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