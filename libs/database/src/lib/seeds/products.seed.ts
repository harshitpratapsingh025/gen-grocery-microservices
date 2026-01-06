import { Product, ProductCategory } from '@org/types';

export const productsSeedData: Product[] = [
  // Fruits
  {
    name: 'Apple',
    price: 120,
    category: ProductCategory.FRUITS,
    imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400'
  },
  {
    name: 'Banana',
    price: 60,
    category: ProductCategory.FRUITS,
    imageUrl: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400'
  },
  {
    name: 'Orange',
    price: 80,
    category: ProductCategory.FRUITS,
    imageUrl: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400'
  },
  {
    name: 'Mango',
    price: 150,
    category: ProductCategory.FRUITS,
    imageUrl: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400'
  },
  {
    name: 'Grapes',
    price: 100,
    category: ProductCategory.FRUITS,
    imageUrl: 'https://images.unsplash.com/photo-1599819177924-b8b386a1b1ec?w=400'
  },
  
  // Vegetables
  {
    name: 'Tomato',
    price: 40,
    category: ProductCategory.VEGETABLES,
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400'
  },
  {
    name: 'Potato',
    price: 30,
    category: ProductCategory.VEGETABLES,
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400'
  },
  {
    name: 'Onion',
    price: 35,
    category: ProductCategory.VEGETABLES,
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400'
  },
  {
    name: 'Carrot',
    price: 50,
    category: ProductCategory.VEGETABLES,
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400'
  },
  {
    name: 'Broccoli',
    price: 70,
    category: ProductCategory.VEGETABLES,
    imageUrl: 'https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=400'
  },
  
  // Dairy
  {
    name: 'Milk (1L)',
    price: 60,
    category: ProductCategory.DAIRY,
    imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400'
  },
  {
    name: 'Cheese',
    price: 200,
    category: ProductCategory.DAIRY,
    imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400'
  },
  {
    name: 'Yogurt',
    price: 45,
    category: ProductCategory.DAIRY,
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400'
  },
  {
    name: 'Butter',
    price: 90,
    category: ProductCategory.DAIRY,
    imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400'
  },
  
  // Bakery
  {
    name: 'White Bread',
    price: 40,
    category: ProductCategory.BAKERY,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
  },
  {
    name: 'Croissant',
    price: 80,
    category: ProductCategory.BAKERY,
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400'
  },
  {
    name: 'Bagel',
    price: 60,
    category: ProductCategory.BAKERY,
    imageUrl: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400'
  },
  
  // Meat
  {
    name: 'Chicken Breast (500g)',
    price: 180,
    category: ProductCategory.MEAT,
    imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400'
  },
  {
    name: 'Ground Beef (500g)',
    price: 250,
    category: ProductCategory.MEAT,
    imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400'
  },
  {
    name: 'Salmon Fillet (500g)',
    price: 400,
    category: ProductCategory.MEAT,
    imageUrl: 'https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?w=400'
  },
  
  // Beverages
  {
    name: 'Orange Juice (1L)',
    price: 90,
    category: ProductCategory.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400'
  },
  {
    name: 'Coffee Beans (250g)',
    price: 300,
    category: ProductCategory.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'
  },
  {
    name: 'Green Tea',
    price: 150,
    category: ProductCategory.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400'
  },
  {
    name: 'Mineral Water (1L)',
    price: 20,
    category: ProductCategory.BEVERAGES,
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400'
  },
  
  // Snacks
  {
    name: 'Potato Chips',
    price: 50,
    category: ProductCategory.SNACKS,
    imageUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400'
  },
  {
    name: 'Chocolate Bar',
    price: 40,
    category: ProductCategory.SNACKS,
    imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400'
  },
  {
    name: 'Mixed Nuts (200g)',
    price: 180,
    category: ProductCategory.SNACKS,
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400'
  },
  {
    name: 'Granola Bar',
    price: 35,
    category: ProductCategory.SNACKS,
    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400'
  }
];