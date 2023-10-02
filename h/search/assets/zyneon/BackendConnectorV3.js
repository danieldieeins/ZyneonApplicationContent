function callJavaMethod(message) {
    console.log("[Launcher-Bridge] "+message);
}

function syncAccount(message) {
    document.body.innerHTML = document.body.innerHTML.replace('%username%', message);
}

function syncButton(message) {
    document.body.innerHTML = document.body.innerHTML.replace('%acc_button%', message);
}

function syncLanguage(path,string) {
    document.body.innerHTML = document.body.innerHTML.replace(path, string);
}

document.addEventListener('contextmenu',function(e){
    e.preventDefault();
});

document.addEventListener('dragstart', function(e){
    e.preventDefault();
});

function syncModCard(name, id, description, author, png, url, version) {
    var originalDiv = document.getElementById("mod-template");
    var geklontesDiv = originalDiv.cloneNode(true);
    geklontesDiv.id = id;

    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("assets/images/background1.webp", png);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%name%", name);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%author%", author);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%description%", description);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("#show", url);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("#install", "javascript:callJavaMethod('button.install.mod.modrinth."+id+"."+version+"')");

    originalDiv.parentNode.insertBefore(geklontesDiv, originalDiv); // Änderung hier
}