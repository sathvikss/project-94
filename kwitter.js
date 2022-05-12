function addUser()
{  
    you = document.getElementById("user_name").value 
    
    localStorage.setItem("you", you)
    
   document.getElementById("main").outerHTML = button
}
button = "<button onclick='next()'>Next</button>"
function next(){
    window.location = "kwitter_room.html"
    label = localStorage.getItem("you")
    
}
const firebaseConfig = {
    apiKey: "AIzaSyCsQ82TapsCzjKKE_bO9dTZwrmpdPNR-Ho",
    authDomain: "chat-92ac9.firebaseapp.com",
    projectId: "chat-92ac9",
    storageBucket: "chat-92ac9.appspot.com",
    messagingSenderId: "1098265846594",
    appId: "1:1098265846594:web:d08196ca9884b4753d5edb"
  };

  firebaseConfig.initializeApp(firebaseConfig);
  

