// THESE DOCS AREN'T BEING USED BECAUSE i HAVEN'T FIGURED OUT HOW TO REFERENCE TWO PAPERSCRIPT FILES IN THE SAME SCOPE YET

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