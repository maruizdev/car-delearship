import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: ' Toyota', model: '2023' },
    { id: 2, brand: ' Jeep', model: '2024' },
    { id: 3, brand: ' Nissan', model: '2022' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found `);
    }
    return car;
  }

  create() {}
}
