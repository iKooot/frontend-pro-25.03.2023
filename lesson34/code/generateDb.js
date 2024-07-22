import fs from 'fs/promises';
import { faker } from '@faker-js/faker';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).option('count', {
  alias: 'c',
  type: 'number',
  description: 'Number of hotels to generate',
  default: 10,
}).argv;

const count = argv.count;

const generateHotels = (num) => {
  const hotels = [];

  for (let i = 1; i <= num; i++) {
    hotels.push({
      id: faker.database.mongodbObjectId(),
      name: faker.company.name(),
      city: faker.location.city(),
      phone_number: faker.phone.number(),
      photo: faker.image.urlPicsumPhotos({ width: 140, height: 140 }),
    });
  }

  return hotels;
};

const db = {
  destination: [],
  hotels: generateHotels(count),
};

const writeDbFile = async () => {
  try {
    await fs.writeFile('db.json', JSON.stringify(db, null, 2));
    console.log(`db.json has been generated with ${count} mock hotels.`);
  } catch (error) {
    console.error('Error writing db.json:', error);
  }
};

writeDbFile();
