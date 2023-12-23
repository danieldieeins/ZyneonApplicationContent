function callJavaMethod(message) {
    console.log("[Launcher-Bridge] "+message);
}

function syncAccount(message,uuid) {
    document.body.innerHTML = document.body.innerHTML.replace('%username%', message);
    document.body.innerHTML = document.body.innerHTML.replace('%main_user%', message);
    document.body.innerHTML = document.body.innerHTML.replace('%main_uuid%', uuid);
    document.body.innerHTML = document.body.innerHTML.replace('src="assets/images/background1.webp" alt="user_image"', 'src="https://cravatar.eu/helmhead/'+uuid+'/512.png" alt="user_image"');
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

function syncProfilesAlt(username,uuid) {
    var originalDiv = document.getElementById("alt");
    var geklontesDiv = originalDiv.cloneNode(true);
    geklontesDiv.id = uuid;

    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%profiles_username%", username);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%profiles_uuid%", uuid);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("button.logprofileout","button.logprofileout."+uuid);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("button.selectaccount","button.selectaccount."+uuid);

    originalDiv.parentNode.insertBefore(geklontesDiv, originalDiv);
}

function syncInstance(id,name,version,modloader,mlversion,minecraft,show) {
    var originalDiv = document.getElementById("instance_template");
    var geklontesDiv = originalDiv.cloneNode(true);
    geklontesDiv.id = id;

    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%in_name%", name);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%in_id%", id);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%in_version%",version);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%in_modloader%",modloader);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%in_mlversion%",mlversion);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%in_minecraft%",minecraft);
    geklontesDiv.innerHTML = geklontesDiv.innerHTML.replace("%in_view%",show);

    originalDiv.parentNode.insertBefore(geklontesDiv, originalDiv);
}