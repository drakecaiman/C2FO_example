import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../../classes/game';
import { GameService } from '../../services/game/game.service';

@Component({
	selector: 'games-display',
	templateUrl: './games-display.component.html',
	styleUrls: ['./games-display.component.css']
})

export class GamesDisplayComponent
{
	isEditing: boolean = false

	get isForEditing(): boolean
	{
        return !this.isEditing || undefined
    }

	get hideForEditing(): boolean
	{
        return this.isEditing || undefined
    }

	private currentGame: Game
	private oldGame: Game
	@Input() set game(value: Game)
	{
		this.isEditing = false
		this.currentGame = value
		this.oldGame = { ...value }
	}
	get game()
	{
		return this.currentGame
	}
	@Output() gameRemoved = new EventEmitter<Game>()
	@Output() gameReverted = new EventEmitter<Game>()
	@Output() gameEdited = new EventEmitter<Game>()

	constructor(private gameService: GameService) {}


	onDeleteGame(game: Game) : void
	{
		this.gameService.deleteGame(game).subscribe( () => { this.gameRemoved.emit(game) })
	}

	toggleEditing() : void
	{
		this.isEditing = !this.isEditing
	}

	createGame() : void
	{
		this.currentGame = new Game()
		this.isEditing = true
	}

	onCancel() : void
	{
		this.gameReverted.emit(this.oldGame)
		this.toggleEditing()
	}

	onSave() : void
	{
		this.gameEdited.emit(this.currentGame)
		this.toggleEditing()
	}
}
