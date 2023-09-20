function callJavaMethod(message) {
    console.log("[Backend-Connector] "+message);
}

function setFilePath(message) {
    var inputElement = document.getElementById("url");
    inputElement.placeholder = message;
}

function setJsonPath(message) {
    var inputElement = document.getElementById("json");
    inputElement.placeholder = message;
}

function sendJson() {
    callJavaMethod("set.login."+document.getElementById("email").value);
    callJavaMethod("set.password."+document.getElementById("password").value);
}

function sendInput() {
    callJavaMethod("set.creator."+document.getElementById("email").value);
    callJavaMethod("set.id."+document.getElementById("id").value);
    callJavaMethod("set.name."+document.getElementById("name").value);
    callJavaMethod("set.version."+document.getElementById("version").value);
    callJavaMethod("set.minecraft."+document.getElementById("minecraft").value);
    callJavaMethod("set.mlv."+document.getElementById("modloader-version").value);
    callJavaMethod("set.file."+document.getElementById("url").value);

    var selected = document.querySelector("input[name='modloader']:checked");

    callJavaMethod("set.modloader."+selected.value);
}