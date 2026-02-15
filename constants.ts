import { Category, MenuItem } from './types';

// Helper to get reliable Unsplash images
// Optimized: w=500 for balance between list speed and detail quality, q=75 for smaller file size
const getImg = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=500`;

// Standard description for Nasi Ramas
const DESC_NASI_RAMAS = 'Nasi Ramas lengkap. Dicampur: kuah gulai ayam, kuah gulai cincang, kuah gulai nangka, sayur nangka, sayur singkong, sambal ijo dan merah. (Bisa request kuah dipisah)';

export const MENU_ITEMS: MenuItem[] = [
  // --- PAKET NASI (MAKANAN) ---
  {
    id: 'n1',
    name: 'Nasi Rendang',
    price: 15000,
    description: `Best Seller! ${DESC_NASI_RAMAS} Daging rendang sapi pilihan dimasak kering bumbu meresap.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1628269781861-5369c762551f'), 
    isSpicy: true,
    isBestSeller: true,
    tags: ['Daging', 'Santan', 'Ramas']
  },
  {
    id: 'n2',
    name: 'Nasi Ayam Bakar',
    price: 15000,
    description: `Best Seller! ${DESC_NASI_RAMAS} Ayam bakar bumbu Padang harum dengan aroma asap.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1598515214211-89d3c73ae83b'),
    isSpicy: true,
    isBestSeller: true,
    tags: ['Ayam', 'Bakar', 'Ramas']
  },
  {
    id: 'n3',
    name: 'Nasi Ayam Goreng Serundeng',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ayam goreng garing dengan taburan serundeng kelapa gurih.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1626082927389-6cd097cdc6ec'),
    isSpicy: false,
    tags: ['Ayam', 'Goreng', 'Ramas']
  },
  {
    id: 'n4',
    name: 'Nasi Ayam Goreng Ijo',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ayam goreng disajikan dengan sambal cabai hijau segar.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1645696328330-8d4865fb8706'),
    isSpicy: true,
    tags: ['Ayam', 'Cabe Ijo', 'Ramas']
  },
  {
    id: 'n5',
    name: 'Nasi Ayam Goreng Balado',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ayam goreng disiram sambal balado merah pedas.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1565557623262-b51c2513a641'),
    isSpicy: true,
    tags: ['Ayam', 'Balado', 'Ramas']
  },
  {
    id: 'n6',
    name: 'Nasi Ayam Gulai',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ayam dimasak dalam kuah gulai santan kuning kental.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1588166524941-3bf61a9c41db'),
    isSpicy: true,
    tags: ['Ayam', 'Gulai', 'Ramas']
  },
  {
    id: 'n7',
    name: 'Nasi Ayam Rendang',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ayam dimasak bumbu rendang hingga kering.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1518119735231-9ca58961c028'),
    isSpicy: true,
    tags: ['Ayam', 'Rendang', 'Ramas']
  },
  {
    id: 'n8',
    name: 'Nasi Ikan Nila Bakar',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ikan nila segar dibakar dengan bumbu kuning spesial.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1694665406730-192934b3531f'),
    isSpicy: true,
    tags: ['Ikan', 'Bakar', 'Ramas']
  },
  {
    id: 'n9',
    name: 'Nasi Ikan Bawal Bakar',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ikan bawal bakar daging lembut.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1534483509319-7e3f28329b1d'),
    isSpicy: true,
    tags: ['Ikan', 'Bakar', 'Ramas']
  },
  {
    id: 'n10',
    name: 'Nasi Ikan Banyar Bakar',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ikan banyar bakar bumbu Padang nikmat.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1582294474320-96f1d939b4b0'),
    isSpicy: true,
    tags: ['Ikan', 'Bakar', 'Ramas']
  },
  {
    id: 'n11',
    name: 'Nasi Ikan Lele Goreng',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ikan lele goreng renyah.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1687603617300-34907996dfd2'),
    isSpicy: false,
    tags: ['Ikan', 'Goreng', 'Ramas']
  },
  {
    id: 'n12',
    name: 'Nasi Ikan Nila Goreng',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ikan nila goreng garing.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1519690889869-e705e59f72e1'),
    isSpicy: false,
    tags: ['Ikan', 'Goreng', 'Ramas']
  },
  {
    id: 'n13',
    name: 'Nasi Ikan Kembung Goreng Balado',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ikan kembung goreng disiram sambal balado.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1544378730-8b5104b1379b'),
    isSpicy: true,
    tags: ['Ikan', 'Balado', 'Ramas']
  },
  {
    id: 'n14',
    name: 'Nasi Ikan Tongkol Goreng Balado',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Potongan ikan tongkol goreng balado gurih.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1616894086111-c9189d2b274c'),
    isSpicy: true,
    tags: ['Ikan', 'Balado', 'Ramas']
  },
  {
    id: 'n15',
    name: 'Nasi Ikan Tongkol Asam Pedas',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Ikan tongkol masak kuah asam padeh segar.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1572656303110-60b642693729'),
    isSpicy: true,
    tags: ['Ikan', 'Asam Padeh', 'Ramas']
  },
  {
    id: 'n16',
    name: 'Nasi Telur Dadar',
    price: 13000,
    description: `${DESC_NASI_RAMAS} Telur dadar tebal khas Padang.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1598115663737-228747a4b08f'),
    isSpicy: false,
    tags: ['Telur', 'Ramas']
  },
  {
    id: 'n17',
    name: 'Nasi Telur Bulat Balado',
    price: 11000,
    description: `${DESC_NASI_RAMAS} Telur rebus goreng sambal balado.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1599580643750-7171d9d95f87'),
    isSpicy: true,
    tags: ['Telur', 'Balado', 'Ramas']
  },
  {
    id: 'n18',
    name: 'Nasi Perkedel',
    price: 10000,
    description: `${DESC_NASI_RAMAS} Perkedel kentang lembut.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1647432617654-e0c45152865d'),
    isSpicy: false,
    tags: ['Perkedel', 'Ramas']
  },
  {
    id: 'n19',
    name: 'Nasi Gulai Usus',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Gulai usus sapi kenyal kuah santan.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1563200782-b778742b785d'),
    isSpicy: true,
    tags: ['Jeroan', 'Gulai', 'Ramas']
  },
  {
    id: 'n20',
    name: 'Nasi Gulai Cincang',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Gulai daging cincang berlemak gurih.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1611082008897-400d3e512419'),
    isSpicy: true,
    tags: ['Daging', 'Gulai', 'Ramas']
  },
  {
    id: 'n21',
    name: 'Nasi Limpa',
    price: 15000,
    description: `${DESC_NASI_RAMAS} Limpa sapi bumbu kalio/rendang.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1574653853027-6382a532397f'),
    isSpicy: true,
    tags: ['Jeroan', 'Ramas']
  },
  {
    id: 'n22',
    name: 'Nasi Sayur',
    price: 8000,
    description: `${DESC_NASI_RAMAS} Tanpa lauk daging/ikan.`,
    category: Category.PAKET_NASI,
    imageUrl: getImg('1646700084042-83b3337a7b8e'),
    isSpicy: true,
    tags: ['Sayur', 'Ramas']
  },

  // --- LAUK / TANPA NASI ---
  {
    id: 'l1',
    name: 'Rendang (Lauk)',
    price: 13000,
    description: 'Satu potong rendang daging sapi tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1628269781861-5369c762551f'),
    isSpicy: true,
    tags: ['Daging', 'Lauk']
  },
  {
    id: 'l2',
    name: 'Ayam Bakar (Lauk)',
    price: 12000,
    description: 'Satu potong ayam bakar bumbu Padang tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1598515214211-89d3c73ae83b'),
    isSpicy: true,
    tags: ['Ayam', 'Lauk']
  },
  {
    id: 'l3',
    name: 'Ayam Goreng Serundeng (Lauk)',
    price: 12000,
    description: 'Satu potong ayam goreng serundeng tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1626082927389-6cd097cdc6ec'),
    isSpicy: false,
    tags: ['Ayam', 'Lauk']
  },
  {
    id: 'l4',
    name: 'Ayam Goreng Ijo (Lauk)',
    price: 12000,
    description: 'Satu potong ayam goreng sambal ijo tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1645696328330-8d4865fb8706'),
    isSpicy: true,
    tags: ['Ayam', 'Lauk']
  },
  {
    id: 'l5',
    name: 'Ayam Goreng Balado (Lauk)',
    price: 12000,
    description: 'Satu potong ayam goreng sambal balado tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1565557623262-b51c2513a641'),
    isSpicy: true,
    tags: ['Ayam', 'Lauk']
  },
  {
    id: 'l6',
    name: 'Ayam Gulai (Lauk)',
    price: 12000,
    description: 'Satu potong ayam gulai kuah santan tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1588166524941-3bf61a9c41db'),
    isSpicy: true,
    tags: ['Ayam', 'Lauk']
  },
  {
    id: 'l7',
    name: 'Ayam Rendang (Lauk)',
    price: 12000,
    description: 'Satu potong ayam rendang tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1518119735231-9ca58961c028'),
    isSpicy: true,
    tags: ['Ayam', 'Lauk']
  },
  {
    id: 'l8',
    name: 'Ikan Nila Bakar (Lauk)',
    price: 12000,
    description: 'Satu ekor ikan nila bakar tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1694665406730-192934b3531f'),
    isSpicy: true,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l9',
    name: 'Ikan Bawal Bakar (Lauk)',
    price: 12000,
    description: 'Satu ekor ikan bawal bakar tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1534483509319-7e3f28329b1d'),
    isSpicy: true,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l10',
    name: 'Ikan Banyar Bakar (Lauk)',
    price: 12000,
    description: 'Satu ekor ikan banyar bakar tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1582294474320-96f1d939b4b0'),
    isSpicy: true,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l11',
    name: 'Ikan Lele Goreng (Lauk)',
    price: 12000,
    description: 'Ikan lele goreng tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1687603617300-34907996dfd2'),
    isSpicy: false,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l12',
    name: 'Ikan Nila Goreng (Lauk)',
    price: 12000,
    description: 'Ikan nila goreng tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1519690889869-e705e59f72e1'),
    isSpicy: false,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l13',
    name: 'Ikan Kembung Goreng Balado (Lauk)',
    price: 12000,
    description: 'Ikan kembung balado tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1544378730-8b5104b1379b'),
    isSpicy: true,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l14',
    name: 'Ikan Tongkol Goreng Balado (Lauk)',
    price: 12000,
    description: 'Potongan ikan tongkol balado tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1616894086111-c9189d2b274c'),
    isSpicy: true,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l15',
    name: 'Ikan Tongkol Asam Pedas (Lauk)',
    price: 12000,
    description: 'Potongan ikan tongkol asam padeh tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1572656303110-60b642693729'),
    isSpicy: true,
    tags: ['Ikan', 'Lauk']
  },
  {
    id: 'l16',
    name: 'Telur Dadar (Lauk)',
    price: 5000,
    description: 'Satu potong telur dadar tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1598115663737-228747a4b08f'),
    isSpicy: false,
    tags: ['Telur', 'Lauk']
  },
  {
    id: 'l17',
    name: 'Telur Bulat Balado (Lauk)',
    price: 5000,
    description: 'Satu butir telur balado tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1599580643750-7171d9d95f87'),
    isSpicy: true,
    tags: ['Telur', 'Lauk']
  },
  {
    id: 'l18',
    name: 'Perkedel (Lauk)',
    price: 5000,
    description: 'Satu buah perkedel tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1647432617654-e0c45152865d'),
    isSpicy: false,
    tags: ['Perkedel', 'Lauk']
  },
  {
    id: 'l19',
    name: 'Gulai Usus (Lauk)',
    price: 13000,
    description: 'Gulai usus sapi semangkuk tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1563200782-b778742b785d'),
    isSpicy: true,
    tags: ['Jeroan', 'Lauk']
  },
  {
    id: 'l20',
    name: 'Gulai Cincang (Lauk)',
    price: 13000,
    description: 'Gulai cincang daging semangkuk tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1611082008897-400d3e512419'),
    isSpicy: true,
    tags: ['Daging', 'Lauk']
  },
  {
    id: 'l21',
    name: 'Gulai Nangka (Seporsi)',
    price: 7000,
    description: 'Sayur gulai nangka seporsi.',
    category: Category.LAUK,
    imageUrl: getImg('1629196726859-90c0b8b60378'), // Jackfruit curry approx
    isSpicy: true,
    tags: ['Sayur', 'Lauk']
  },
  {
    id: 'l22',
    name: 'Limpa (Lauk)',
    price: 13000,
    description: 'Limpa sapi bumbu kalio/rendang tanpa nasi.',
    category: Category.LAUK,
    imageUrl: getImg('1574653853027-6382a532397f'),
    isSpicy: true,
    tags: ['Jeroan', 'Lauk']
  },
  {
    id: 'l23',
    name: 'Tahu Terong Sambal Ijo',
    price: 5000,
    description: 'Seporsi tahu dan terong sambal ijo.',
    category: Category.LAUK,
    imageUrl: getImg('1551061803-3162810a08e1'), // Eggplant
    isSpicy: true,
    tags: ['Sayur', 'Lauk']
  },
  {
    id: 'l24',
    name: 'Terong Goreng Balado',
    price: 5000,
    description: 'Seporsi terong goreng balado.',
    category: Category.LAUK,
    imageUrl: getImg('1666965476332-944431e67041'), // Balado
    isSpicy: true,
    tags: ['Sayur', 'Lauk']
  },
  {
    id: 'l25',
    name: 'Oseng Tahu Tempe Balado',
    price: 5000,
    description: 'Seporsi oseng tahu tempe pedas manis.',
    category: Category.LAUK,
    imageUrl: getImg('1569426915357-d3eb99951662'), // Tempeh
    isSpicy: true,
    tags: ['Sayur', 'Lauk']
  },
  {
    id: 'l26',
    name: 'Jengkol Balado',
    price: 5000,
    description: 'Seporsi jengkol balado.',
    category: Category.LAUK,
    imageUrl: getImg('1565557623262-b51c2513a641'), // Reuse balado for jengkol placeholder
    isSpicy: true,
    tags: ['Jengkol', 'Lauk']
  },

  // --- TAMBAHAN ---
  {
    id: 't1',
    name: 'Nasi Putih',
    price: 5000,
    description: 'Nasi putih hangat satu porsi (bisa request).',
    category: Category.TAMBAHAN,
    imageUrl: getImg('1536304993881-ff00228b4db1'),
    isSpicy: false,
    tags: ['Nasi']
  },
  {
    id: 't2',
    name: 'Kerupuk Putih Kaleng',
    price: 1000,
    description: 'Kerupuk putih renyah.',
    category: Category.TAMBAHAN,
    imageUrl: getImg('1595692019702-60292976c666'),
    isSpicy: false,
    tags: ['Kerupuk']
  },
  {
    id: 't3',
    name: 'Kerupuk Kulit',
    price: 3000,
    description: 'Kerupuk kulit sapi/jangek gurih.',
    category: Category.TAMBAHAN,
    imageUrl: getImg('1593502859187-d1a221f73b64'),
    isSpicy: false,
    tags: ['Kerupuk', 'Jangek']
  },
  {
    id: 't4',
    name: 'Kerupuk Ikan',
    price: 3000,
    description: 'Kerupuk ikan palembang renyah.',
    category: Category.TAMBAHAN,
    imageUrl: getImg('1564834724105-918b73d1b9e0'),
    isSpicy: false,
    tags: ['Kerupuk']
  },
  {
    id: 't5',
    name: 'Nasi Kotak (Box)',
    price: 7000,
    description: 'Tambahan biaya untuk kemasan nasi kotak (Catering).',
    category: Category.TAMBAHAN,
    imageUrl: getImg('1650346907767-17b515d18581'),
    isSpicy: false,
    tags: ['Catering']
  },
  {
    id: 't6',
    name: 'Telur Asin',
    price: 4000,
    description: 'Telur bebek asin gurih.',
    category: Category.TAMBAHAN,
    imageUrl: getImg('1625943555295-d603a116b34e'),
    isSpicy: false,
    tags: ['Telur']
  },
  {
    id: 't7',
    name: 'Sendok Plastik',
    price: 0,
    description: 'Sendok plastik sekali pakai (Gratis).',
    category: Category.TAMBAHAN,
    imageUrl: getImg('1610701596007-11502861dcfa'),
    isSpicy: false,
    tags: ['Alat Makan']
  },

  // --- MINUMAN ---
  {
    id: 'd1',
    name: 'Air Putih',
    price: 0,
    description: 'Air mineral gelas (Gratis).',
    category: Category.MINUMAN,
    imageUrl: getImg('1538300342682-cf57afb97285'),
    isSpicy: false,
    tags: ['Gratis']
  },
  {
    id: 'd2',
    name: 'Es Teh Manis',
    price: 4000,
    description: 'Teh manis dingin menyegarkan.',
    category: Category.MINUMAN,
    imageUrl: getImg('1556679343-c7306c1976bc'),
    isSpicy: false,
    tags: ['Dingin']
  },
  {
    id: 'd3',
    name: 'Es Teh Tawar',
    price: 1000,
    description: 'Teh tawar dingin tanpa gula.',
    category: Category.MINUMAN,
    imageUrl: getImg('1625943553852-781c6dd46faa'),
    isSpicy: false,
    tags: ['Dingin']
  },
  {
    id: 'd4',
    name: 'Teh Hangat Manis',
    price: 3000,
    description: 'Teh manis hangat.',
    category: Category.MINUMAN,
    imageUrl: getImg('1577968897966-3d4325b36b61'),
    isSpicy: false,
    tags: ['Hangat']
  },
  {
    id: 'd5',
    name: 'Teh Tawar Hangat',
    price: 1000,
    description: 'Teh tawar hangat tanpa gula.',
    category: Category.MINUMAN,
    imageUrl: getImg('1544787219-6f47d4c2258f'),
    isSpicy: false,
    tags: ['Hangat']
  },
  {
    id: 'd6',
    name: 'Es Jeruk',
    price: 5000,
    description: 'Perasan jeruk segar dingin.',
    category: Category.MINUMAN,
    imageUrl: getImg('1616167882512-588235213612'),
    isSpicy: false,
    tags: ['Dingin', 'Jeruk']
  },
  {
    id: 'd7',
    name: 'Jeruk Hangat',
    price: 5000,
    description: 'Perasan jeruk hangat.',
    category: Category.MINUMAN,
    imageUrl: getImg('1595856407000-47cb5c898c64'), // Warm tea/drink lookalike
    isSpicy: false,
    tags: ['Hangat', 'Jeruk']
  },
  {
    id: 'd8',
    name: 'Aqua 600 ml',
    price: 4000,
    description: 'Air mineral botol sedang.',
    category: Category.MINUMAN,
    imageUrl: getImg('1568285200-c977114d59a8'), // Bottle
    isSpicy: false,
    tags: ['Botol']
  },
  {
    id: 'd9',
    name: 'Aqua 1.5 L',
    price: 7000,
    description: 'Air mineral botol besar.',
    category: Category.MINUMAN,
    imageUrl: getImg('1523362628674-31db8f75ccff'), // Big Bottle
    isSpicy: false,
    tags: ['Botol']
  },
  {
    id: 'd10',
    name: 'Vit 550 ml',
    price: 4000,
    description: 'Air mineral Vit botol sedang.',
    category: Category.MINUMAN,
    imageUrl: getImg('1568285200-c977114d59a8'),
    isSpicy: false,
    tags: ['Botol']
  },
  {
    id: 'd11',
    name: 'Vit 1.5 L',
    price: 7000,
    description: 'Air mineral Vit botol besar.',
    category: Category.MINUMAN,
    imageUrl: getImg('1523362628674-31db8f75ccff'),
    isSpicy: false,
    tags: ['Botol']
  },
  {
    id: 'd12',
    name: 'Aquviva 700 ml',
    price: 3000,
    description: 'Air mineral Aquviva.',
    category: Category.MINUMAN,
    imageUrl: getImg('1568285200-c977114d59a8'),
    isSpicy: false,
    tags: ['Botol']
  },
  {
    id: 'd13',
    name: 'Teh Pucuk 350 ml',
    price: 5000,
    description: 'Teh kemasan botol.',
    category: Category.MINUMAN,
    imageUrl: getImg('1625752946252-78d22383822a'), // Tea bottle
    isSpicy: false,
    tags: ['Botol']
  }
];

export const APP_NAME = "RM. Bungo Tanjung";
export const APP_SUBTITLE = "Masakan Asli Padang";
export const WA_CONTACT_1 = "+6285175005480";
export const WA_CONTACT_NAME_1 = "Netra";
export const WA_CONTACT_2 = "+6285174405480";
export const WA_CONTACT_NAME_2 = "Efrizal";