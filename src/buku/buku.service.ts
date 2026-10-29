import { Injectable, NotFoundException } from '@nestjs/common';
import { type Buku } from './interfaces/buku.interface.js';

@Injectable()
export class BukuService {
  listBuku: Buku[] = [
    {
      id: 1,
      judul_buku: 'Filosofi Teras',
      genre: 'Pengembangan Diri',
      penulis: 'Henry Manampiring',
      penerbit: 'Penerbit Buku Kompas',
      tahun_terbit: 2018,
    },
    {
      id: 2,
      judul_buku: 'Dilan: Dia adalah Dilanku Tahun 1990',
      genre: 'Romantis',
      penulis: 'Pidi Baiq',
      penerbit: 'Pastel Books',
      tahun_terbit: 2014,
    },
    {
      id: 3,
      judul_buku: 'Negeri 5 Menara',
      genre: 'Novel',
      penulis: 'Ahmad Fuadi',
      penerbit: 'Gramedia Pustaka Utama',
      tahun_terbit: 2009,
    },
  ];

  getAll(): Buku[] {
    return this.listBuku;
  }

  findOne(id: number): Buku {
    const buku = this.listBuku.find((item) => item.id === id);

    if (!buku) {
      throw new NotFoundException('Buku tidak ditemukan');
    }

    return buku;
  }

  create(data: Omit<Buku, 'id'>): Buku {
    const nextId = this.listBuku.length
      ? Math.max(...this.listBuku.map((buku) => buku.id)) + 1
      : 1;

    const newBuku: Buku = {
      id: nextId,
      ...data,
    };

    this.listBuku.push(newBuku);

    return newBuku;
  }

  update(id: number, data: Omit<Buku, 'id'>): Buku {
    const buku = this.findOne(id);

    buku.judul_buku = data.judul_buku;
    buku.genre = data.genre;
    buku.penulis = data.penulis;
    buku.penerbit = data.penerbit;
    buku.tahun_terbit = data.tahun_terbit;

    return buku;
  }

  patch(id: number, data: Partial<Omit<Buku, 'id'>>): Buku {
    const buku = this.findOne(id);

    Object.assign(buku, data);

    return buku;
  }

  remove(id: number): Buku {
    const index = this.listBuku.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException('Buku tidak ditemukan');
    }

    const [buku] = this.listBuku.splice(index, 1);

    return buku;
  }
}
