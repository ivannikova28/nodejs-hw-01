import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {

  const createFakeContacts = (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    return contacts;
  };

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const availableContacts = JSON.parse(data);

    const newContacts = createFakeContacts(number);

    const updatedContacts = [...availableContacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
