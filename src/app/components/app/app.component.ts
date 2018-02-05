import { Component, OnInit } from '@angular/core';

import { Game } from '../../classes/game';
import { GameService } from '../../services/game/game.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
	currentGame : Game
	games		: Game[]

	constructor(private gameService: GameService) {}

	ngOnInit()
	{
		this.getGames()
	}

	setCurrentGame(game?: Game) : void
	{
		this.currentGame = game
	}

	getGames() : void
	{
		this.gameService.getGames().subscribe((games) => this.games = games)
	}

	revertCurrentGame(game: Game) : void
	{
		let index = this.games.findIndex((findGame) => findGame.id === game.id)
		if (index >= 0)
		{
			this.games[index] = game
			this.currentGame = game
		}
	}

	clearCurrentGame(game?: Game) : void
	{
		this.setCurrentGame()
	}

	removeCurrentGame(game?: Game) : void
	{
		this.setCurrentGame()
		this.games = this.games.filter((currentGame) => currentGame !== game)
	}

	saveCurrentGame(game: Game) : void
	{
		if(!game.id)
		{
			this.setCurrentGame(game)
			this.games.push(game)
		}
		this.gameService.saveGame(game).subscribe()
	}
}
