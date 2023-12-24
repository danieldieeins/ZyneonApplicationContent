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

function activateSidebar() {
    sidebar.classList.add('active');
}

function deactivateSidebar() {
    sidebar.classList.remove('active');
}

function toggleSidebar() {
    sidebar.classList.toggle('active');
}

function changeFrame(url) {
    if(url=="instances.html") {
        sidebar.classList.remove('active');
    } else if(url=="start.html") {
        sidebar.classList.add('active');
    } else if(url=="wiki.html") {
        sidebar.classList.remove('active');
    } else if(url=="wip.html") {
        sidebar.classList.remove('active');
    } else if(url=="settings.html") {
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

function setInstanceIcon(icon) {
    document.getElementById('instance-icon').src = icon;
}

function setInstanceTitle(title) {
    document.getElementById('instance-name').textContent = title;
}

function setInstanceLogo(logo) {
    document.getElementById('instance-logo').src = logo;
}

function setInstanceDescription(description) {
    document.getElementById('instance-description').textContent = description;
}

function setInstanceID(id) {
    document.getElementById('instance-settings').href = "javascript:callJavaMethod('button.instance-settings."+id+"');";
    document.getElementById('play-command').href = "javascript:callJavaMethod('button.start."+id+"');";
    setInstanceBackground("../assets/images/instances/"+id+".webp");
}

function setInstanceBackground(background) {
    document.getElementById('instance-background').textContent = "body{background-image: url('"+background+"');background-position: center;background-size: cover;}";
}

function syncInstance() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if(id!=null) {
        setInstanceID(id);
    }
    const icon = urlParams.get('icon');
    if(icon!=null) {
        setInstanceIcon(icon);
    }
    const title = urlParams.get('title');
    if(title!=null) {
        setInstanceTitle(title);
    }
    const logo = urlParams.get('logo');
    if(logo!=null) {
        setInstanceLogo(logo);
    }
    const description = urlParams.get('description');
    if(description!=null) {
        setInstanceDescription(description);
    }
}

function syncSettings() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if(id!=null) {
        document.getElementById('back-to-instance').href = "javascript:callJavaMethod('button.showinstance"+id+"');";
    }
    const title = urlParams.get('title');
    if(title!=null) {
        setInstanceTitle(title);
    }
    const icon = urlParams.get('icon');
    if(icon!=null) {
        setInstanceIcon(icon);
    }
}