import { Component } from '@angular/core';
import { Scientists } from '../types';

@Component({
  selector: 'scientists',
  standalone: true,
  imports: [],
  templateUrl: './scientists.component.html',
  styleUrl: './scientists.component.css'
})
export class ScientistsComponent {
  scientists: Scientists[] = [
    { id: 1, first: "thomas", last: "edison", year: 1847, passed: 1931},
    { id: 2, first: "albert", last: "einstein", year: 1879, passed: 1955}
  ]
}
