import fs from 'node:fs/promises';
// import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    // const data = await fs.readFile(PATH_DB, 'utf8');
    const data = await fs.readFile(PATH_DB, {encoding: "utf-8"});
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
