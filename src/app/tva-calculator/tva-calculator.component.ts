import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tva-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './tva-calculator.component.html',
  styleUrl: './tva-calculator.component.css'
})
export class TvaCalculatorComponent {
  priceHT: number = 0; // Prix hors taxe
  tvaRate: number = 20; // Taux de TVA (par défaut 20%)
  priceTTC: number = 0; // Prix toutes taxes comprises

  calculateTTC(): void {
    this.priceTTC = this.priceHT + (this.priceHT * this.tvaRate / 100);
  }
}
