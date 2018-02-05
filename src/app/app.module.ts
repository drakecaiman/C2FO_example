import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesDisplayComponent } from './components/games-display/games-display.component';
import { StopPropagationClickDirective } from './directives/stop-propagation-click/stop-propagation-click.directive';

import { GameService } from './services/game/game.service';

@NgModule({
	declarations: [
		AppComponent,
		GamesListComponent,
		GamesDisplayComponent,
		StopPropagationClickDirective
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule
	],
	providers: [GameService],
	bootstrap: [AppComponent]
})
export class AppModule { }
