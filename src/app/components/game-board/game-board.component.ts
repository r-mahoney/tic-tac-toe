import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GameService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent implements OnInit {
  board: string[] = [];
  @Input() gameState: boolean = true;
  @Output() resetGame: EventEmitter<any> = new EventEmitter();

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.board = this.gameService.getBoard();
  }

  setSquare(index: number) {
    this.gameService.setValue(index);
  }

  onResetGame() {
    this.gameService.resetGame();
  }

  setGameDifficulty(value: string) {
    this.gameService.setGameDifficulty(value);
    console.log(this.gameService.difficulty);
  }
}
