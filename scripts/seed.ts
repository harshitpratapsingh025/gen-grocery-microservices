import { config } from 'dotenv';
import { DatabaseSeeder } from '@org/database';

config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://harshitwdipl_db_user:1kE3EMgKmwK7nDWz@cluster0.igtnhle.mongodb.net/zen-grocery';

async function seed() {
  const args = process.argv.slice(2);
  const command = args[0];

  try {
    await DatabaseSeeder.connect(MONGODB_URI);

    switch (command) {
      case 'products':
        await DatabaseSeeder.seedProducts();
        break;
      
      case 'clear-cart':
        await DatabaseSeeder.clearCart();
        break;
      
      case 'clear-all':
        await DatabaseSeeder.clearAll();
        break;
      
      case 'all':
      default:
        await DatabaseSeeder.clearAll();
        await DatabaseSeeder.seedProducts();
        console.log('\n🎉 Database seeding completed!\n');
        break;
    }

    await DatabaseSeeder.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    await DatabaseSeeder.disconnect();
    process.exit(1);
  }
}

seed();