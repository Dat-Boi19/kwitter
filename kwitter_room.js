
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBDnQNwhJ6a27rKCDxevgShg9BxqtPJQso",
      authDomain: "greetingsbot-99pt.firebaseapp.com",
      databaseURL: "https://greetingsbot-99pt.firebaseio.com",
      projectId: "greetingsbot-99pt",
      storageBucket: "greetingsbot-99pt.appspot.com",
      messagingSenderId: "568637866685",
      appId: "1:568637866685:web:58e67ee5c118e70176add4",
      measurementId: "G-JH42PKE120"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
