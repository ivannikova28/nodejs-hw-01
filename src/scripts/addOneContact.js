import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const availableContacts = JSON.parse(data);

    const newContacts = createFakeContact();

    const updatedContacts = [...availableContacts, newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
