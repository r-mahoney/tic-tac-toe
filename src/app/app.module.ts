import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
