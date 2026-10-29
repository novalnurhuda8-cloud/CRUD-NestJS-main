import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module.js';
import { BukuModule } from './buku/buku.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'dzaki-nestjs-sesi3',
    }),
    MahasiswaModule,
    BukuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
