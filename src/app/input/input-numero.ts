import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-numero',
  standalone: false,
  templateUrl: './input-numero.html',
  styleUrls: ['./input-numero.scss']
})
export class InputNumero {
  @Input() cantidad!: number;
  @Input() max!: number;

  @Output() cantidadChange = new EventEmitter<number>();
  @Output() stockErrorChange = new EventEmitter<boolean>(); // Nuevo Output

  showStockError: boolean = false;

  upQuantity(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.setStockError(false);
      this.emitChange();
    } else {
      this.setStockError(true);
    }
  }

  downQuantity(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.setStockError(false);
      this.emitChange();
    }
  }

  validateQuantity(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);

    if (value > this.max) {
      this.cantidad = this.max;
      this.setStockError(true);
    } else {
      this.cantidad = value;
      this.setStockError(false);
    }

    this.emitChange();
  }

  private emitChange(): void {
    this.cantidadChange.emit(this.cantidad);
  }

  private setStockError(value: boolean): void {
    this.showStockError = value;
    this.stockErrorChange.emit(value); // Emitís el estado hacia el componente padre
  }
}

