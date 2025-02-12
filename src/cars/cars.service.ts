import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v7 as uuid } from 'uuid';
import { CarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: ' Toyota', model: '2023' },
    { id: uuid(), brand: ' Jeep', model: '2024' },
    { id: uuid(), brand: ' Nissan', model: '2022' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found `);
    }
    return car;
  }

  create(carDto: CarDto) {
    const car: Car = {
      id: uuid(),
      // brand: carDto.brand,
      // model: carDto.model
      ...carDto,
    };
    this.cars.push(car);
  }

  update(id: string, carDto: CarDto) {
    const car = this.cars.find((car) => car.id === id);
    car.model = carDto.model;
    car.brand = carDto.brand;
		return car;
  }
}
