import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   description: `Toyota Motor Corporation is a Japanese automotive company that designs, manufactures, and sells cars, trucks, and other vehicles. Toyota is one of the world's largest and most successful car manufacturers`,
    //   createdAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    this.brands.push({
      ...createBrandDto,
      id: uuid(),
      createdAt: new Date().getTime(),
    });

    return createBrandDto;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id '${id}' not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (!brand) {
      throw new NotFoundException(`Brand with id '${id}' not found`);
    }

    const newBrand = {
      ...brand,
      ...updateBrandDto,
      updatedAt: new Date().getTime(),
    };

    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands[index] = newBrand;
    return newBrand;
  }

  remove(id: string) {
    const index = this.brands.findIndex((brand) => brand.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand with id '${id}' not found`);
    }
    return this.brands.splice(index, 1);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
