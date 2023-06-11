// crawler.js

import { REAL_ESTATE_CONFIG, RealEstateType } from "../models/item";

const axios = require('axios');
const cheerio = require('cheerio');
const SSLV_BASE='https://ss.com';
const REAL_ESTATE_URL = `${SSLV_BASE}/real-estate`

async function fetchItems() {
  try {
    for(let [category, key] of Object.keys(REAL_ESTATE_CONFIG)){
        await fetchRealEstateItem(category, key);
    }

    // Parse the website and extract the required data

    // return items; // Return the extracted data
  } catch (error) {
    console.error('Error fetching items:', error);
  }
}

async function fetchRealEstateItem(key: string, name: string){
    console.log(key);
    const urlToFetch = `${REAL_ESTATE_URL}/${key}`;
    const response = await axios.get(REAL_ESTATE_URL);
    const $ = cheerio.load(response.data);

    return $;
}


fetchItems().then((items) => {
  // Process the fetched items here
});