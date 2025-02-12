import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDto } from './dto/create-car.dto';

@Controller('cars')
	// @UsePipes( ValidationPipe)
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id: id });
    return this.carService.findOneById(id);
  }

  @Post()
  create(@Body() carDto: CarDto) {
		return this.carService.create(carDto);
  }

  @Patch(':id')
  update(@Body() carDto: CarDto, @Param('id', ParseUUIDPipe) id: string) {
		return this.carService.update(id, carDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }

}
