import { Player } from './player';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerDataService {

    lastId: number = 2;
    players: Player[] = [
        {"id": 1, "name": "Stephen Curry", "point": 2, "current_point": 2},
        {"id": 2, "name": "Tim Duncan", "point": 3, "current_point": 3},
        {"id": 3, "name": "Kevin Durant", "point": 3, "current_point": 3},
    ];

    //simulate POST
    addPlayer(player: Player): PlayerDataService {
        let p = this.getPlayerById(player.id);
        if(!p) {
            if(!player.id) {
                player.id = ++this.lastId;
            }
            player.point = 0; //set a default point
            this.players.push(player);
        }
        return this;
    }

    //simulate PUT
    updatePlayerPointTo2(player: Player) {
        let p = this.getPlayerById(player.id);
        if (!p) {
            return null;
        }
        p.point += 2;
        return p;
    }
    
    //simulate PUT
    updatePlayerPointTo3(player: Player) {
        let p = this.getPlayerById(player.id);
        if (!p) {
            return null;
        }
        p.point += 3;
        return p;
    }

    //simulate DELETE
    deletePointById(player: Player) {
        let p = this.getPlayerById(player.id);
        if (!p) {
            return null;
        }
        p.point -= player.current_point;
        return this;
    }

    //simulate GET
    getAllPlayers(): Promise<Player[]> {
        return Promise.resolve(this.players.sort(function(a,b) {
             return b.point - a.point;
        }));
    }

    // Simulate GET /todos/:id
    getPlayerById(id: number): Player {
        return this.players
          .filter(player => player.id === id)
          .pop();
    }

    getAllPoints(): number {
        let sum = 0;
        for(let i = 0; i < this.players.length; i++)
            sum += this.players[i].point;
        
        return sum;

    }
  
}