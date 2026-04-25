export interface ExtraItem {
  id: string;
  name: string;
  nameVn: string;
  price: string;
}

export interface ExtrasSection {
  sweet: ExtraItem[];
  salty: ExtraItem[];
}

const extrasData: ExtrasSection = {
  sweet: [
    { id: 'honey', name: 'Honey', nameVn: 'Mật Ong', price: '25.000' },
    { id: 'almond', name: 'Almond', nameVn: 'Hạnh Nhân', price: '25.000' },
    { id: 'chocolate', name: 'Chocolate', nameVn: 'Socola', price: '25.000' },
    { id: 'jam', name: 'Jam', nameVn: 'Mứt', price: '25.000' },
    { id: 'peanut-butter', name: 'Peanut Butter', nameVn: 'Bơ Lạc', price: '25.000' },
    { id: 'nutella', name: 'Nutella', nameVn: 'Nutella', price: '25.000' },
    { id: 'custard', name: 'Custard', nameVn: 'Kem Trứng', price: '25.000' },
    { id: 'fresh-fruit', name: 'Fresh Fruit', nameVn: 'Trái Cây Tươi', price: '35.000' },
  ],
  salty: [
    { id: 'extra-ham', name: 'Extra Ham', nameVn: 'Thêm Giăm Bông', price: '35.000' },
    { id: 'extra-cheese', name: 'Extra Cheese', nameVn: 'Thêm Phô Mai', price: '30.000' },
    { id: 'extra-meat', name: 'Extra Meat', nameVn: 'Thêm Thịt', price: '40.000' },
    { id: 'extra-salmon', name: 'Extra Salmon', nameVn: 'Thêm Cá Hồi', price: '45.000' },
    { id: 'avocado', name: 'Avocado', nameVn: 'Bơ', price: '35.000' },
    { id: 'fried-egg', name: 'Fried Egg', nameVn: 'Trứng Chiên', price: '25.000' },
    { id: 'bacon', name: 'Bacon', nameVn: 'Thịt Xông Khói', price: '35.000' },
    { id: 'extra-butter', name: 'Extra Butter', nameVn: 'Thêm Bơ', price: '15.000' },
  ],
};

export default extrasData;
