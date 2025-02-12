import { MESSAGES } from '@nestjs/core/constants';
import { IsString } from 'class-validator';

export class CarDto {
  @IsString()
  readonly brand: String;
  @IsString()
  readonly model: string;
}
