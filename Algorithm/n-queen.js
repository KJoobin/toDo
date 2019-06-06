// n * n 크기의 체스판에서 퀸을 n 개 배치하는 경우의 수를 구한다.

function solution(n) {
  var board = [];
  for(var i = 0; i < n; i++) {
    var emptyBoard = [];
    for(var j = 0; j < n; j++) {
      emptyBoard.push(0);
    }
    board.push(emptyBoard);
  }
  console.log(queenPostion(board,n,0));
}

function queenPostion(board,n,cut) {
  var tempBoard = [];
  var count = 0;
  for(var i = 0; i < n; i++) {
    if(position(board,n,cut,i)) {
      if(cut === n - 1) {
        count++;
      } else {
        for(j = 0; j < n; j++) {
          tempBoard[j] = board[j].slice();
        }
        tempBoard[cut][i] = 1;
        count += queenPostion(tempBoard,n,cut + 1);
      }
    }
  }
  return count;
}

function position(board,n,cut,x) {
  for(var i = 0; i < n; i++) {
    if(board[cut][i] === 1) {
      return false;
    }
    if(board[i][x] === 1) {
      return false;
    }
    if( i > 0 ) {
      if( cut + i < n && x + i < n  &&  board[cut + i][x + i] === 1 ) {
        return false;
      }
      if( cut + i < n && x - i >= 0 && board[cut + i][x - i] === 1) {
        return false;
      }
      if( cut - i >= 0 && x + i < n && board[cut - i][x + i] === 1) {
        return false;
      }
      if( cut - i >= 0 && x - i >= 0 && board[cut - i][x - i] === 1 ) {
        return false;
      }
    }
  }
  // if(cut === n - 1 ) {               //완성된 체스판 보기 
  //   console.log(x)
  //   for(var j = 0; j < n; j++) {
  //     console.log(board[j]);
  //   }
  //   console.log("#############")
  // }
  return true;
}


solution(10);
