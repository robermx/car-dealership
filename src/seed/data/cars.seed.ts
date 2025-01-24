import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.tnterface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
    year: 2019,
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
    year: 2020,
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Sentra',
    year: 2025,
  },
];
