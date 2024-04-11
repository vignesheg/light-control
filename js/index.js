import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get, onValue, push, update } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.9.0/firebase-database.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADZck8OcxpQlREnSxEAGdNTfpiAQPe5uE",
    authDomain: "luggage-tracker-4a6b7.firebaseapp.com",
    databaseURL: "https://luggage-tracker-4a6b7-default-rtdb.firebaseio.com",
    projectId: "luggage-tracker-4a6b7",
    storageBucket: "luggage-tracker-4a6b7.appspot.com",
    messagingSenderId: "1064844567049",
    appId: "1:1064844567049:web:0c88f8a701ea1eb67e4ed8",
    measurementId: "G-S5FCWT5V0B"
  };
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const db = getDatabase(app);

function on1(){
    const starCountRef = ref(db,'Relay1');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b1").html("OFF 1")
        $("#bt-1").addClass("button1")
      }else if(data == 0){
        $("#b1").html("ON 1")
        $("#bt-1").removeClass("button1")
      }
      
    });
}

 function on2(){
    const starCountRef = ref(db,'Relay2');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b2").html("OFF 2")
        $("#bt-2").addClass("button2")
      }else if(data == 0){
        $("#b2").html("ON 2")
        $("#bt-2").removeClass("button2")
      }
    });
}
    
function on3(){
    const starCountRef = ref(db,'Relay3');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b3").html("OFF 3")
        $("#bt-3").addClass("button3")
      }else if(data == 0){
        $("#b3").html("ON 3")
        $("#bt-3").removeClass("button3")
      }
    });
}
    

function on4(){
    const starCountRef = ref(db,'Relay4');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      
      if(data == 1){
        $("#b4").html("OFF 4")
        $("#bt-4").addClass("button4")
      }else if(data == 0){
        $("#b4").html("ON 4")
        $("#bt-4").removeClass("button4")
      }
    });
}

on1();
on2();
on3();
on4();

    
$("#bt-1").click(()=>{
    const starCountRef = ref(db,'Relay1');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            Relay1:0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            Relay1:1
        }
        update(ref(db), updates1);
      }
      
    },{
        onlyOnce: true
    });
})
    
$("#bt-2").click(()=>{
    const starCountRef = ref(db,'Relay2');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            Relay2:0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            Relay2:1
        }
        update(ref(db), updates1);
      }
      
    },{
        onlyOnce: true
    });
})

  

$("#bt-3").click(()=>{
    const starCountRef = ref(db,'Relay3');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            Relay3:0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            Relay3:1
        }
        update(ref(db), updates1);
      }
      
      
    },{
        onlyOnce: true
    });
})
$("#bt-4").click(()=>{
    const starCountRef = ref(db,'Relay4');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if(data == 1){
        let updates1 = {
            Relay4:0
        }
        update(ref(db), updates1);
      }else if(data == 0){
        let updates1 = {
            Relay4:1
        }
        update(ref(db), updates1);
      }
      
      
    },{
        onlyOnce: true
    });
})