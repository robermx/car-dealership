import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    description: `Toyota Motor Corporation is a Japanese automotive company that designs, manufactures, and sells cars, trucks, and other vehicles. Toyota is one of the world's largest and most successful car manufacturers`,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    description: `Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation known as a manufacturer of automobiles, motorcycles, and power equipment.`,
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Ford',
    description: `Ford Motor Company is an American multinational automaker that has its main headquarters in Dearborn, Michigan, a suburb of Detroit.`,
    createdAt: new Date().getTime(),
  },
];
