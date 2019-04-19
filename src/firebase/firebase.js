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

export const sections = [
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
      console.log("Data retrieved from local storage");
      refreshData = OL_DATA.timestamp < timestamp;
      if(refreshData) {
        console.log("Data flagged for a refresh from server");
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
