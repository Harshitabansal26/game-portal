import { Component, OnInit } from '@angular/core';
import { Game } from '../../services/game';
import { GameCard } from '../../components/game-card/game-card';

@Component({
  selector: 'app-games',
  standalone: false,

  templateUrl: './games.html',
  styleUrls: ['./games.css']
})
export class Games implements OnInit {
  games: any[] = [];

  constructor(private gameService: Game) { }

  ngOnInit() {
    this.gameService.getGames().subscribe({
      next: (res: any) => {
        const list = res?.result?.gameList || [];
        this.games = list.map((g: any) => {
          let gameDateTime: Date | null = null;

          if (g.gameDate && g.gameTime) {
            // produce ISO-like string "YYYY-MM-DDTHH:MM:SS"
            const dateStr = `${g.gameDate}T${g.gameTime}`;
            const d = new Date(dateStr);
            gameDateTime = isNaN(d.getTime()) ? null : d;
          } else if (g.gameDate) {
            const d = new Date(g.gameDate);
            gameDateTime = isNaN(d.getTime()) ? null : d;
          }

          let howToPlayLines: string[] = [];
          if (g.howToPlay) {
            howToPlayLines = g.howToPlay
              .split(/(?<!\d)\.(?:\s+|$)/g)
              .map((line: string) => line.trim())
              .filter((line: string) => line.length > 0);
              console.log('howToPlayLines:', howToPlayLines);
          }

            return { ...g, gameDateTime, howToPlayLines };
          });
      },
      error: err => console.error('getGames error', err)
    });
  }
}
