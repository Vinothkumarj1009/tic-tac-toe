import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToeComponent } from './game/tic-tac-toe.component/tic-tac-toe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TicTacToeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tic-tac-toe');
}
