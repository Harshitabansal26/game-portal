import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.html',
  styleUrls: ['./game-card.css'],
  standalone: false
  
})
export class GameCard {
  @Input() game: any;
  @Input() logo: string = '';
  @Input() specialIcons: any[] = [];
  @Input() backCloseIcon: string = '';
  
  @Input() infoIcon: string = 'assets/images/icons/info-dark-blue.svg';

  flipped = false;

  toggleFlip() {
    this.flipped = !this.flipped;
  }
}
