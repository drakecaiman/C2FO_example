import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../../classes/game';
import { GameService } from '../../services/game/game.service';

@Component({
	selector: 'games-list',
	templateUrl: './games-list.component.html',
	styleUrls: ['./games-list.component.css']
})
export class GamesListComponent
{
	@Input() selectedGame	: Game
	@Input() games			: Game[]

	@Output() selectGame = new EventEmitter<Game>()

	constructor(private gameService: GameService) {}

	onSelectGame(game: Game) : void
	{
		this.selectGame.emit(game)
		console.log(`${game ? game.name : "no game"} selected`)
	}
}
