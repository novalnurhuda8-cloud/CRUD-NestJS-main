
import {Body,Controller,Delete,Get,Param,ParseIntPipe,Patch,Post,Put,} from '@nestjs/common';
import { BukuService } from './buku.service.js';
import { Buku } from './interfaces/buku.interface.js';

@Controller('buku')
export class BukuController {
    constructor(
        private readonly bukuService: BukuService,
    ) {}

    @Get()
    getAll() {
        return this.bukuService.getAll();
    }

    @Get(':id')
    findOne(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.bukuService.findOne(id);
    }

    @Post()
    create(
        @Body() body: Omit<Buku, 'id'>,
    ) {
        return this.bukuService.create(body);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Omit<Buku, 'id'>,
    ) {
        return this.bukuService.update(id, body);
    }

    @Patch(':id')
    patch(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Partial<Omit<Buku, 'id'>>,
    ) {
        return this.bukuService.patch(id, body);
    }

    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.bukuService.remove(id);
    }
}
