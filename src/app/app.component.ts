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
}
