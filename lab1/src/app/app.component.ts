import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { ScientistsComponent } from '../scientists/scientists.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, ScientistsComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';
}
