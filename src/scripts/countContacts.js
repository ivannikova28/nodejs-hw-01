import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parseArr = JSON.parse(data);
    return parseArr.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
