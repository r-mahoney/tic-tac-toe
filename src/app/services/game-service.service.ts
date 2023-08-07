import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameBoard: any = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  tiles: string[] = ['', '', '', '', '', '', '', '', ''];
  Player: string = 'X';
  Bot: string = 'O';
  activePlayer: string = this.Player;
  round: number = 0;
  gameState: boolean = true;
  winner: string = '';

  constructor() {}

  getBoard() {
    return this.tiles;
  }

  resetGame() {
    for (let i = 0; i < this.gameBoard.length; i++) {
      this.gameBoard[i] = i;
      this.tiles[i] = '';
    }
    this.activePlayer = this.Player;
    this.round = 0;
    this.gameState = true;
  }

  changePlayer() {
    if (this.activePlayer === this.Player) {
      this.activePlayer = this.Bot;
      let index = this.botTurn(this.gameBoard, this.Bot).index;
      this.setValue(index);
    } else {
      this.activePlayer = this.Player;
    }
  }

  checkGameEnd(board: string[]): boolean {
    if (this.winning(board, this.Player)) {
      this.winner = 'Player Wins';
      return true;
    }
    if (this.winning(board, this.Bot)) {
      this.winner = 'Bot Wins';
      return true;
    }
    if (this.round >= 9) {
      this.winner = 'Game Ends in a Tie';
      return true;
    }

    return false;
  }

  setValue(index: number) {
    if (this.gameState) {
      if (this.gameBoard[index] !== 'X' && this.gameBoard[index] !== 'O') {
        this.gameBoard[index] = this.tiles[index] = this.activePlayer;
        this.round++;
        this.changePlayer();
      }
      if (this.checkGameEnd(this.gameBoard)) {
        this.gameState = false;
      }
    }
  }

  botTurn(board: string[], player: string) {
    let availableIndices = this.gameBoard.filter(
      (space: any) => space !== 'X' && space !== 'O'
    );
    if (this.winning(board, this.Player)) {
      return {
        score: -10,
      };
    } else if (this.winning(board, this.Bot)) {
      return {
        score: 10,
      };
    } else if (availableIndices.length === 0) {
      return {
        score: 0,
      };
    }
    let moves: any = [];

    for (let i = 0; i < availableIndices.length; i++) {
      let move: any = {};
      move.index = this.gameBoard[availableIndices[i]];
      board[availableIndices[i]] = player;

      if (player == this.Bot) {
        const g = this.botTurn(board, this.Player);
        move.score = g!.score;
      } else {
        const g = this.botTurn(board, this.Bot);
        move.score = g!.score;
      }
      this.gameBoard[availableIndices[i]] = move.index;
      moves.push(move);
    }

    let bestMove;
    if (player === this.Bot) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove!];
  }

  winning(board: string[], player: string) {
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
