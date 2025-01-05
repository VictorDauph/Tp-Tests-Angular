import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TvaCalculatorComponent } from "./tva-calculator/tva-calculator.component";

@Component({
  selector: 'app-root',
  imports: [TvaCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tp-Tests-Angular';
}
