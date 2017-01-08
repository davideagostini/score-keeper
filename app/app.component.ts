import { AppModule } from './app.module';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { PlayerDataService } from './player-data.service';
import { Player } from './player';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit{ 
  name = 'Score Keeper';
  players: Player[];
  temp: Player[] = [
    {"id": 1, "name": "Stephen Curry", "point": 2, "current_point": 2},
    {"id": 2, "name": "Tim Duncan", "point": 3, "current_point": 3},
    {"id": 3, "name": "Kevin Durant", "point": 3, "current_point": 3},
  ];
  sumPoint = 0;

  @Input()
  newPlayer: Player = new Player();

  constructor(private playerDataService: PlayerDataService) {}

  addPlayer(): void {
    if(this.newPlayer.name) {
      this.playerDataService.addPlayer(this.newPlayer);
      this.newPlayer = new Player();
    }
  }

  updateNamePlayer(player: Player) {
    this.newPlayer = player;
  }

  updatePlayerPointTo2(player: Player): void {
    this.playerDataService.updatePlayerPointTo2(player);
    this.temp.push({"id": player.id, "name": player.name, "current_point": 2, "point": player.point});
    this.getAllPoints();
  }

  updatePlayerPointTo3(player: Player): void {
    this.playerDataService.updatePlayerPointTo3(player);
    this.temp.push({"id": player.id, "name": player.name, "current_point": 3, "point": player.point});
    this.getAllPoints();
  }

  removePoint(player: Player) {
    this.playerDataService.deletePointById(player);
    this.temp.splice(this.temp.indexOf(player), 1);
    this.getAllPoints();
  }

  getPlayers(): void {
    this.playerDataService.getAllPlayers().then(players => this.players = players);
  }

  getAllPoints() {
    this.sumPoint = this.playerDataService.getAllPoints();
    this.getPlayers();
  }

  ngOnInit(): void {
    this.getPlayers();
    this.getAllPoints();
  }
}
