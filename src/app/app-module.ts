import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Games } from './pages/games/games';
import { GameCard } from './components/game-card/game-card';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    App,
    Games,
    GameCard,
    Navbar,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
