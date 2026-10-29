import { Module } from '@nestjs/common';
import { MahasiswaController } from './mahasiswa.controller.js';
import { MahasiswaService } from './mahasiswa.service.js';

@Module({
  controllers: [MahasiswaController],
  providers: [MahasiswaService],
})
export class MahasiswaModule {}