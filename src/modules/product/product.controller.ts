import { Controller, Get, Post, HttpCode, Param, Query, HttpException, NotFoundException, Redirect, Body } from '@nestjs/common';
import { CreateProductDto } from 'src/dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Post('create')
    async createProduct(@Body() product: CreateProductDto) {
        return await this.productService.create(product);
    }

    @Get('id/:id')
    getProductById(@Param('id') id: string) {
        return this.productService.findById(id);
    }

    @Get('name/:name')
    getProductByName(@Param('name') name: string) {
        return this.productService.findByName(name);
    }

    @Get('all')
    async findAll() {
        return await this.productService.findAll();
    }

}
