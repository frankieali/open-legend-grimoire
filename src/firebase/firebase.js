// import * as firebase from 'firebase';
import * as firebase from "firebase/app";
import "firebase/database";


/**
 * TODO:
 *  - Add loading indicator when fetching data. Even call for timestamp is taking several seconds
 */

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCC9iVnPFA1ccq7t0yl0UXMVPn22dwIg4c",
  authDomain: "open-legend.firebaseapp.com",
  databaseURL: "https://open-legend.firebaseio.com",
  projectId: "open-legend",
  storageBucket: "open-legend.appspot.com",
  messagingSenderId: "31149105554"
};

firebase.initializeApp(config);
const database = firebase.database();

export const old_sections = [
  {key: 'boons', value: "Boons"},
  {key: 'banes', value: "Banes"},
  {key: 'feats', value: "Feats"},
  {key: 'perks', value: "Perks"},
  {key: 'flaws', value: "Flaws"},
  {key: 'weapons', value: "Weapons"},
  {key: 'armor', value: "Armor"},
  {key: 'items', value: "Items"},
  {key: 'transportation', value: "Mounts & Vehicles"},
  {key: 'properties', value: "Properties"},
];

export const sections = {
  boons: {
    value: "Boons",
    tableCols: [
      'Power Level',
      'Duration',
      'Invocation Time',
      'Attribute'
    ]
  },
  banes: {
    value: "Banes",
    tableCols: [
      'Power Level',
      'Duration',
      'Invocation Time',
      'Attribute',
      'Tags'
    ]
  },
  feats: {
    value: "Feats",
    tableCols: [
      'Cost',
      'Tags',
      ['data-tierPrereq','Prerequisites']
    ]
  },
  perks: {
    value: "Perks",
    tableCols: [
      ['data-description','Description']
    ]
  },
  flaws: {
    value: "Flaws",
    tableCols: [
      ['data-description','Description']
    ]
  },
  weapons: {
    value: "Weapons",
    tableCols: [
      "Type",
      ["Wealth Level","WL"],
      "Properties",
      "Banes"
    ]
  },
  armor: {
    value: "Armor",
    tableCols: [
      "Type",
      ["Wealth Level","WL"],
      "Required Fortitude",
      "Defense Bonus",
      "Speed Penalty"
    ]
  },
  items: {
    value: "Items",
    tableCols: [
      "Type",
      ["Wealth Level","WL"],
      "Properties",
      "Attributes",
      "Boons",
      "Banes"
    ]
  },
  transportation: {
    value: "Mounts & Vehicles",
    tableCols: [
      "Type",
      ["Wealth Level","WL"],
      "Speed",
      "Attributes",
      "Feats",
      "HP",
      "DT"
    ]
  },
  properties: {
    value: "Properties",
    tableCols: [
      "Type",
      "Wealth Modifier"
    ]
  }
};

const fetchDataFromFirebase = (reference) => {
  return new Promise((resolve, reject) => {
    console.log("fetching data from firebase");
    
    database.ref(reference)
      .once('value')
      .then((snapshot) => {
        resolve(snapshot.val());
      })
      .catch((e) => {
        console.log('Error fetching data', e);
        reject();
      });
  });
};

const fetchData = new Promise((resolve, reject) => {


  fetchDataFromFirebase("timestamp").then((timestamp) => {

    let OL_DATA = localStorage["OL_DATA"] || false;
    let refreshData = false;
    try {
      OL_DATA = JSON.parse(OL_DATA);
      if(OL_DATA) {
        console.log("Data retrieved from local storage");
      }
      refreshData = !OL_DATA ? true : OL_DATA.timestamp < timestamp;
      if(refreshData) {
        console.log("Fetching fresh data from server");
      }
    } catch(error) {
      console.log("JSON parse error:", error);
      OL_DATA = false
    }
    
    if(!OL_DATA || refreshData) {
      // resolve(refreshData)
      return refreshData;
    } else {
      // resolve(OL_DATA);
      return OL_DATA;
    }
  }).then((data) => {
    if(data === true) {
      return fetchDataFromFirebase().then((freshData) => {
        localStorage.setItem('OL_DATA', JSON.stringify(freshData))
        resolve(freshData)
      });
    } else {
      resolve(data)
    }
  })
  .catch((e) => {
    console.log('Error retrieving data', e);
    reject();
  });
  
});

export default fetchData;
