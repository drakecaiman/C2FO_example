import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Game } from '../../classes/game';


@Injectable()
export class GameService
{
	constructor(private http: HttpClient) {}

	getGames() : Observable<Game[]>
	{
		return this.http.get<Game[]>("http://localhost:3000/api/games")
	}

	deleteGame(game: Game) : Observable<Game>
	{
		return this.http.delete<Game>(`http://localhost:3000/api/games/${game.id}`)
	}

	saveGame(game: Game) : Observable<Game>
	{
		if (game.id)
		{
			return this.http.post<Game>(`http://localhost:3000/api/games/${game.id}`, game)
		}
		else
		{
			return this.http.put<Game>(`http://localhost:3000/api/games/`, game)
		}
	}
}
