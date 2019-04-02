import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GamingService } from '../gaming.service';
import { PlayerMovement, Players } from '../Utilities/enumerators';
import { GameResults } from '../Entities/game-results';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { GameStatistics } from '../Entities/game-statistics';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public roundNumber = 1;
  public currentPlayer = "Player 1";
  public gamingOptions: any;
  public currentGameStats: any;
  public player1Movement;
  public player2Movement;
  public gameResults: GameResults;
  public results: any[];
  public finishedTurn = false;
  public player1Wins = 0;
  public player2Wins = 0;
  public winnerModalOpen = false;
  public playersNames: any;
  public playerWinner: string;
  public gameStats: GameStatistics;

  public gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private _gamingService: GamingService,
    private _data: DataService,
    private route: Router
  ) {
    this.gameResults = new GameResults();
    this.results = [];
    this.gameStats = new GameStatistics();
  }

  ngOnInit() {

    this.gameForm = this.formBuilder.group({
      playerMove: ['', Validators.required]
    });

    this.gamingOptions = this._gamingService.getGamingOptions();

    this._data.currentMessage.subscribe(message => this.playersNames = message)

    this.gameStats.Player1Name = this.playersNames.Player1;
    this.gameStats.Player2Name = this.playersNames.Player2;

    this.checkPlayers();
  }

  private checkPlayers() {
    if (this.playersNames == undefined) {
      this.route.navigateByUrl("/");
      return;
    }
  }

  public onSubmit() {
    this.getMovement();
    console.log(this.gameResults);
    this.getTurnWinner();
    this.currentPlayer = this._gamingService.changeCurrentPlayer(this.currentPlayer);
    this.gameForm.get('playerMove').setValue("");
    this.testWinner();
  }

  public getMovement() {
    this.gameResults.round = this.roundNumber;
    if (this.currentPlayer === Players.Player1) {
      this.gameResults.player1Move = this.gameForm.get('playerMove').value;
      this.finishedTurn = false;
    }
    else {
      this.gameResults.player2Move = this.gameForm.get('playerMove').value;
      this.roundNumber++;
      this.finishedTurn = true;
    }
  }

  public getTurnWinner() {
    if (this.finishedTurn) {
      var playerWin = this._gamingService.getTurnWinner(this.gameResults.player1Move, this.gameResults.player2Move, this.playersNames);
      this.gameResults.winnerName = playerWin.player;
      this.gameResults.winnerNickName = playerWin.playerName;

      if (this.gameResults.winnerName === Players.Player1) { this.player1Wins++ }
      if (this.gameResults.winnerName === Players.Player2) { this.player2Wins++ }

      this.gameResults.currentScore = this.player1Wins + " - " + this.player2Wins;
      this.gameStats.FinalScore = this.gameResults.currentScore;

      this.results.push(this.gameResults);

      this.gameResults = new GameResults();
    }
  }

  public testWinner() {
    if (this.player1Wins == 3) {
      this.playerWinner = "Player 1 - " + this.playersNames.Player1;
      this.winnerModalOpen = true;
      this.gameStats.PlayerWinner = this.playersNames.Player1;
      this._gamingService.insertGameResults(this.gameStats);
    }

    if (this.player2Wins == 3) {
      this.playerWinner = "Player 2 - " + this.playersNames.Player2;
      this.winnerModalOpen = true;
      this.gameStats.PlayerWinner = this.playersNames.Player2;
      this._gamingService.insertGameResults(this.gameStats);
    }

  }

  public restartService() {
    this.route.navigateByUrl("/");
  }

}
