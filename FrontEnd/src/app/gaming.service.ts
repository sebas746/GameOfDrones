import { Injectable } from '@angular/core';
import { PlayerMovement, Players } from './Utilities/enumerators';
import { RestGameStatsService } from './RestServices/rest-game-stats.service';
import { environment } from 'src/environments/environment';
import { GameStatistics } from './Entities/game-statistics';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamingService {

  private gameList = [
    {
      'id': '1',
      'value': 'Rock'
    },
    {
      'id': '2',
      'value': 'Paper'
    },
    {
      'id': '3',
      'value': 'Scissors'
    }
  ];

  constructor(private restService: RestGameStatsService) { }

  public getGamingOptions() {
    return this.gameList;
  }

  public changeCurrentPlayer(player) {
    if (player === Players.Player1) {
      return Players.Player2;
    }
    return Players.Player1;
  }

  public getTurnWinner(player1Move, player2Move, playersNames) {
    var playerWinner: any = [];
    if (player1Move != undefined && player2Move != undefined) {
      switch (player1Move) {
        case PlayerMovement.Rock: {
          if (player2Move === PlayerMovement.Paper) {
            playerWinner.player = Players.Player2;
            playerWinner.playerName = playersNames.Player2;

          }
          else if (player2Move === PlayerMovement.Scissors) {
            playerWinner.player = Players.Player1;
            playerWinner.playerName = playersNames.Player1;
          }
          break;
        }
        case PlayerMovement.Paper: {
          if (player2Move === PlayerMovement.Scissors) {
            playerWinner.player = Players.Player2;
            playerWinner.playerName = playersNames.Player2;
          }
          else if (player2Move === PlayerMovement.Rock) {
            playerWinner.player = Players.Player1;
            playerWinner.playerName = playersNames.Player1;
          }
          break;
        }
        case PlayerMovement.Scissors: {
          if (player2Move === PlayerMovement.Rock) {
            playerWinner.player = Players.Player2;
            playerWinner.playerName = playersNames.Player2;
          }
          else if (player2Move === PlayerMovement.Paper) {
            playerWinner.player = Players.Player1;
            playerWinner.playerName = playersNames.Player1;
          }
          break;
        }
        default: {
          //statements; 
          break;
        }
      }
    }

    return playerWinner;

  }

  public getGameStatistics() {
    const url = environment.GetAllGameStatistics;
    return this.restService.ResolveGetRequestObservable(url);
  }

  public insertGameResults(gameStatistics: GameStatistics) {
    const url = environment.InsertGameStatistics;
    this.restService.ResolvePostRequest(url, gameStatistics)
      .then(data => {
        return data;
      })
      .catch(error => {
        return error;
      });
  }


}
