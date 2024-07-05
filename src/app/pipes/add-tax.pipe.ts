import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTax',
  standalone: true
})
export class AddTaxPipe implements PipeTransform {

  defaultRate: number = 10;

  transform(value: number, rate: number): number {
    let valueNumber = Number.parseFloat(String(value));
    let rateNumber = rate == undefined ? this.defaultRate : Number.parseInt(String(rate));
    return valueNumber + (valueNumber * (rateNumber / 100));
  }

}
