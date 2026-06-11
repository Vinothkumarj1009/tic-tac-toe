import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Player = 'X' | 'O';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent {

  board: (Player | null)[] = Array(9).fill(null);

  currentPlayer: Player = 'X';

  gameStarted = false;

  gameOver = false;

  winner: Player | 'DRAW' | null = null;

  startGame(): void {
    this.board = Array(9).fill(null);
    this.gameOver = false;
    this.winner = null;
    this.gameStarted = true;

    this.currentPlayer =
      Math.random() > 0.5 ? 'X' : 'O';
  }

  restartGame(): void {
    this.startGame();
  }

  makeMove(index: number): void {

    if (!this.gameStarted) return;

    if (this.gameOver) return;

    if (this.board[index]) return;

    this.board[index] = this.currentPlayer;

    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
      this.gameOver = true;
      return;
    }

    if (this.board.every(cell => cell !== null)) {
      this.winner = 'DRAW';
      this.gameOver = true;
      return;
    }

    this.currentPlayer =
      this.currentPlayer === 'X'
        ? 'O'
        : 'X';
  }

  private checkWinner(): boolean {

    const wins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],

      [0,3,6],
      [1,4,7],
      [2,5,8],

      [0,4,8],
      [2,4,6]
    ];

    return wins.some(([a,b,c]) => {
      return (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      );
    });
  }
}