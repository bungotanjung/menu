export enum Category {
  PAKET_NASI = 'Paket Nasi',
  LAUK = 'Lauk / Tanpa Nasi',
  TAMBAHAN = 'Tambahan',
  MINUMAN = 'Minuman',
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  imageUrl: string;
  isSpicy?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
}