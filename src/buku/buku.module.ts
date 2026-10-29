import { Module } from '@nestjs/common';
import { BukuController } from './buku.controller.js';
import { BukuService } from './buku.service.js';

@Module({
  controllers: [BukuController],
  providers: [BukuService]
})
export class BukuModule {}
