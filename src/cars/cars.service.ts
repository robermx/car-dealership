import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.tnterface';
import { CreateCarDto, UpdateCarDto } from './dtos';

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

  create(createCarDto: CreateCarDto) {
    this.cars.push({ ...createCarDto, id: uuid() });
    return createCarDto;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(
        `Car with id '${updateCarDto.id}' not found`,
      );
    }

    const car = this.findOneById(id);
    Object.assign(car, updateCarDto);
    return car;
  }

  delete(id: string) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    const [deletedCar] = this.cars.splice(index, 1);
    return deletedCar;
  }
}
