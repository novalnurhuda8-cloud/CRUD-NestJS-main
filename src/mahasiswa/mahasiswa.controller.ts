import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service.js';
import { Mahasiswa } from './interfaces/mahasiswa.interface.js';

@Controller('mahasiswa')
export class MahasiswaController {
    constructor(
        private readonly mahasiswaService: MahasiswaService,
    ) { }

    @Get()
    getAll() {
        return this.mahasiswaService.getAll();
    }

    @Get("getone")
    getOne() {
        return this.mahasiswaService.getAll().find(x => x.nim = 240414006);
    }

    @Get(':nim')
    findOne(@Param('nim', ParseIntPipe) nim: number) {
        return this.mahasiswaService.findOne(nim);
    }

    @Post()
    create(
        @Body() body: Omit<Mahasiswa, 'id'>,
    ) {
        return this.mahasiswaService.create(body);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Omit<Mahasiswa, 'id'>,
    ) {
        return this.mahasiswaService.update(id, body);
    }

    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.mahasiswaService.remove(id);
    }

    @Patch(':id')
    patch(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Partial<Omit<Mahasiswa, 'id'>>,
    ) {
        return this.mahasiswaService.patch(id, body);
    }

}
