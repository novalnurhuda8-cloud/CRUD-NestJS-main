import {
  Delete,
  Injectable,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { type Mahasiswa } from './interfaces/mahasiswa.interface.js';

@Injectable()
export class MahasiswaService {
  listMahasiswa: Mahasiswa[] = [
    { id: 1, nim: 240414001, nama: 'Noval', kelas: '3-IF' },
    { id: 2, nim: 240414002, nama: 'Noval', kelas: '3-IF' },
    { id: 3, nim: 240414003, nama: 'Noval', kelas: '3-IF' },
    { id: 4, nim: 240414004, nama: 'Noval', kelas: '3-IF' },
    { id: 5, nim: 240414005, nama: 'Noval', kelas: '3-IF' },
  ];

  getAll() {
    return this.listMahasiswa;
  }

  findOne(nim: number) {
    const mahasiswa = this.listMahasiswa.find(
      (item) => item.nim === nim || item.id == nim,
    );

    if (!mahasiswa) {
      throw new NotFoundException('Mahasiswa tidak ditemukan');
    }

    return mahasiswa;
  }

  create(data: Omit<Mahasiswa, 'id'>): Mahasiswa {
    const nextId = this.listMahasiswa.length
      ? Math.max(...this.listMahasiswa.map((mahasiswa) => mahasiswa.id)) + 1
      : 1;

    const newMahasiswa: Mahasiswa = {
      id: nextId,
      ...data,
    };

    this.listMahasiswa.push(newMahasiswa);
    return newMahasiswa;
  }

  update(id: number, data: Omit<Mahasiswa, 'id'>): Mahasiswa {
    const mahasiswa = this.findOne(id);
    mahasiswa.nama = data.nama;
    mahasiswa.nim = data.nim;
    mahasiswa.kelas = data.kelas;

    return mahasiswa;
  }

  @Delete(':id')
  remove(id: number): Mahasiswa {
    const index = this.listMahasiswa.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException('Mahasiswa tidak ditemukan');
    }

    const [mahasiswa] = this.listMahasiswa.splice(index, 1);
    return mahasiswa;
  }

  patch(id: number, data: Partial<Omit<Mahasiswa, 'id'>>): Mahasiswa {
    const mahasiswa = this.findOne(id);

    Object.assign(mahasiswa, data);
    return mahasiswa;
  }
}
