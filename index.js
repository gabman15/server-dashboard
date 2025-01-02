window.onload=onLoad;

function onLoad() {
    appendData(applicationsJson);
}

function appendData(data) {
    let mainContainer = document.getElementById("applications");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].name + ', Url: ' + data[i].url;
        mainContainer.appendChild(div);
    }
}
