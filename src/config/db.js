import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyC0GVzoyK2n_UouSkOMsoLl5PhVkITgqdg',
  authDomain: 'book-review-2019.firebaseapp.com',
  databaseURL: 'https://book-review-2019.firebaseio.com',
  projectId: 'book-review-2019',
  storageBucket: 'book-review-2019.appspot.com',
  messagingSenderId: '651956965812',
  appId: '1:651956965812:web:7d2eebab309ad88e88e2e1',
  measurementId: 'G-XJ221LJXBH',
};
let app = firebase.initializeApp(config);
export const db = app.database();
