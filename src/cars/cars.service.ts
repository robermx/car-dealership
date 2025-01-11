import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X6',
      year: 2020,
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'Q8',
      year: 2021,
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'GLE',
      year: 2020,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
}
