const fs = require('fs/promises');
const path = require('path');

const readData = async () => {
  try {
    const data = await fs.readFile("data/app.txt", 'utf-8');
    console.log(data);
  } catch(e) {
    console.log(e);
  }
};

const writeData = async (data) => {
  try {
    const data = await fs.write("data/app.txt", data, 'utf-8');
  } catch(e) {
    console.log(e);
  }
};

module.exports = { readData, writeData };