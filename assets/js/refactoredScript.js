function Player(r, l, s, p, sp) {
    this.radius = r;
    this.length = l;
    this.speed = s;
    this.player = p;
    this.spawn = sp;
    this.numSegments = Math.floor(r / 3 + 2);

    if(this.player === 1) {
    	this.path = new Path({
    		strokeColor: "rgba(0, 255, 255, 1)",
    		fillColor: "rgba(0, 255, 255, 0.1)",
    		strokeWidth: 5,
    		shadowColor: "#FFF",
    		shadowBlur: 30,
    		shadowOffset: new Point(0, 0),
    		closed: true
    	});
    } else if(this.player === 2) {
    	this.path = new Path({
    		strokeColor: "#F22",
    		strokeWidth: 3,
    		shadowColor: "#F22",
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
	player1Move: function() {
		if(Key.isDown('w') && this.player === 1) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.y -= this.speed;
			}
		}
		if(Key.isDown('s') && this.player === 1) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.y += this.speed;
			}
		}
		if(Key.isDown('a') && this.player === 1) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.x -= this.speed;
			}
		}
		if(Key.isDown('d') && this.player === 1) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.x += this.speed;
			}
		}
	},
	player2Move: function() {
		if(Key.isDown('up') && this.player === 2) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.y -= this.speed;
			}
		}
		if(Key.isDown('down') && this.player === 2) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.y += this.speed;
			}
		}
		if(Key.isDown('left') && this.player === 2) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.x -= this.speed;
			}
		}
		if(Key.isDown('right') && this.player === 2) {
			for(var i = 0; i < this.path.segments.length; i++) {
				this.path.segments[i].point.x += this.speed;
			}
		}
	}

}

//----------MAIN----------

var player1 = new Player(80, 80, 2, 1, view.center);
var player2 = new Player(20, 20, 3, 2, view.center);
player1.path.smooth();
player2.path.smooth();

var naked = false;

function onFrame() {
    player1.player1Move();
    player2.player2Move();

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