import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './car.tnterface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'BMW',
      model: 'X6',
      year: 2020,
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'Q8',
      year: 2021,
    },
    {
      id: uuid(),
      brand: 'Mercedes',
      model: 'GLE',
      year: 2020,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
}
