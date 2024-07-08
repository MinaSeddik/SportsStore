export class Car {
  id: number;
  make: string;
  model: string;
  color: string;
  year: number;

  constructor(car) {
    {
      this.id = car.id;
      this.make = car.make || '';
      this.model = car.model || '';
      this.color = car.color || '';
      this.year = new Date(car.year).getFullYear();
    }
  }
}
