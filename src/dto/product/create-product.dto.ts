import { BaseDto } from '../base.dto';

export class CreateProductDto extends BaseDto {
    name: string;
    price: number;
}