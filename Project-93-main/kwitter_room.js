function logout()
{
    window.location = "index.html"

}
function load()
{
    

    document.getElementById("load").outerHTML = ""
    document.getElementById("my").innerText = "Hi "+localStorage.getItem("you")
    document.getElementById("hi").outerHTML =     "<br><br><br><br><br>Room Names<br><br><br><br><br><input id='addRoom' placeholder='#AddRoom'> <br> <br><button onclick='run()'>Add</button><br><br><br><br><label id='rooms'></label>"
}

