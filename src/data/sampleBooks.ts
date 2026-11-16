import type { Book } from './books';

/** Koleksi contoh — dipakai saat database tidak bisa dihubungi agar aplikasi tetap terisi. */
const raw: [string, string, string, number, number, number][] = [
  ['Senja di Ujung Dermaga', 'Nadia Pramesti', 'Romansa', 128400, 4.8, 0],
  ['Kerajaan Bayangan', 'Arya Wiratama', 'Fantasi', 96300, 4.7, 15000],
  ['Rahasia Kelas 12 IPA', 'Salsa Kirana', 'Remaja', 210500, 4.6, 0],
  ['Detektif Kota Tua', 'Bima Santoso', 'Misteri', 54200, 4.5, 20000],
  ['Langit yang Sama', 'Rinjani Putri', 'Romansa', 87900, 4.7, 0],
  ['Pewaris Naga Terakhir', 'Dimas Prakoso', 'Fantasi', 143000, 4.9, 25000],
  ['Surat untuk Ibu', 'Laras Anindya', 'Fiksi Umum', 39800, 4.8, 0],
  ['Malam Tanpa Bintang', 'Gilang Ramadhan', 'Horor', 61200, 4.4, 0],
  ['CEO Dingin itu Tetanggaku', 'Ayu Lestari', 'Romansa', 312000, 4.5, 0],
  ['Akademi Sihir Nusantara', 'Fajar Nugroho', 'Fantasi', 76500, 4.6, 18000],
  ['Kode Merah', 'Reza Hidayat', 'Thriller', 45300, 4.5, 22000],
  ['Kita dan Hujan Bulan Juni', 'Tiara Maharani', 'Puisi', 28700, 4.9, 0],
];

export const SAMPLE_BOOKS: Book[] = raw.map(([title, author, category, reads, rating, price], i) => ({
  id: `sample-${i + 1}`,
  title,
  author_name: author,
  cover: `https://picsum.photos/seed/litera${i + 7}/360/480`,
  cover_url: `https://picsum.photos/seed/litera${i + 7}/360/480`,
  synopsis: `${title} adalah kisah ${category.toLowerCase()} karya ${author} yang telah menemani ribuan pembaca Litera. Ikuti perjalanan tokoh-tokohnya bab demi bab.`,
  category,
  price,
  is_free: price === 0,
  is_borrowable: price > 0,
  borrow_duration: 7,
  status: 'published',
  total_reads: reads,
  unique_readers: reads,
  rating_avg: rating,
  rating_count: Math.round(reads / 40),
}));
