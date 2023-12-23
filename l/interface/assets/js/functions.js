let btn = document.querySelector('#btn');
let pfp = document.querySelector('#pfp');
let sidebar = document.querySelector('.sidebar');

document.addEventListener('contextmenu',function(e){
    e.preventDefault();
});

document.addEventListener('dragstart', function(e){
    e.preventDefault();
});
        
btn.onclick = function () {
    sidebar.classList.toggle('active');
};
pfp.onclick = function () {
    sidebar.classList.toggle('active');
};

function changeFrame(url) {
    if(url=="start.html") {
        sidebar.classList.add('active');
    }  else {
        sidebar.classList.remove('active');
    }
    var iframe = document.getElementById('iframe');
    iframe.src = url;
}

function login(username) {
    document.getElementById("account").textContent = "Logout";
    document.getElementById("username").textContent = username;
    var pfp = document.getElementById("pfp");
    pfp.src = "https://cravatar.eu/helmhead/"+username+"/1024"
    pfp.alt = username+"'s minecraft ingame head"
}

function logout() {
    document.getElementById("account").textContent = "Login";
    document.getElementById("username").textContent = "Not logged in";
    var pfp = document.getElementById("pfp");
    pfp.src = "assets/images/steve.png";
    pfp.alt = "default profile picture";
}

function turnOnLights() {
    document.getElementById('index-style').href = 'assets/css/light/index.css';
    document.getElementById('style').href = 'assets/css/light/style.css';
}

function turnOffLights() {
    document.getElementById('index-style').href = 'assets/css/index.css';
    document.getElementById('style').href = 'assets/css/style.css';
}

function callJavaMethod(message) {
    console.log("[Launcher-Bridge] "+message);
}