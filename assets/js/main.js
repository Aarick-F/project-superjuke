paper.install(window);

window.onload = function() {

	paper.setup("myCanvas");
    
    // CREATE PLAYERS
    var player1 = new Player("dom");
    var player2 = new Player("sub");
    player1.path.smooth();
    player2.path.smooth();

    // CENTERS PLAYERS
    player1.path.translate(view.center);
    player2.path.translate(view.center);

    var naked = false;

    // TOOL USED TO SHOW PATHS OF PLAYERS
    var tool = new Tool();
    tool.onMouseDown = function() {
        if(naked === false) {
        	naked = true;
        	player1.path.selected = true;
        	player2.path.selected = true;
        } else if(naked === true) {
        	naked = false;
        	player1.path.selected = false;
        	player2.path.selected = false;
        }
    }

    view.onFrame = function() {
	    // LISTENS FOR KEY EVENTS & UPDATES POSITION
	    player1.playerMove();
	    player2.playerMove();   
    }
}