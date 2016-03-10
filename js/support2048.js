documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

function getPosTop(i, j){
	return cellSpace + i * (cellSpace + cellSideLength);
}

function getPosLeft(i, j){
	return cellSpace + j * (cellSpace + cellSideLength);
}

function getNumberBackgroundColor(number){
	switch (number){
		case 2:
			return "#eee4ba";
			break;
		case 4:
			return "#ede0c8";
			break;
		case 8:
			return "#f2b179";
			break;
		case 16:
			return "#f59563";
			break;
		case 32:
			return "#f67c5f";
			break;
		case 64:
			return "#f65e3b";
			break;
		case 128:
			return "#edcf72";
			break;
		case 256:
			return "#edcc61";
			break;
		case 512:
			return "#9c0";
			break;
		case 1024:
			return "#33b5e5";
			break;
		case 2048:
			return "#09c";
			break;
		case 4096:
			return "#a6c";
			break;	
		case 8192:
			return "#93c";
			break;
	}
	
	return "black";
}

function getNumberColor(number){
	if (number <= 4) {
		return "#776a65";
	}
	
	return "white";
}

function getNumberText(number){
	switch(number){
		case 2:return "帅"; break;
		case 4:return "大帅"; break;
		case 8:return "很帅"; break;
		case 16:return "超帅"; break;	
		case 32:return "最帅"; break;	
		case 64:return "帅炸天"; break;
		case 128:return "无敌帅"; break;
		case 256:return "宇宙帅"; break;	
		case 512:return "帅成渣"; break;	
		case 1024:return "螺旋帅"; break;	
		case 2048:return "对称帅"; break	;
		case 4096:return "帅上天"; break	;
		case 8192:return "帅尼玛"; break	;
	}
    return "帅啊帅";
}


function nospace(board){
	for (var i = 0; i < 4; i ++) {
		for (var j = 0; j < 4; j ++) {
			if (!board[i][j]) {
				return false;
			}
		}
	}
	return true;
}

function canMoveLeft(board){
	
	for (var i = 0; i < 4; i ++) {
		for (var j = 1; j < 4; j ++) {
			if (board[i][j]) {
				if (!board[i][j - 1] || board[i][j - 1] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}


function canMoveUp(){
	
	for (var j = 0; j < 4; j ++) {
		for (var i = 1; i < 4; i ++) {
			if (board[i][j]) {
				if (!board[i - 1][j] || board[i - 1][j] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveRight(){
	
	for (var i = 0; i < 4; i ++) {
		for (var j = 2; j >= 0; j --) {
			if (board[i][j]) {
				if (!board[i][j + 1] || board[i][j + 1] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function canMoveDown (){
	
	for (var j = 0; j < 4; j ++) {
		for (var i = 2; i >= 0; i --) {
			if (board[i][j]) {
				if (!board[i + 1][j] || board[i + 1][j] == board[i][j]) {
					return true;
				}
			}
		}
	}
	return false;
}

function noBlockHorizontal(row, col1, col2, board){
	for (var i = col1 + 1; i < col2; i ++) {
		if (board[row][i]) {
			return false;
		}
	}
	return true;
}

function noBlockVertical(col, row1, row2, board){
	for (var i = row1 + 1; i < row2; i ++ ) {
		if (board[i][col]) {
			return false;
		}
	}
	return true;
}

function nomove(board){
	if (canMoveLeft(board) || canMoveUp(board) || canMoveRight(board) || canMoveDown(board)) {
		return false;
	}
	return true;
}





