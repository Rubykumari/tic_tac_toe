import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  squares: any[] = [];
  IsXNext: boolean = true;
  winner: any = null;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
  }

  get player(){
    return this.IsXNext ? 'X' : 'O';
  }

  makeMove(ids:number){
    if(!this.squares[ids]){
      this.squares.splice(ids, 1, this.player)
      this.IsXNext = !this.IsXNext;
    } 
    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const winnerLines =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i = 0; i < winnerLines.length; i++){
      const [a, b, c] = winnerLines[i];
      if(this.squares[a] &&
        this.squares[a] == this.squares[b] &&
        this.squares[a] == this.squares[c]
        ){
          return this.squares[a];
        }
    }
    return null;
  }
}
