import { Component } from '@angular/core';
import { GameService } from './services/game-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TicTacToe-Project';
  constructor(public gameService: GameService) {}

  winnerFunc() {
    if (this.gameService.winner === 'Bot Wins') {
      return 'red';
    } else if (this.gameService.winner === 'Game Ends in a Tie') {
      return 'gray';
    } else {
      return 'green';
    }
  }
}
