import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  @Input() starRating!: number;
  @Output() newStarEvent = new EventEmitter<number>();
  handleClick(starRating: number) {
    console.log(starRating);
    // this.starChange.emit(starRating);
    this.newStarEvent.emit(starRating);
  }
}
