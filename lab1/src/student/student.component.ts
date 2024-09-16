import { Component } from '@angular/core';

@Component({
  selector: 'student-card',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  information = {
    name: "Phan Dang Duc",
    date: "26/04/2002",
    gen: "male",
    mark: 10
  }
}
