import * as firebase from 'firebase';

// Initialize Firebase app
const firebaseConfig = {
  apiKey: 'AIzaSyCoCqUGi7DHrgopCxEkpfehypDLaj9HcCM',
  authDomain: 'expensify-app-9488f.firebaseapp.com',
  databaseURL: 'https://expensify-app-9488f.firebaseio.com',
  projectId: 'expensify-app-9488f',
  storageBucket: 'expensify-app-9488f.appspot.com',
  messagingSenderId: '468508118281',
  appId: '1:468508118281:web:690ef2372e083d93e517d8',
  measurementId: 'G-ECB9Y582TZ'
};

firebase.initializeApp(firebaseConfig);

// firebase
//   .database()
//   .ref()
//   .set({
//     name: 'Aman Saharan',
//     age: 32,
//     location: {
//       city: 'Rohtak',
//       state: 'Haryana'
//     }
//   })
//   .then(() => {
//     console.log('Successfully wrote the data to database');
//   })
//   .catch(e => {
//     console.log('error', e);
//   });
// firebase
//   .database()
//   .ref('attributes')
//   .set({
//     weight: 82,
//     height: 183
//   })
//   .then(() => {
//     console.log('Successfully added attributes  to database');
//   })
//   .catch(e => {
//     console.log('error', e);
//   });

// firebase
//   .database()
//   .ref('age')
//   .remove()
//   .then(function() {
//     console.log('Remove succeeded.');
//   })
//   .catch(function(error) {
//     console.log('Remove failed: ' + error.message);
//   });

// firebase
//   .database()
//   .ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(function(error) {
//     console.log('Remove failed: ' + error.message);
//   });

const database = firebase.database();

// database.ref('expenses').push({
//   description: 'Gas Bill',
//   note: '',
//   amount: 800,
//   createdAt: 8795000
// });
// database.ref('expenses').push({
//   description: 'Water Bill',
//   note: '',
//   amount: 1000,
//   createdAt: 8796000
// });
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 500,
//   createdAt: 879897000
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapShot => {
//       console.log(childSnapShot.key);
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val()
//       });
//     });
//     console.log(expenses);
//   });
